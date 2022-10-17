import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { Button, Stack, TextField } from '@mui/material';
import Box from '@mui/material/Box';
import { DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs, { Dayjs } from 'dayjs';
// import React from 'react';
import Galeria from '../../Widgets/Galeria/Galeria';
import './reserva.scss';
import { useEffect, useState } from 'react';
import ModalCad from '../../../../../components/Modal/Modal';

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function Reserva() {
  const [value, setValue] = React.useState<Dayjs | any>(dayjs());
  const [value2, setValue2] = React.useState<Dayjs | any>(dayjs());

  const ChekIn = (newValue: Dayjs | null) => {
    setValue(newValue);
  };

  const ChekOut = (newValue2: Dayjs | null) => {
    setValue2(newValue2);
  };

  const [expanded, setExpanded] = React.useState<string | false>('');

  const handleColapse =
    (panel: string) => (_event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  const [contador, actualizarContador] = useState(1);
  const [contador2, actualizarContador2] = useState(0);

  useEffect(() => {}, [contador]);
  useEffect(() => {}, [contador2]);

  const addAdult = () => {
    if (contador < 5) {
      actualizarContador(contador + 1);
    }
  };
  const removeAdult = () => {
    if (contador > 1) {
      actualizarContador(contador - 1);
    }
  };

  const addChilde = () => {
    if (contador2 < 5) {
      actualizarContador2(contador2 + 1);
    }
  };

  const removeChilde = () => {
    if (contador2 > 0) {
      actualizarContador2(contador2 - 1);
    }
  };

  return (
    <div className="Itens">
      <Box className="containerReserva">
        <h1 className="nomeHotel">Hotel Luzeiros</h1>
        <h2 className="nomeQuarto">Suíte Presidencial</h2>
        <Box className="boxShadow">
          <p className="price">R$ 125,00/preço individual</p>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Stack
              marginLeft={3}
              marginRight={3}
              marginBottom={2}
              spacing={3}
              direction={'row'}
            >
              <DesktopDatePicker
                label="Check-In"
                inputFormat="DD/MM/YYYY"
                value={value}
                onChange={ChekIn}
                renderInput={(params) => <TextField {...params} />}
              />
              <DesktopDatePicker
                label="Check-In"
                inputFormat="DD/MM/YYYY"
                value={value2}
                onChange={ChekOut}
                renderInput={(params) => <TextField {...params} />}
              />
            </Stack>
          </LocalizationProvider>
          <Accordion
            expanded={expanded === 'panel1'}
            onChange={handleColapse('panel1')}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <Typography style={{ fontWeight: 'bold', fontSize: '14px' }}>
                HOSPEDES
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <span style={{ fontWeight: '600', paddingLeft: '20px' }}>
                Adultos
              </span>
              <Box style={{ float: 'right' }}>
                <Button onClick={removeAdult}>
                  <RemoveIcon />
                </Button>
                <span style={{ fontWeight: '600' }}>{contador}</span>
                <Button onClick={addAdult}>
                  <AddIcon />
                </Button>
              </Box>
            </AccordionDetails>
            <AccordionDetails style={{ marginBottom: 5 }}>
              <span style={{ fontWeight: '600', paddingLeft: '20px' }}>
                Crianças
              </span>
              <Box style={{ float: 'right' }}>
                <Button onClick={removeChilde}>
                  <RemoveIcon />
                </Button>
                <span style={{ fontWeight: '600' }}>{contador2}</span>
                <Button onClick={addChilde}>
                  <AddIcon />
                </Button>
              </Box>
            </AccordionDetails>
          </Accordion>
        </Box>
        <Box style={{ marginLeft: 50, width: '100%' }}>
          <a href="/crud" style={{ textDecoration: 'none' }}>
            <Button
              style={{
                margin: '50px 0',
                width: '100%',
                backgroundColor: '#050525',
              }}
              className="buttonReserva"
              variant="contained"
            >
              Reservar
            </Button>
          </a>
        </Box>
        <Box className="descricaoStyle">
          <h3 className="titleDescricao">DESCRIÇÃO</h3>
          <p className="textDescricao">
            Localizada no 14º andar, nossa espetacular Suíte Presidencial sem
            dúvidas oferece o melhor no que se refere a conforto e
            exclusividade. Sempre muito procurada por artistas e grandes
            empresários, possui ainda a opção de integrar outro quarto para
            funcionários ou seguranças.
          </p>
        </Box>
        <h3 className="titleDescricao">CARACTERÍSTICAS E SERVIÇOS</h3>
        <ul style={{ listStyleType: 'circle', marginLeft: '50px' }}>
          <li>Vista de frente pro mar</li>
          <li>Quarto com 166m²</li>
          <li>Ar-condicionado central</li>
          <li>Cama King (2,2x2,2)</li>
          <li>Luminária flexível de leitura em LED</li>
          <li>Janelas com isolamento acústico</li>
          <li>Detector de fumaça</li>
          <li>3 sacadas de frente para o mar</li>
          <li>Sala de estar para 5 pessoas</li>
          <li>Sala de TV para 4 pessoas</li>
          <li>Sala de jantar para 8 pessoas</li>
          <li>Closet</li>
          <li>Quarto anexo com 33m2</li>
        </ul>
      </Box>

      <Galeria />
    </div>
  );
}
