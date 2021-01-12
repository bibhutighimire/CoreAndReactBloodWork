import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { ListOfBloodWorks } from './components/ListOfBloodWorks';
import { EditBloodWork } from './components/EditBloodWork';

import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
            <Route path='/listofbloodworks' component={ListOfBloodWorks} />
            <Route path='/editbloodwork' component={EditBloodWork} />
            <Route path='/addbloodwork' component={AddBloodWork} />
        <Route path='/fetch-data' component={FetchData} />
      </Layout>
    );
  }
}
