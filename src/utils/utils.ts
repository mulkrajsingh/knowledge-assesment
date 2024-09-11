export const getFileExtension = (filename: string) => {
  let extension = '';
  if (filename) {
    const filenameArr = filename.split('.');
    extension = filenameArr[filenameArr.length - 1];
  }
  return extension;
};

export const isFileAccepted = (
  fileExtension: string,
  acceptedExtension: string[],
) => acceptedExtension.includes(`.${fileExtension}`);
