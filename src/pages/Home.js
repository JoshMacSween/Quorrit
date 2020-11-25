import React from 'react'
import {Link} from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <h2>
        Welcome to Quorrit, the online home for the worlds big (and small)
        ideas!
      </h2>
      <Link to="/signUp">Sign Up</Link>
    </div>
  )
}
