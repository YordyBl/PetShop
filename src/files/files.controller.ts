import {
  BadRequestException,
  Controller,
  Get,
  Param,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FilesService } from './files.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { fileFilter } from './helpers/fileFilters';
import { diskStorage } from 'multer';
import { fileNamer } from './helpers/fileNamer';

@Controller('files')
export class FilesController {
  constructor(private readonly filesService: FilesService) {}
  @Get('product/:imageName')
  findProductImage( @Param('imageName') imageName: string){
      return this.filesService.getStaticProductImage(imageName);
  }

  @Post('product')
  @UseInterceptors(
    //El file interceptor me permite accesor a los archivos del body
    //el file corresponde al con que nombre pasará desde el body
    FileInterceptor('file', {
      fileFilter: fileFilter,
      // limits: {fileSize: 300}
      // Esto me permite definir la ruta donde guardaré
      storage: diskStorage({
        destination: './static/uploads',
        filename: fileNamer
      })
    }),
  ) //el FileInterceptor espera el nombre del body
  //El UploaedFile sirve para recibir el archivo desde el body
  uploadImage(@UploadedFile() file: Express.Multer.File) {

    if(!file){
      throw new BadRequestException('No subiste una imagen')
    }

    const secureUrl = `${file.filename}`;

    return {
      secureUrl
    };
  }
}
