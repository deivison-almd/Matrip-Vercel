import Carousel from 'react-bootstrap/Carousel';
import {
  Imagem1,
  Imagem2,
  Imagem3,
  // BookNow,
  TextoPasseio,
  ParagrafoPasseio,
} from './styles';

export function Carrossel() {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <Imagem1 />
          <Carousel.Caption className="mb-[10rem] w-[36rem] text-start text-black">
            <TextoPasseio>Blue Tree Towers</TextoPasseio>
            <ParagrafoPasseio>
              Um dos maiores hoteis de luxo de São Luis-MA
            </ParagrafoPasseio>
            {/* <BookNow>Book Now</BookNow> */}
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <Imagem2 />

          <Carousel.Caption className="mb-[10rem] w-[36rem] text-start text-black">
            <TextoPasseio>Hotel Luzeiros</TextoPasseio>
            <ParagrafoPasseio>
              Fazendo jus ao conceito de HOTEL DESIGN, a Rede Luzeiros
              proporciona uma experiência única
            </ParagrafoPasseio>
            {/* <BookNow>Book Now</BookNow> */}
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <Imagem3 />

          <Carousel.Caption className="mb-[10rem] w-[36rem] text-start text-black">
            <TextoPasseio>Porto Preguiças</TextoPasseio>
            <ParagrafoPasseio>
              O Porto Preguiças é o único meio de hospedagem em toda a região,
              concebido no conceito “Resort”
            </ParagrafoPasseio>
            {/* <BookNow>Book Now</BookNow> */}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
