import SignUp from './pages/SignUp'
import Home from './pages/Home'
import Login from './pages/Login'
import AccountProvider from './contexts/AccountProvider'
import PostsProvider from './contexts/PostsProvider'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './bootstrap.min (3).css'
import Header from './components/Header'

function App() {
  return (
    <div className="App">
      <div>
        <AccountProvider>
          <PostsProvider>
            <Router>
              <Header />
              <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/signUp" component={SignUp} />
                <Route path="/login" component={Login} />
              </Switch>
            </Router>
          </PostsProvider>
        </AccountProvider>
      </div>
    </div>
  )
}

export default App
