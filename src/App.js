import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Row, Col } from 'react-bootstrap'
import { HomePage, SettingsPage } from './Pages'
import { SectionNav } from './Components'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app-wrapper">
          <Router>
              <Row>
                <Col className="col-4 aside-menu">
                  <SectionNav />
                </Col>
                <Col className="col-8 content">
                  <Route path='/' exact component={HomePage} />
                  <Route path='/settings' component={SettingsPage} />
                </Col>
              </Row>
          </Router>
      </div>
    );
  }
}

export default App;
