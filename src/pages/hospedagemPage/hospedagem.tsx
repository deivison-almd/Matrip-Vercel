// import { Box } from '@mui/system';
import './hospedagem.scss';
import RoomIcon from '@mui/icons-material/Room';
// import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
// import HoverRating from './Hoteis/Widgets/Rating/rating';
import BlueTreeTowersCarrocel from './Hoteis/Widgets/Carrocel/BlueTreeTowersCarrocel/BlueTreeTowersCarrocel';
import HotelLuzeirosCarrocel from './Hoteis/Widgets/Carrocel/HotelLuzeirosCarrocel/HotelLuzeiros';
import SoftWinHotelCarrocel from './Hoteis/Widgets/Carrocel/SoftWinHotelCarrocel/SoftWinHotelCarrocel';
import PortoPreguicasCarrocel from './Hoteis/Widgets/Carrocel/PortoPreguicasCarrocel/PortoPreguicasCarrocel';
import FixedRating from './Hoteis/Widgets/Rating/fixedRating';

export default function Hospedagem() {
  return (
    <div className="layoutContainer">
      <h1 className="title">Hospedagens de Destaque</h1>
      <div className="hotelLink">
        <span className="conteudoLink">
          <SoftWinHotelCarrocel />
          <a href="/softWinHotel">
            {/* <p>
              <span>R$ 85,00/por pessoa</span>
              <span className="inlineText">
                <CalendarMonthIcon className="calendar" /> 5 Dias/6 Noites
              </span>
            </p> */}
            <RoomIcon style={{ fontSize: '25px', color: '#FF7F47' }} />
            <span className="nameHotel"> Soft Win Hotel</span>
            <p>
              <FixedRating />
            </p>
          </a>
        </span>
        <span className="conteudoLink">
          <HotelLuzeirosCarrocel />
          <a href="/hotelLuzeiros">
            {/* <img src="/images/hoteis/istoepousada.jpg" alt="Hotel Luzeiro" /> */}
            {/* <p>
              R$ 100,00/por pessoa
              <span className="inlineText">
                <CalendarMonthIcon className="calendar" /> 5 Dias/6 Noites
              </span>
            </p> */}
            <RoomIcon style={{ fontSize: '25px', color: '#FF7F47' }} />
            <span className="nameHotel"> Hotel Louzeiros </span>
            <p>
              <FixedRating />
            </p>
          </a>
        </span>
        <span className="conteudoLink">
          <BlueTreeTowersCarrocel />
          <a href="/blueTreeTowers">
            {/* <img
              src="/images/hoteis/SoftWinHotel/soft-win-hotel.jpg"
              alt="Hotel Luzeiro"
            /> */}
            <div>
              {/* <p>
                R$ 120,00/por pessoa
                <span className="inlineText">
                  <CalendarMonthIcon className="calendar" /> 5 Dias/6 Noites
                </span>
              </p> */}
              <RoomIcon style={{ fontSize: '25px', color: '#FF7F47' }} />
              <span className="nameHotel"> Blue Tree Towers</span>
              <p>
                <FixedRating />
              </p>
            </div>
          </a>
        </span>
        <span className="conteudoLink">
          <PortoPreguicasCarrocel />
          <a href="/portoPreguicas">
            {/* <img
              src="/images/hoteis/SoftWinHotel/soft-win-hotel.jpg"
              alt="Hotel Luzeiro"
            /> */}
            <div>
              {/* <p>
                R$ 90,00/por pessoa
                <span className="inlineText">
                  <CalendarMonthIcon className="calendar" /> 5 Dias/6 Noites
                </span>
              </p> */}
              <RoomIcon style={{ fontSize: '25px', color: '#FF7F47' }} />
              <span className="nameHotel"> Porto Preguiças</span>
              <p>
                <FixedRating />
              </p>
            </div>
          </a>
        </span>
      </div>
    </div>
  );
}
