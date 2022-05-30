import styled from 'styled-components';

export const Container = styled.div``

export const IconContainer = styled.button`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4;
  min-width: 150px;
  border: none;
  background-color: transparent;

  i,
  :hover {
    cursor: pointer;
  }

  i {
    margin-bottom: 8;
  }

  :hover {
    box-shadow: out;
  }
`;

export const IconText = styled.span`
  font-family: ms_sans_serif;
  margin-top: 0.3rem;
`
