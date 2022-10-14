import { BaseInput, Select } from './styles';
import { Procurar } from './styles';
import { MagnifyingGlass } from 'phosphor-react';
import { useEffect, useState } from 'react';
import axios from 'axios';

axios.defaults.baseURL = 'http://10.110.18.181';
axios.defaults.headers.get['Content-Type'] = 'application/json;charset=utf-8';
axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';

const UF = [
  { nome: 'Acre', sigla: 'AC' },
  { nome: 'Alagoas', sigla: 'AL' },
  { nome: 'Amapá', sigla: 'AP' },
  { nome: 'Amazonas', sigla: 'AM' },
  { nome: 'Bahia', sigla: 'BA' },
  { nome: 'Ceará', sigla: 'CE' },
  { nome: 'Distrito Federal', sigla: 'DF' },
  { nome: 'Espírito Santo', sigla: 'ES' },
  { nome: 'Goiás', sigla: 'GO' },
  { nome: 'Maranhão', sigla: 'MA' },
  { nome: 'Mato Grosso', sigla: 'MT' },
  { nome: 'Mato Grosso do Sul', sigla: 'MS' },
  { nome: 'Minas Gerais', sigla: 'MG' },
  { nome: 'Pará', sigla: 'PA' },
  { nome: 'Paraíba', sigla: 'PB' },
  { nome: 'Paraná', sigla: 'PR' },
  { nome: 'Pernambuco', sigla: 'PE' },
  { nome: 'Piauí', sigla: 'PI' },
  { nome: 'Rio de Janeiro', sigla: 'RJ' },
  { nome: 'Rio Grande do Norte', sigla: 'RN' },
  { nome: 'Rio Grande do Sul', sigla: 'RS' },
  { nome: 'Rondônia', sigla: 'RO' },
  { nome: 'Roraima', sigla: 'RR' },
  { nome: 'Santa Catarina', sigla: 'SC' },
  { nome: 'São Paulo', sigla: 'SP' },
  { nome: 'Sergipe', sigla: 'SE' },
  { nome: 'Tocantins', sigla: 'TO' },
];

interface filter {
  map(arg0: (item: any) => JSX.Element): import('react').ReactNode;
  id: number;
  name: string;
}
export default function SearchBar(this: any) {
  const [estados, setEstados] = useState<filter | any>();
  useEffect(() => {
    fetch('http://10.110.18.181:8080/states')
      .then((response) => response.json())
      .then((json) => setEstados(json));
  }, []);

  const [municipios, setMunicipios] = useState<filter | any>();
  useEffect(() => {
    fetch('http://10.110.18.181:8080/citys')
      .then((response) => response.json())
      .then((json) => setMunicipios(json));
  }, []);

  const handleChange = (value: any) => {
    const select = document.getElementById('lista-estados');

    select?.addEventListener('change', function () {
      console.log((select as HTMLSelectElement).value);
    });
  };

  // const select = document.getElementById('lista-estados');

  // select?.addEventListener('change', function () {
  //   console.log((select as HTMLSelectElement).value);
  // });

  return (
    <div
      style={{
        width: '100%',
        justifyContent: 'center',
        height: '8.68rem',
        position: 'relative',
        display: 'flex',
      }}
    >
      <div
        style={{
          width: '980px',
          backgroundColor: '#1E293B',
          borderRadius: '1rem',
          opacity: '0.95',
        }}
      >
        <form
          style={{
            padding: '2.75rem',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '0.75rem',
            display: 'flex',
            boxSizing: 'border-box',
          }}
        >
          <BaseInput placeholder="Digite aqui" type="text" />

          {/* <BaseInput type="date" /> */}

          <Select
            onChange={handleChange}
            placeholder="Selecione o Estado"
            name="estados"
            id="lista-estados"
          >
            {UF?.map((item: any) => (
              <>
                <option
                  value={`${item?.sigla} - ${item?.nome}`}
                  id={item?.sigla}
                >
                  {item?.sigla} - {item?.nome}
                </option>
              </>
            ))}
          </Select>
          <Select>
            <option value="" disabled selected>
              Município
            </option>
            {municipios?.map((item: any) => (
              <>
                <option value="MA">{item?.name}</option>
              </>
            ))}
          </Select>

          <Procurar>
            <MagnifyingGlass size={20} />
            Procurar
          </Procurar>
        </form>
      </div>
    </div>
  );
}
