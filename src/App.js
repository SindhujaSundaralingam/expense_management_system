import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap'
import { HomePage, SettingsPage } from './Pages'
import { SectionNav } from './Components'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Router>
            <Container className="m-0">
              <Row>
                <Col className="col-4">
                  <SectionNav />
                </Col>
                <Col className="col-8">
                  <Route path='/' exact component={HomePage} />
                  <Route path='/settings' component={SettingsPage} />
                </Col>
              </Row>
            </Container>
          </Router>
      </div>
    );
  }
}

export default App;
