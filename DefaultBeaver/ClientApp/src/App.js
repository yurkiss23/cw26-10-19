import React from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Counter from './components/Counter';
import FetchData from './components/FetchData';
import EmailConfirm from './components/EmailConfirm';

export default () => (
  <Layout>
    <Route exact path='/' component={Home} />
    <Route path='/counter' component={Counter} />
    <Route path='/fetch-data/:startDateIndex?' component={FetchData} />
    <Route path='/login' component={Login} />
    <Route path='/register' component={Register} />
    <Route path='/email-comfirm' component={EmailConfirm} />
  </Layout>
);
