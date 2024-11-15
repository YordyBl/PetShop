export const fileFilter = (
  req: Express.Request,
  file: Express.Multer.File,
  cb: Function,
) => {
  if (!file) return cb(new Error('File is empty'), false);
  const fileExtension = file.mimetype.split('/')[1];
  const validExtension = ['jpeg', 'png', 'jpg', 'gif'].includes(fileExtension);
  if (validExtension) {
    return cb(null, true);
  }
  cb(null, false);
};
