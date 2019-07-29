import React, { Component } from 'react';
import Layout from "./Container/Layout";
import { Switch,Route } from "react-router-dom";
import Container from "./Container/Container";
import './App.css';

class App extends Component {
  render() {
    const route=(
      <Switch>
        <Route exact path="/" component={Container} />
      </Switch>
    )
    return (
      <Layout>
        {route}
      </Layout>
    );
  }
}

export default App;
