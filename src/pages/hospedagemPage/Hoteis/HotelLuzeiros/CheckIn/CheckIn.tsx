import * as React from 'react';
import dayjs, { Dayjs } from 'dayjs';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

import './checkIn.scss';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import Button from '@mui/material/Button';

const outerTheme = createTheme({
  palette: {
    primary: {
      main: '#FFFFFF',
    },
  },
});

export default function CheckIn() {
  const [value1, setValue1] = React.useState<Dayjs | null>(dayjs('2022-04-10'));
  const [value2, setValue2] = React.useState<Dayjs | null>(dayjs('2022-04-10'));

  // const [quartos, setQuartos] = React.useState('');
  const [adultos, setAdultos] = React.useState('');
  const [criancas, setCriancas] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    // setQuartos(event.target.value as string);
    setAdultos(event.target.value as string);
    setCriancas(event.target.value as string);
  };

  const color = '#FFFFFF';
  // const color2 = '#009688';

  return (
    <ThemeProvider theme={outerTheme}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <div className="style">
          <Stack
            style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}
            direction={'row'}
          >
            <DesktopDatePicker
              className="calendar"
              label="Check-In"
              value={value1}
              onChange={(newValue) => {
                setValue1(newValue);
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  className="textfieldStyle"
                  sx={{
                    // svg: { color },
                    width: 150,
                    input: { color },
                    label: { color },
                    button: { color },
                    // marginLeft: '50px'
                  }}
                />
              )}
            />
            <DesktopDatePicker
              className="calendar"
              label="Check-Out"
              value={value2}
              onChange={(newValue) => {
                setValue2(newValue);
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  className="textfieldStyle"
                  sx={{
                    // svg: { color },
                    width: 150,
                    input: { color },
                    label: { color },
                    button: { color },
                    marginLeft: '20px',
                  }}
                />
              )}
            />
            {/* <FormControl sx={{ minWidth: 100 }}>
              <InputLabel style={{ color: 'white' }} className="quartos">
                Quartos
              </InputLabel>
              <Select
                className="textfieldStyle"
                value={quartos}
                label="Quartos"
                onChange={handleChange}
                sx={{
                  svg: { color },
                  input: { color },
                  label: { color2 },
                  width: 100,
                  marginLeft: '20px'
                }}
              >
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
                <MenuItem value={5}>5</MenuItem>
              </Select>
            </FormControl> */}
            <FormControl sx={{ minWidth: 100 }}>
              <InputLabel style={{ color: 'white' }} className="adultos">
                Adultos
              </InputLabel>
              <Select
                className="textfieldStyle"
                value={adultos}
                label="Adultos"
                onChange={handleChange}
                sx={{
                  svg: { color },
                  label: { color },
                  width: 100,
                  marginLeft: '20px',
                }}
              >
                {/* ARRUMAR OS ESTADOS DAS VARIAVEIS */}

                <MenuItem value={6}>1</MenuItem>
                <MenuItem value={7}>2</MenuItem>
                <MenuItem value={8}>3</MenuItem>
                <MenuItem value={9}>4</MenuItem>
                <MenuItem value={10}>5</MenuItem>
              </Select>
            </FormControl>
            <FormControl sx={{ minWidth: 100 }}>
              <InputLabel style={{ color: 'white' }} className="criancas">
                Crianças
              </InputLabel>
              <Select
                className="textfieldStyle"
                value={criancas}
                label="Criancas"
                onChange={handleChange}
                sx={{
                  svg: { color },
                  label: { color },
                  width: 100,
                  marginLeft: '20px',
                }}
              >
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
                <MenuItem value={5}>5</MenuItem>
              </Select>
            </FormControl>
            <Button
              href=""
              style={{
                minWidth: 120,
                height: 30,
                marginLeft: '50px',
                backgroundColor: 'black',
                color: 'white',
              }}
              variant="contained"
            >
              Reservar
            </Button>
          </Stack>
        </div>
      </LocalizationProvider>
    </ThemeProvider>
  );
}
