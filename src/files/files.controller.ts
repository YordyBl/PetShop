import {
  BadRequestException,
  Controller,
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

  @Post('product')
  @UseInterceptors(
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
  uploadImage(@UploadedFile() file: Express.Multer.File) {

    if(!file){
      throw new BadRequestException('No subiste una imagen')
    }


    return {
      filename: file.originalname,
    };
  }
}
