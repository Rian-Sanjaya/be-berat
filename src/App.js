import React, { Component } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Home from './Home';
import EditForm from './EditForm';
import DetailPage from './DetailPage';

class App extends Component {
  render() {
    return (
      // <div className="App">
      //   <header className="App-header">
      //     BE - Berat
      //   </header>
      //   <section>
      //     <Home />
      //   </section>
      // </div>
      <Router>
        <div>
          <Route path="/" exact component={Home} />
          <Route path='/EditForm' component={EditForm} />
          <Route path='/detail' component={DetailPage} />
        </div>
      </Router>
    );
  }
}

export default App;
