import * as React from 'react';
import Person from '../models/person';

import { Input, Button } from '../common/components/form';

interface Props {
  person: Person;
  onChange: (fieldName: string, value: string) => void;
  onSave: () => void;
}

export const PersonForm: React.FunctionComponent<Props> = (props) => {
  return (
    <div style={{ width: 500 }}>
      <h1>Lista de Reeservas</h1>
      <form>
        <Input
          name="FullName"
          label="Nome completo"
          value={props.person.FullName}
          onChange={props.onChange}
        />

        <Input
          name="Address"
          label="CPF"
          value={props.person.Address}
          onChange={props.onChange}
        />

        <Input
          name="Age"
          label="Idade"
          value={props.person.Age.toString()}
          onChange={props.onChange}
        />

        <Button
          label="Salvar"
          className="btn btn-success mt-2"
          onClick={props.onSave}
        />
      </form>
    </div>
  );
};
