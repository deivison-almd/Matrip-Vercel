import React from 'react';
import * as toastr from 'toastr';
import Person from '../models/person';
import BaseService from '../service/base.service';
import { PersonPage } from './page.form';

export default class Create extends React.Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      person: {
        FullName: '',
        Address: '',
        Age: 0,
      },
    };
    this.onFieldValueChange = this.onFieldValueChange.bind(this);
  }

  private onFieldValueChange(fieldName: string, value: string) {
    const nextState = {
      ...this.state,
      person: {
        ...this.state.person,
        [fieldName]: value,
      },
    };

    this.setState(nextState);
  }
  private onSave = () => {
    BaseService.create<Person>('/person/create', this.state.person).then(
      (rp) => {
        if (rp.Status) {
          toastr.success('Check-In Salvo.');

          this.setState({
            person: {
              FullName: '',
              Address: '',
              Age: 0,
              Id: '',
            },
          });
        } else {
          toastr.error(rp.Messages);
          console.log('Messages: ' + rp.Messages);
          console.log('Exception: ' + rp.Exception);
        }
      },
    );
  };

  render() {
    return (
      <PersonPage
        person={this.state.person}
        onChange={this.onFieldValueChange}
        onSave={this.onSave}
      />
    );
  }
}
