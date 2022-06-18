import { Fieldset } from 'react95';
import styled from 'styled-components';

export const Container = styled.div``;

interface IRoomInfoLabel {
  ml?: boolean;
}
export const RoomInfoLabel = styled.span<IRoomInfoLabel>`
  font-weight: bold;
  margin-left: ${(props) => (props.ml ? '0.7rem' : '0')};
`;

export const RoomInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const RoomInfoRow = styled.div`
  display: flex;
  flex-direction: row;
`;

export const RoomInfoValue = styled.span`
  margin-left: 5px;
`;

export const RoomButtonIcon = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const UploadFileSection = styled(Fieldset)`
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  cursor: pointer;
`;

export const DropFilesLabel = styled.span`
  font-style: italic;
  font-size: 0.8rem;
`;

export const TableContent = styled.div`
  margin-top: 10px;
`;
