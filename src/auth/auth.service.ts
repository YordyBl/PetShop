import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';
import { CreateUserDto, LoginUserDto } from './dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async create(createAuthDto: CreateUserDto) {
    try {
      const { password, ...userData } = createAuthDto;
      const user = this.userRepository.create({
        ...userData,
        password: bcrypt.hashSync(password, 10),
      });
      await this.userRepository.save(user);
      delete user.password;
      return user;
    } catch (error) {
      this.handleDBExceptions(error);
    }
  }

  async login(loginUserDto: LoginUserDto) {
    const { password, email } = loginUserDto;
    const user = await this.userRepository.findOne({ 
      where: {email},
      select: {email:true, password:true}
     });
    console.log(user)
    if(!user){
      throw new UnauthorizedException('Credenciales incorrectas (Email)')
    }
    if(!bcrypt.compareSync(password, user.password)){
      throw new UnauthorizedException('Contraseña incorrecta')
    }
    return user;
  }
  // async findByOne(email: String){
  //   const queryBuilder = this.userRepository.createQueryBuilder()
  // }

  private handleDBExceptions(error: any) {
    if (error.code === '23505') throw new BadRequestException(error.detail);

    // this.logger.error(error);
    console.log(error);
    throw new InternalServerErrorException(
      'Unexpected error, check server logs',
    );
  }
}
