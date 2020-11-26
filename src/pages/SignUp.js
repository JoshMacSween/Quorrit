import React, { useEffect, useState } from 'react'
import { useAccount } from '../contexts/AccountProvider'
import { Link } from 'react-router-dom'
import { Container, Form, Button } from 'react-bootstrap'

export default function SignUp() {
  useEffect(() => {
    document.title = 'Sign Up'
  }, [])

  const { handleSubmitSignUp, error } = useAccount()

  const [values, setValues] = useState({})

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    })
  }

  return (
    <Container>
      <h2 className="mt-4">Sign Up</h2>
      <Form
        className="signUp"
        onSubmit={(event) => {
          handleSubmitSignUp(event, values)
        }}
      >
        <Form.Label htmlFor="username">Username:</Form.Label>
        <Form.Control
          autoFocus
          required
          type="text"
          id="username"
          name="username"
          placeholder="username"
          onChange={handleChange}
        /><br />
        <Form.Label htmlFor="email">Email:</Form.Label>
        <Form.Control
          required
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
        /><br />
        <Form.Label htmlFor="password">Password:</Form.Label>
        <Form.Control
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

// import React, { useEffect, useState } from 'react'

// import { useAccount } from '../contexts/AccountProvider'

// export default function SignUp() {
//   useEffect(() => {
//     document.title = 'Sign Up'
//   }, [])

//   const { handleSubmitSignUp, error } = useAccount()

//   const [values, setValues] = useState({})

//   const handleChange = (event) => {
//     setValues({
//       ...values,
//       [event.target.name]: event.target.value,
//     })
//   }

//   return (
//     <>
//       <h2>Sign Up</h2>
//       <form onSubmit={(event) => handleSubmitSignUp(event, values)}>
//         <label htmlFor="username">Username:</label>
//         <input
//           autoFocus
//           required
//           type="text"
//           id="username"
//           name="username"
//           placeholder="username"
//           onChange={handleChange}
//         />
//         <label htmlFor="email">Email:</label>
//         <input
//           required
//           type="email"
//           id="email"
//           name="email"
//           placeholder="Email"
//           onChange={handleChange}
//         />
//         <label htmlFor="age">Age:</label>
//         <input
//           required
//           type="number"
//           id="age"
//           name="age"
//           placeholder="Age"
//           onChange={handleChange}
//         />
//         <label htmlFor="location">Location:</label>
//         <input
//           required
//           type="text"
//           id="location"
//           name="location"
//           placeholder="Location"
//           onChange={handleChange}
//         />
//         <label htmlFor="password">Password:</label>
//         <input
//           required
//           type="password"
//           id="password"
//           name="password"
//           placeholder="Password"
//           onChange={handleChange}
//         />
//         <button type="submit">Submit</button>
//       </form>
//       {error && error.message}
//     </>
//   )
// }
