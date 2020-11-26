import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Col, Row, Button } from 'react-bootstrap'

export default function Home() {
  return (
    <Container>
      <h2 className="mt-3">Welcome to Quorrit!</h2>
      <p className="ml-5">
        <em>the online home for the worlds big (and small) ideas!</em>
      </p>
      <Button>
        <Link to="/signUp">Sign Up</Link>
      </Button>
    </Container>
  )
}
