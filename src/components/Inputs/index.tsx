import { BaseInput } from './styles';
import { Procurar } from './styles';
import { MagnifyingGlass } from 'phosphor-react';

export function Inputs() {
  return (
    <div className="w-full flex justify-center h-[8.68rem] relative top-[-70px] z-10">
      <div className="w-[980px] bg-slate-800 rounded-2xl opacity-95">
        <form className="p-11 flex justify-center items-center gap-3">
          <BaseInput placeholder="Digite seu destino" type="text" />

          <BaseInput type="date" />

          <BaseInput placeholder="Travel Type" type="text" />

          <Procurar>
            <MagnifyingGlass size={20} />
            Procurar
          </Procurar>
        </form>
      </div>
    </div>
  );
}
