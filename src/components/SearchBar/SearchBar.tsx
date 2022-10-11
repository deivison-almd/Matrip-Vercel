import { BaseInput, Select } from './styles';
import { Procurar } from './styles';
import { MagnifyingGlass } from 'phosphor-react';
import { useEffect, useState } from 'react';
import axios from 'axios';

axios.defaults.baseURL = 'http://10.110.18.181';
axios.defaults.headers.get['Content-Type'] = 'application/json;charset=utf-8';
axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';

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

          <Select>
            <option value="" disabled selected>
              Estados UF
            </option>
            {estados?.map((item: any) => (
              <>
                <option value="MA">{item?.name}</option>
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
