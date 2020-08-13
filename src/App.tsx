import React from 'react';
import { ApolloProvider } from '@apollo/client';
import client from './client'

import logo from './logo.svg';
import './App.css';
import Caller from './callserver';

interface MyState{
  err: String
}

class App extends React.Component<{},MyState>{


    render(){
  return (
    <ApolloProvider client={client}>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          Learn React
          <Caller/>
      </header>      
    </div>
    </ApolloProvider>
  );
}
}
export default App;
