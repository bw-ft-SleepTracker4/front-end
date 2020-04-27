import React from 'react'
import {
  Form,
  Input,
  Button,
  Container,
  Col
} from 'reactstrap'

const Signup = (props) => {
  return(
    <Container>
      <Form className="signup-form">
        <Col sm="12" md={{ size: 6, offset: 3 }}>
          <Input type="name" name="username" value={props.username} onChange={props.handleUsernameChange} placeholder="Full Name" />
        </Col>
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