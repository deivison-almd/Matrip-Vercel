import './hospedagem.scss';
import RoomIcon from '@mui/icons-material/Room';
import FixedRating from './Hoteis/Widgets/Rating/fixedRating';
import { useEffect, useState } from 'react';
import axios from 'axios';
import api from '../../services/Api';
import React from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import { Carrossel } from '../../components/HospedagemCarrossel';

////// teste
// import api from '../../services/Api';

axios.defaults.baseURL = 'http://10.110.18.181';
axios.defaults.headers.get['Content-Type'] = 'application/json;charset=utf-8';
axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
// interface hotels {
//   id: number;
//   name: string;
//   ein: string;
//   phone: string;
//   hotelDescription: string;
//   city: {
//     id: number;
//     name: string;
//     state: {
//       id: number;
//       name: string;
//     };
//   };
//   hotelPrices: {
//     priceOne: number;
//     priceTwo: number;
//     priceThree: number;
//     priceFour: number;
//     priceFive: number;
//   };
//   photo: string;
//   address: string;
// }

export default function Hospedagem() {
  const [nomeHotel, setNomeHotel] = useState();
  const [nomeHotel2, setNomeHotel2] = useState();
  const [nomeHotel3, setNomeHotel3] = useState();
  const [nomeHotel4, setNomeHotel4] = useState();

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
    setNomeHotel2(response.data[1].name);
    setNomeHotel3(response.data[2].name);
    setNomeHotel4(response.data[3].name);
  };

  // const [HotelList, setHotelList] = useState([]);

  // const [selectedUF, setSelectedUF] = useState();

  useEffect(() => {
    getApi();
  }, []);

  return (
    <div className="layoutContainer">
      <h1 className="title">Hospedagens </h1>
      <div
        style={{
          width: '90%',
          margin: 'auto',
          // boxShadow: '2px 2px 6px 6px gray',
        }}
      >
        <Carrossel />
      </div>

      {/* <div className='filter'> */}
      <div style={{ marginTop: '50px' }}>
        <SearchBar />
      </div>
      {/* </div> */}
      <h1 className="subTitle">Hospedagens de Destaque </h1>

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

            <span className="nameHotel">
              <RoomIcon style={{ fontSize: '25px', color: '#FF7F47' }} />{' '}
              {String(nomeHotel)}
            </span>
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

            <span className="nameHotel">
              <RoomIcon style={{ fontSize: '25px', color: '#FF7F47' }} />
              {String(nomeHotel2)}
            </span>
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

              <span className="nameHotel">
                <RoomIcon style={{ fontSize: '25px', color: '#FF7F47' }} />{' '}
                {String(nomeHotel3)}
              </span>
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

              <span className="nameHotel">
                <RoomIcon style={{ fontSize: '25px', color: '#FF7F47' }} />
                {String(nomeHotel4)}
              </span>
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
