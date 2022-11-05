import * as Styled from "./style";
import mock from "../../Data/mock.json";
import imgDesktop from '../../assets/images/desktop/image-interactive.jpg';
import imgMobile from '../../assets/images/mobile/image-interactive.jpg';

export default function MainSection() {
  return (
    <Styled.Container className="center">
        <img src={imgDesktop} />
        <Styled.ContainerContent>
            <h2>{mock.mainoption.title}</h2>
            <p>{mock.mainoption.content}</p>
        </Styled.ContainerContent>
    </Styled.Container>
  );
}
