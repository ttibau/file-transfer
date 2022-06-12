import styled from 'styled-components';

interface IContainerProps {
  size?: 'sm' | 'md' | 'lg';
}

export const Container = styled.div`
  padding: 1rem;
  .window-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: move;
  }
  .close-icon {
    display: inline-block;
    width: 16px;
    height: 16px;
    margin-left: -1px;
    margin-top: -1px;
    transform: rotateZ(45deg);
    position: relative;
    &:before,
    &:after {
      content: '';
      position: absolute;
      background: black;
    }
    &:before {
      height: 100%;
      width: 3px;
      left: 50%;
      transform: translateX(-50%);
    }
    &:after {
      height: 3px;
      width: 100%;
      left: 0px;
      top: 50%;
      transform: translateY(-50%);
    }
  }
  .window {
    width: ${(props: IContainerProps) => {
      switch (props.size) {
        case 'sm':
          return '400px';
        case 'md':
          return '600px';
        case 'lg':
          return '960px';
        default:
          return '400px';
      }
    }};
    min-height: 200px;
  }
  .window:nth-child(2) {
    margin: 2rem;
  }
  .footer {
    display: block;
    margin: 0.25rem;
    height: 31px;
    line-height: 31px;
    padding-left: 0.25rem;
  }
`;
