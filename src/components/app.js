import React, { Component } from 'react';

import Add from '../containers/add';

import Remove from '../containers/remove';

import Counter from '../containers/counter';

import Form from '../containers/form';

import TestOutput from '../containers/testOutput';


export default class App extends Component{

  render() {
    return (
      <div>
          <Add/>
          <Remove/>
          <Form/>
      </div>
    );
  }
}

