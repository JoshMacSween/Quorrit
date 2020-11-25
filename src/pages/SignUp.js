import React, { useEffect, useState } from 'react'
import { useAccount } from '../contexts/AccountProvider'
import { Link } from 'react-router-dom'

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
    <div>
      <h2>Sign Up</h2>
      <form
        className="signUp"
        onSubmit={(event) => {
          handleSubmitSignUp(event, values)
        }}
      >
        <label htmlFor="username">Username:</label>
        <input
          autoFocus
          required
          type="text"
          id="username"
          name="username"
          placeholder="username"
          onChange={handleChange}
        />
        <label htmlFor="email">Email:</label>
        <input
          required
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />
        <label htmlFor="password">Password:</label>
        <input
          required
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
      <Link to="/">Home</Link>
      {error && error.message}
    </div>
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