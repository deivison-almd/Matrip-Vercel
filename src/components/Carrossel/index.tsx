import Carousel from 'react-bootstrap/Carousel';
import 
{ Imagem1, 
  Imagem2, 
  Imagem3, 
  BookNow, 
  TextoPasseio, 
  ParagrafoPasseio
} from "./styles"

export function Carrossel(){
    return (
      <div>
      <Carousel>
      <Carousel.Item>
        <Imagem1 />

        <Carousel.Caption className='mb-[10rem] w-[36rem] text-start text-black'>
          <TextoPasseio>Lençois Maranhenses</TextoPasseio>
          <ParagrafoPasseio>Venha conhecer os lencois, com passeios increveis e paisagens maravilhosas</ParagrafoPasseio>
          <BookNow>Book Now</BookNow>
        </Carousel.Caption>

      </Carousel.Item>

      <Carousel.Item>
        <Imagem2 />

        <Carousel.Caption className='mb-[10rem] w-[36rem] text-start text-black'>
          <TextoPasseio>Tours pelas dunas</TextoPasseio>
          <ParagrafoPasseio>Incriveis aventuras em passeios de Hilux pelas Dunas</ParagrafoPasseio>
          <BookNow>Book Now</BookNow>
        </Carousel.Caption>

      </Carousel.Item>

      <Carousel.Item>
        <Imagem3 />

        <Carousel.Caption className='mb-[10rem] w-[36rem] text-start text-black'>
          <TextoPasseio>Banhos nas lagoas</TextoPasseio>
          <ParagrafoPasseio>Passeios inesqueciveis sobrevoando as dunas</ParagrafoPasseio>
          <BookNow>Book Now</BookNow>
        </Carousel.Caption>

      </Carousel.Item>
    </Carousel>
    </div>
    )
}
