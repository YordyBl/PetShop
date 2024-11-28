// import {
//   BadRequestException,
//   Controller,
//   Get,
//   Param,
//   Post,
//   Res,
//   UploadedFile,
//   UseInterceptors,
// } from '@nestjs/common';
// import { FilesService } from './files.service';
// import { FileInterceptor } from '@nestjs/platform-express';
// import { fileFilter } from './helpers/fileFilters';
// import { diskStorage } from 'multer';
// import { fileNamer } from './helpers/fileNamer';
// import { Response } from 'express';
// import { ConfigService } from '@nestjs/config';

// @Controller('files')
// export class FilesController {
//   constructor(
//     private readonly filesService: FilesService,
//     private readonly configService: ConfigService,
//   ) {}
//   @Get('product/:imageName')
//   findProductImage(
//     @Res() res: Response,
//     @Param('imageName') imageName: string,
//   ) {
//     const path = this.filesService.getStaticProductImage(imageName);
//     // res.status(403).json({
//     //   ok: false,
//     //   path: path,
//     // });

//     res.sendFile(path);
//   }

//   @Post('product')
//   @UseInterceptors(
//     //El file interceptor me permite accesor a los archivos del body
//     //el file corresponde al con que nombre pasará desde el body
//     FileInterceptor('file', {
//       fileFilter: fileFilter,
//       // limits: {fileSize: 300}
//       // Esto me permite definir la ruta donde guardaré
//       storage: diskStorage({
//         destination: '../static/products',
//         filename: fileNamer,
//       }),
//     }),
//   ) //el FileInterceptor espera el nombre del body
//   //El UploaedFile sirve para recibir el archivo desde el body
//   uploadProductImage(@UploadedFile() file: Express.Multer.File) {
//     if (!file) {
//       throw new BadRequestException('No subiste una imagen');
//     }

//     const secureUrl = `${this.configService.get('HOST_API')}/files/product/${
//       file.filename
//     }`;

//     return {
//       secureUrl,
//     };
//   }
// }

import { Controller, Get, Post, Param, UploadedFile, UseInterceptors, BadRequestException, Res } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { FileInterceptor } from '@nestjs/platform-express';
import { Response } from 'express';
import { diskStorage } from 'multer';
import { FilesService } from './files.service';

import { fileFilter, fileNamer } from './helpers';


@Controller('files')
export class FilesController {
  constructor(
    private readonly filesService: FilesService,
    private readonly configService: ConfigService,
  ) {}

  @Get('product/:imageName')
  findProductImage(
    @Res() res: Response,
    @Param('imageName') imageName: string
  ) {

    const path = this.filesService.getStaticProductImage( imageName );

    res.sendFile( path );
  }



  @Post('product')
  @UseInterceptors( FileInterceptor('file', {
    fileFilter: fileFilter,
    // limits: { fileSize: 1000 }
    storage: diskStorage({
      destination: '../../static/products',
      filename: fileNamer
    })
  }) )
  uploadProductImage( 
    @UploadedFile() file: Express.Multer.File,
  ){

    if ( !file ) {
      throw new BadRequestException('Make sure that the file is an image');
    }

    // const secureUrl = `${ file.filename }`;
    const secureUrl = `${ this.configService.get('HOST_API') }/files/product/${ file.filename }`;

    return { secureUrl };
  }

}