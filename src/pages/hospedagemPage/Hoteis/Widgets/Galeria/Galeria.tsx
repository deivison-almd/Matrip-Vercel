import Box from '@mui/material/Box';
import { useState, useCallback } from 'react';
import Gallery from 'react-photo-gallery';
import Carousel, { Modal, ModalGateway } from '../../../../../react-images';
import './galeria.scss';

export default function Galeria() {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((_event: any, { photo, index }: any) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  const photos = [
    {
      src: '/images/hoteis/HotelLuzeiros/foto-1.jpg',
      width: 4,
      height: 3,
    },
    {
      src: '/images/hoteis/HotelLuzeiros/foto-2.jpg',
      width: 2,
      height: 1,
    },
    {
      src: '/images/hoteis/HotelLuzeiros/foto-3.jpg',
      width: 4,
      height: 4,
    },
    {
      src: '/images/hoteis/HotelLuzeiros/foto-4.jpg',
      width: 3,
      height: 3,
    },
    {
      src: '/images/hoteis/HotelLuzeiros/foto-5.jpg',
      width: 5,
      height: 4,
    },
    {
      src: '/images/hoteis/HotelLuzeiros/SuiteExecutiva/suite-executiva-1.jpg',
      width: 4,
      height: 2,
    },
    {
      src: '/images/hoteis/HotelLuzeiros/SuiteExecutiva/suite-executiva-2.jpg',
      width: 3,
      height: 4,
    },
    {
      src: '/images/hoteis/HotelLuzeiros/SuiteExecutiva/suite-executiva-3.jpg',
      width: 4,
      height: 3,
    },
    {
      src: '/images/hoteis/HotelLuzeiros/SuiteExecutiva/suite-executiva-4.jpg',
      width: 4,
      height: 3,
    },
  ];

  return (
    <div className="gridItens">
     

      <Box className="gridPhotos" title="Clique para Ampliar">
        <Gallery photos={photos} onClick={openLightbox} />
        <ModalGateway>
          {viewerIsOpen ? (
            <Modal onClose={closeLightbox}>
              <Carousel
                currentIndex={currentImage}
                views={photos.map((x: any) => ({
                  ...x,
                  srcset: x.srcSet,
                  caption: x.title,
                }))}
              />
            </Modal>
          ) : null}
        </ModalGateway>
      </Box>
    </div>
  );
}
