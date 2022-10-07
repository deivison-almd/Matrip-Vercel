import './hospedagem.scss';
import RoomIcon from '@mui/icons-material/Room';
import FixedRating from './Hoteis/Widgets/Rating/fixedRating';
import { useEffect, useState } from 'react';

////// teste
// import api from '../../services/Api';
import axios from 'axios';
import api from '../../services/Api';
import { Paper, Stack, styled } from '@mui/material';

axios.defaults.baseURL = 'http://10.110.18.181';
axios.defaults.headers.get['Content-Type'] = 'application/json;charset=utf-8';
axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface hotels {
  id: number;
  name: string;
  ein: string;
  phone: string;
  hotelDescription: string;
  city: {
    id: number;
    name: string;
    state: {
      id: number;
      name: string;
    };
  };
  hotelPrices: {
    priceOne: number;
    priceTwo: number;
    priceThree: number;
    priceFour: number;
    priceFive: number;
  };
  photo: string;
  address: string;
}

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Hospedagem() {
  const [nomeHotel, setNomeHotel] = useState();

  const getApi = async () => {
    const response = await api.get('/hotels');
    // {
    //   headers: {
    //     "Acess-Control-Allow-Origin": "*",
    //     // 'Acess-Control-Allow-Headers': 'Authorization',
    //     // 'Acess-Control-Allow-Methods':
    //     //   'GET, POST, OPTIONS, PUT, PATCH, DELETE',
    //     "Content-Type": "application/json; charset=UTF-8"
    //   },
    // });
    setNomeHotel(response.data[0].name);
  };

  useEffect(() => {
    getApi();
  }, []);
  return (
    <div className="layoutContainer">
      <h1 className="title">Hospedagens de Destaque</h1>
      {/* <div className='filter'> */}
      <div className="filterBar">
        <Stack className="itemFilter" direction="row" spacing={2}>
          <Item>Item 1</Item>
          <Item>Item 2</Item>
          <Item>Item 3</Item>
        </Stack>
      </div>
      {/* </div> */}

      <div className="hotelLink">
        <span className="conteudoLink">
          {/* <SoftWinHotelCarrocel /> */}
          <a href="/softWinHotel">
            <img
              src="/images/hoteis/porto-preguicas.jpg"
              alt="porto preguicas"
            />
            {/* <p>
              <span>R$ 85,00/por pessoa</span>
              <span className="inlineText">
                <CalendarMonthIcon className="calendar" /> 5 Dias/6 Noites
              </span>
            </p> */}
            <RoomIcon style={{ fontSize: '25px', color: '#FF7F47' }} />
            <span className="nameHotel"> {String(nomeHotel)}</span>
            <p>
              <FixedRating />
            </p>
          </a>
        </span>
        <span className="conteudoLink">
          {/* <HotelLuzeirosCarrocel /> */}
          <a href="/hotelLuzeiros">
            <img
              src="/images/hoteis/porto-preguicas.jpg"
              alt="porto preguicas"
            />
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
          {/* <BlueTreeTowersCarrocel /> */}
          <a href="/blueTreeTowers">
            <img
              src="/images/hoteis/porto-preguicas.jpg"
              alt="porto preguicas"
            />
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
          {/* <PortoPreguicasCarrocel /> */}

          <a href="/portoPreguicas">
            <img
              src="/images/hoteis/porto-preguicas.jpg"
              alt="porto preguicas"
            />
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
