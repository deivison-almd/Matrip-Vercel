import {
  Backdrop,
  Box,
  Button,
  Fade,
  Modal,
  TextField,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import Crud from '../../pages/Crud/Crud';

const modalStyle = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  height: 'auto',
  borderRadius: 3,
  bgcolor: 'background.paper',
  border: '2px solid #505050',
  boxShadow: 25,
  p: 4,
};

export default function ModalCad() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      {/* <Crud /> */}

      {/* <a href="/checkIn"> */}
      {/* <Button
          style={{
            margin: '50px 0',
            width: '100%',
            backgroundColor: '#050525',
          }}
          className="buttonReserva"
          variant="contained"
          onClick={handleOpen}
        > */}
      {/* Reservar */}
      {/* </Button> */}
      {/* </a> */}
      {/* <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={modalStyle}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Cadastre-se
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  '& > :not(style)': { m: 1 },
                }}
              >
                <TextField
                  helperText="Primeiro nome"
                  id="demo-helper-text-misaligned"
                  label="Nome"
                />
                <TextField
                  helperText="Ultimo nome"
                  id="demo-helper-text-misaligned"
                  label="Sobrenome"
                />
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',

                  '& > :not(style)': { m: 1 },
                }}
              >
                <TextField
                  style={{ width: '80%' }}
                  helperText="Digite um email válido"
                  id="demo-helper-text-misaligned"
                  label="Email"
                  placeholder="example@email.com"
                />
                <TextField
                  helperText="Numero para contato"
                  id="demo-helper-text-misaligned"
                  label="Contato"
                  placeholder="(xx)-xxxx-xxxx"
                />
              </Box> */}
      {/* <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  '& > :not(style)': { m: 1 },
                }}
              >
                <TextField
                  helperText="Numero para contato"
                  id="demo-helper-text-misaligned"
                  label="CPF"
                  placeholder="xxx.xxx.xxx-xx"
                /> */}
      {/* <InputMask
                        mask="999.999.999-99"
                        placeholder="Digite seu cpf"
                      /> */}
      {/* </Box>
            </Typography>
            <div style={{ marginTop: '20px' }}>
              <Button
                style={{ backgroundColor: '#aa0000' }}
                variant="contained"
              >
                Cancelar
              </Button>
              <Button
                style={{ float: 'right', backgroundColor: '#117733 ' }}
                variant="contained"
              >
                Salvar
              </Button>
            </div>
          </Box>
        </Fade>
      </Modal> */}
    </div>
  );
}
