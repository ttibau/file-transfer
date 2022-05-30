import '@react95/icons/icons.css';
import * as Styled from './styles';

interface DesktopItemProps {
  icon?: string;
  label?: string;
}

const DesktopItem = (props: DesktopItemProps) => {
  return (
    <Styled.IconContainer>
      <span className={props.icon} />
      <Styled.IconText>{props.label}</Styled.IconText>
    </Styled.IconContainer>
  );
};

export default DesktopItem;
