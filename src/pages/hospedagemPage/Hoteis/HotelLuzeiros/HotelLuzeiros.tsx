// import { Box } from '@mui/system';
import './HotelLuzeiros.scss';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
// import SoftWinHotelCarrocel from '../Widgets/Carrocel/SoftWinHotelCarrocel/SoftWinHotelCarrocel';
import HoverRating from '../Widgets/Rating/rating';
// import PortoPreguicasCarrocel from '../Widgets/Carrocel/PortoPreguicasCarrocel/PortoPreguicasCarrocel';
import CheckIn from './CheckIn/CheckIn';
import SuitePresidencialCarrocel from '../Widgets/Carrocel/HotelLuzeirosCarrocel/Quartos/SuitePresidencialCarrocel';
import SuiteExecutivaCarrocel from '../Widgets/Carrocel/HotelLuzeirosCarrocel/Quartos/SuiteExecutivaCarrocel';
import SuiteJuniorCarrocel from '../Widgets/Carrocel/HotelLuzeirosCarrocel/Quartos/SuiteJuniorCarrocel';
import SuiteEstudioCarrocel from '../Widgets/Carrocel/HotelLuzeirosCarrocel/Quartos/SuiteEstudioCarrocel';

export default function Hospedagem() {
  return (
    <div className="layoutContainer">
      <div className="topo">
        <div className="topoHotel"></div>
        <div className="bgCheckin">
          <p className="checkInStyle">
            <CheckIn />
          </p>
        </div>
      </div>

      <h1 className="titleHotel">Hotel Luzeiros</h1>
      <p className="descricaoHotel">
        O Hotel Luzeiros São Luís, localizado à beira-mar, na Baía de São
        Marcos, é um hotel design premiado, com 243 apartamentos, sendo 5 suítes
        e 13 estúdios. Tudo no Hotel Luzeiros São Luís remete à capricho.
        Requintado, funcional e moderno, o hotel tem a representatividade que
        você espera encontrar em suas viagens de negócio ou lazer. Assim, você
        vai estar instalado no mais completo e confortável hotel da cidade São
        Luís, pensado para refletir seu estilo.
      </p>

      <div className="hotelLink">
        <span className="conteudoLink">
          <SuitePresidencialCarrocel />
          <a href="/reserva">
            <p>
              <span>R$ 120,00/por pessoa</span>
              <span className="inlineText">
                <CalendarMonthIcon className="calendar" /> 5 Dias/6 Noites
              </span>
            </p>
            {/* <RoomIcon style={{ fontSize: '25px', color: '#FF7F47' }} /> */}
            <span className="nameHotel"> Suíte Presidencial</span>
            <p>
              <HoverRating />
            </p>
          </a>
        </span>
        <span className="conteudoLink">
          <SuiteExecutivaCarrocel />
          <a href="/hotelLuzeiros">
            <p>
              R$ 100,00/por pessoa
              <span className="inlineText">
                <CalendarMonthIcon className="calendar" /> 5 Dias/6 Noites
              </span>
            </p>
            {/* <RoomIcon style={{ fontSize: '25px', color: '#FF7F47' }} /> */}
            <span className="nameHotel"> Suíte Executiva </span>
            <p>
              <HoverRating />
            </p>
          </a>
        </span>
        <span className="conteudoLink">
          <SuiteJuniorCarrocel />
          <a href="/blueTreeTowers">
            <div>
              <p>
                R$ 85,00/por pessoa
                <span className="inlineText">
                  <CalendarMonthIcon className="calendar" /> 5 Dias/6 Noites
                </span>
              </p>
              {/* <RoomIcon style={{ fontSize: '25px', color: '#FF7F47' }} /> */}
              <span className="nameHotel"> Suíte Junior</span>
              <p>
                <HoverRating />
              </p>
            </div>
          </a>
        </span>
        <span className="conteudoLink">
          <SuiteEstudioCarrocel />
          <a href="/portoPreguicas">
            <div>
              <p>
                R$ 110,00/por pessoa
                <span className="inlineText">
                  <CalendarMonthIcon className="calendar" /> 5 Dias/6 Noites
                </span>
              </p>
              {/* <RoomIcon style={{ fontSize: '25px', color: '#FF7F47' }} /> */}
              <span className="nameHotel"> Suíte Estúdio</span>
              <p>
                <HoverRating />
              </p>
            </div>
          </a>
        </span>
      </div>
    </div>
  );
}
