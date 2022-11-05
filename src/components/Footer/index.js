import * as Styled from './style';
import logo from '../../assets/images/logo.svg';

// social midia

import facebook from '../../assets/images/icon-facebook.svg';
import twitter from '../../assets/images/icon-twitter.svg';
import pinterest from '../../assets/images/icon-pinterest.svg';
import instagram from '../../assets/images/icon-instagram.svg';

export default function Footer() {

    return (
        <Styled.Container>
            <Styled.ContainerFooter className='center' >
                <div>
                    <img src={logo} />
                    <Styled.Navgate>
                        <a href='*' > Sobre </a>
                        <a href='*' > Carreiras </a>
                        <a href='*' > Eventos </a>
                        <a href='*' > Produtos </a>
                        <a href='*' > Suporte </a>
                    </Styled.Navgate>
                </div>

                <div>
                    <Styled.NavigateSocialMidia>
                        <a href='*' > <img src={facebook} /> </a>
                        <a href='*' > <img src={twitter} /> </a>
                        <a href='*' > <img src={pinterest} /> </a>
                        <a href='*' > <img src={instagram} /> </a>
                    </Styled.NavigateSocialMidia>
                    <span>&copy; 2022 Loopstudio. Todos os direitos reservados </span>
                </div>
            </Styled.ContainerFooter>
        </Styled.Container>
    )
}