import React from 'react';

import './App.scss';

import Input from './components/Input';
import CardList from './components/CardList';
import ButtonList from './components/ButtonList';
import Loading from './components/Loading';

const App = () => (
  <div>
    <Input />
    <Loading />
    <CardList />
    <ButtonList />
  </div>
);

export default App;
