import React from 'react';
import PropTypes from 'prop-types';

export class MyComponent extends React.Component<any, any> {
  static propTypes = {
    prop1: PropTypes.string.isRequired,
    prop2: PropTypes.number,
  };
  constructor(props: any) {
    super(props);
    this.state = { foo: 1, bar: 'str' };
  }
  render() {
    return (
      <div>
        {this.state.foo}, {this.state.bar}, {this.state.baz}
      </div>
    );
  }
  onClick() {
    this.setState({ baz: 3 });
  }
}
