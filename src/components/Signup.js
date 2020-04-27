import React from 'react'
import { signupUser } from './api/user'
import {
  Form,
  Input,
  Button,
  Container,
  Col
} from 'reactstrap'

const submitSignup = (e, email, password) => {
  e.preventDefault()
  signupUser(email, password).catch(err => console.error(`error: ${err}`))
}

const Signup = (props) => {
  return(
    <Container>
      <Form className="signup-form" onSubmit={submitSignup}>
        <Col sm="12" md={{ size: 6, offset: 3 }}>
          <Input type="email" name="email" value={props.email} onChange={props.handleEmailChange} placeholder="Email" />
        </Col>
        <Col sm="12" md={{ size: 6, offset: 3 }}>
          <Input type="password" name="password" value={props.password} onChange={props.handlePasswordChange} placeholder="Password" />
          <Button id="submit-btn">Submit</Button>
        </Col>
      </Form>
    </Container>
  )
}

export default Signup