import react from 'react';
import * as Styled from './styles';

interface IFileIcon {
  imageURL: string;
  height?: string;
}

const FileIcon = ({ imageURL, height, ...otherProps }: IFileIcon) => {
  return (
    <Styled.Icon {...otherProps} height={height}>
      {imageURL && <Styled.IconIMG src={imageURL} alt={`icon`} />}
    </Styled.Icon>
  );
};

export default FileIcon;
