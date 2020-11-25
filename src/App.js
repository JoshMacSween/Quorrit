import SignUp from './pages/SignUp'
import Home from './pages/Home'
import AccountProvider from './contexts/AccountProvider'
import PostsProvider from './contexts/PostsProvider'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <div className="App">
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
    </div>
  )
}

export default App
