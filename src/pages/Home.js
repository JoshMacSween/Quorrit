import React from 'react'
import {Link} from 'react-router-dom'
import {Container, Col, Row} from 'react-bootstrap'

export default function Home() {
  return (
    <>
      <h2>
        Welcome to Quorrit, the online home for the worlds big (and small)
        ideas!
      </h2>
      <Link to="/signUp">Sign Up</Link>
    </>
  )
}
