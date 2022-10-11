// import './homePage.scss';

// function HomePage() {
//   return (
//     <>
//       <div id="fundoExterno">
//         <div id="fundoImage">
//           {/* <img src="./images/fundo.jpg" alt="fundo" /> */}
//         </div>
//       </div>
//       <div className="homeSite">
//         <h1 className="tituloHome">Matrip Web Site</h1>
//         <p>
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, eaque!
//           Esse labore et nostrum. Cupiditate magnam accusamus eius consectetur
//           quia id, iusto quae ipsam, quis, ipsum aspernatur velit maiores
//           veniam!
//         </p>
//       </div>
//     </>
//   );
// }

// export default HomePage;

import { Cards } from '../../components/Cards';
import { Carrossel } from '../../components/Carrossel';
// import SearchBar from '../../components/SearchBar/SearchBar';
import { TextoCard } from '../../components/Cards/text';
import { Inputs } from '../../components/Inputs';

const card = [
  {
    img: '/src/assets/santoamaro.png',
    titulo: 'Santo Amaro',
    texto: 'p lorem',
  },
  {
    img: '/src/assets/imgAtins.jpeg',
    titulo: 'Atins',
    texto: 'p lorem',
  },
  {
    img: '/src/assets/imgTutoia.jpg',
    titulo: 'Tutoia',
    texto: 'p lorem',
  },
  {
    img: '/src/assets/imgCarolina.jpeg',
    titulo: 'Carolina do norte',
    texto: 'p lorem',
  },
  {
    img: '/src/assets/imgAtins2.jpg',
    titulo: 'Atins',
    texto: 'p lorem',
  },
  {
    img: '/src/assets/imgRio.jpeg',
    titulo: 'Rio preguiça',
    texto: 'p lorem',
  },
];

export function HomePage() {
  return (
    <div>
      <main>
        <Carrossel />
        <Inputs />
      </main>

      <div className="flex flex-wrap flex-col w-screen">
        <div className="my-0 mx-auto max-w-[32.25rem] text-center pb-16">
          <TextoCard
            paragraph="Escolha o melhor passeio"
            principal="Selecione já o melhor pacote para sua viagem"
          />
        </div>
        <div className="flex flex-wrap justify-center gap-4 mx-16 text-start">
          {card.map((card) => {
            return (
              <Cards
                imagem={card.img}
                titulo={card.titulo}
                texto={card.texto}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
