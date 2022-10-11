import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage/HomePage';

// import PrimarySearchAppBar from './App';
import Hospedagem from './pages/hospedagemPage/hospedagem';
import BlueTreeTowers from './pages/hospedagemPage/Hoteis/BlueTreeTowers/BlueTreeTowers';
import HotelLuzeiros from './pages/hospedagemPage/Hoteis/HotelLuzeiros/HotelLuzeiros';
import Reserva from './pages/hospedagemPage/Hoteis/HotelLuzeiros/Reserva/Reserva';
import PortoPreguicas from './pages/hospedagemPage/Hoteis/PortoPreguicas/PortoPreguicas';
import SoftWinHotel from './pages/hospedagemPage/Hoteis/SoftWinHotel/SoftWinHotel';

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Paginas */}

        <Route path="/" element={<HomePage />} />
        {/* <Route path="home" element={<PrimarySearchAppBar />} /> */}
        <Route path="hospedagem" element={<Hospedagem />} />

        {/* Hoteis */}

        <Route path="softWinHotel" element={<SoftWinHotel />} />
        <Route path="blueTreeTowers" element={<BlueTreeTowers />} />
        <Route path="hotelLuzeiros" element={<HotelLuzeiros />} />
        <Route path="portoPreguicas" element={<PortoPreguicas />} />
        <Route path="reserva" element={<Reserva />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
