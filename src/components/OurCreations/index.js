import { useEffect, useState } from "react";
import mock from "../../Data/mock.json";

import * as Styled from "./style";

// desktop
import imgDesktopHeart from "../../assets/images/desktop/image-deep-earth.jpg";
import imgDesktopNightArcade from "../../assets/images/desktop/image-night-arcade.jpg";
import imgDesktopSoccerTeam from "../../assets/images/desktop/image-soccer-team.jpg";
import imgDesktopGrid from "../../assets/images/desktop/image-grid.jpg";
import imgDesktopFromAbove from "../../assets/images/desktop/image-from-above.jpg";
import imgDesktopPocketBorealis from "../../assets/images/desktop/image-pocket-borealis.jpg";
import imgDesktopTheCuriosity from "../../assets/images/desktop/image-curiosity.jpg";
import imgDesktopFisheye from "../../assets/images/desktop/image-fisheye.jpg";

// mobile
import imgMobileHeart from "../../assets/images/mobile/image-deep-earth.jpg";
import imgMobileNightArcade from "../../assets/images/mobile/image-night-arcade.jpg";
import imgMobileSoccerTeam from "../../assets/images/mobile/image-soccer-team.jpg";
import imgMobileGrid from "../../assets/images/mobile/image-grid.jpg";
import imgMobileFromAbove from "../../assets/images/mobile/image-from-above.jpg";
import imgMobilePocketBorealis from "../../assets/images/mobile/image-pocket-borealis.jpg";
import imgMobileTheCuriosity from "../../assets/images/mobile/image-curiosity.jpg";
import imgMobileFisheye from "../../assets/images/mobile/image-fisheye.jpg";

export default function OurCreations() {
  const [viewport, setViewport] = useState(null);

  useEffect(() => {
    setViewport(window.screen.width);
  }, [viewport]);

  console.log(viewport);

  return (
    <Styled.Container className="center">
      <h2>Outras criações</h2>
      <Styled.ContainerOptions>
        <Styled.Option>
          <div>
            <img src={viewport > 500 ? imgDesktopHeart : imgMobileHeart} />
            <h4>{mock.options[0].titleResume}</h4>
          </div>
        </Styled.Option>

        <Styled.Option>
          <div>
            <img
              src={
                viewport > 500 ? imgDesktopNightArcade : imgMobileNightArcade
              }
            />
            <h4>{mock.options[1].titleResume}</h4>
          </div>
        </Styled.Option>

        <Styled.Option>
          <div>
            <img
              src={viewport > 500 ? imgDesktopSoccerTeam : imgMobileSoccerTeam}
            />
            <h4>{mock.options[2].titleResume}</h4>
          </div>
        </Styled.Option>

        <Styled.Option>
          <div>
            <img src={viewport > 500 ? imgDesktopGrid : imgMobileGrid} />
            <h4>{mock.options[3].titleResume}</h4>
          </div>
        </Styled.Option>

        <Styled.Option>
          <div>
            <img
              src={viewport > 500 ? imgDesktopFromAbove : imgMobileFromAbove}
            />
            <h4>{mock.options[4].titleResume}</h4>
          </div>
        </Styled.Option>

        <Styled.Option>
          <div>
            <img
              src={
                viewport > 500
                  ? imgDesktopPocketBorealis
                  : imgMobilePocketBorealis
              }
            />
            <h4>{mock.options[5].titleResume}</h4>
          </div>
        </Styled.Option>

        <Styled.Option>
          <div>
            <img
              src={
                viewport > 500 ? imgDesktopTheCuriosity : imgMobileTheCuriosity
              }
            />
            <h4>{mock.options[6].titleResume}</h4>
          </div>
        </Styled.Option>

        <Styled.Option>
          <div>
            <img src={viewport > 500 ? imgDesktopFisheye : imgMobileFisheye} />
            <h4>{mock.options[7].titleResume}</h4>
          </div>
        </Styled.Option>
      </Styled.ContainerOptions>


      {viewport < 501 && (
          <Styled.ContainerButton>
            <button>Veja mais</button>
          </Styled.ContainerButton>
        )}

    </Styled.Container>
  );
}
