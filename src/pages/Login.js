import React, { useEffect, useState } from 'react'
import { useAccount } from '../contexts/AccountProvider'
import {Container, Form, Button} from 'react-bootstrap'

export default function Login() {
  useEffect(() => {
    document.title = 'Login'
  }, [])

  const { handleSubmitLogin, error } = useAccount()
  const [values, setValues] = useState({})

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    })
  }

  return (
    <Container>
      <h2 className="mt-3">Login</h2>
      <Form onSubmit={(event) => handleSubmitLogin(event, values)}>
        <label htmlFor="email">Email:</label>
        <input
          required
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
        /><br />
        <label htmlFor="password">Password:</label>
        <input
          required
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
        /><br />
        <Button type="submit">Submit</Button>
      </Form>
      {error && error.message}
    </Container>
  )
}
