import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators } from '../store/Login';
import logo from '../images/logo.png';

import Home from '../components/Home';

import {
  Card, CardBody,
  CardTitle, CardSubtitle,
  Col, Row, Label, Input, Button
} from 'reactstrap';

class Login extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (

      <Col md="6" style={{ alignItems: 'center', justifyContent: 'center', margin: 'auto', marginTop: '5%' }}>

        <div>{this.props.count}</div>

        <Card style={{ textAlign: 'center', borderRadius: 25 }} className="">
          <div style={{ textAlign: 'center', marginTop: 25 }}>
            <img width={150} src={logo} alt="uaiComida" />
          </div>
          <CardBody>
            <CardTitle style={{ fontSize: 30 }}>uaiComida</CardTitle>
            <CardSubtitle style={{ fontSize: 20, marginTop: 50, marginBottom: 20 }}>Insira suas credenciais</CardSubtitle>
            <Row style={{ marginTop: 15, marginBottom: 15 }}>
              <Col xs="2" style={{ paddingRight: 0 }} >
                <Label style={{ verticalAlign: 'sub' }}>Email:</Label>
              </Col>
              <Col>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="email@email.com"
                />
              </Col>
            </Row>
            <Row style={{ marginTop: 15, marginBottom: 15 }}>
              <Col xs="2" style={{ paddingRight: 0 }}>
                <Label for="examplePassword" style={{ verticalAlign: 'sub' }}>Senha:</Label>
              </Col>
              <Col>
                <Input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="********"
                />
              </Col>
            </Row>
            <Button
              style={{ marginTop: 15, marginBottom: 10 }}
              onClick={this.props.login}>
              Acessar
               </Button>
          </CardBody>
        </Card>
      </Col>
    )
  }
}

export default connect(
  state => {
    return (
      state.counter,
      state.logger
    )
  },
  dispatch => bindActionCreators(actionCreators, dispatch)
)(Login);