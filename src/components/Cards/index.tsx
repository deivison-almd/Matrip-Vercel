// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export function Cards({ imagem, titulo, texto }: any) {
  return (
    <Card className="w-[20rem] hover:scale-105 ease-in-out duration-300 inline-block">
      <Card.Img
        variant="top"
        src={imagem}
        className="h-[15.68rem] cursor-pointer"
      />
      <Card.Body>
        <Card.Title className="text-[#ff7f47] font-bold text-[1.3rem] flex items-center">
          <i className="bx bxs-pin"></i>
          {titulo}
        </Card.Title>
        <Card.Text>{texto}</Card.Text>
      </Card.Body>
    </Card>
  );
}
