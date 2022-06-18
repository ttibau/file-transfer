export const getFileType = (filename: string) => {
  return filename.split('.').pop();
};
