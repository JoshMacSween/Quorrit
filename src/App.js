import SignUp from './pages/SignUp'
import Home from './pages/Home'
import AccountProvider from './contexts/AccountProvider'
import PostsProvider from './contexts/PostsProvider'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './bootstrap.min (3).css'
import { Container } from 'react-bootstrap'
import Header from './components/Header'

function App() {
  return (
    <div className="App">
      <Header />
      <Container>
        <AccountProvider>
          <PostsProvider>
            <Router>
              <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/signUp" component={SignUp} />
              </Switch>
            </Router>
          </PostsProvider>
        </AccountProvider>
      </Container>
    </div>
  )
}

export default App
