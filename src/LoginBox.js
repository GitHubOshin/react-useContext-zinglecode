import { useContext } from 'react'
import { AuthContext } from './App'

function LoginBox() {
  const { auth, setAuth } = useContext(AuthContext)
  const fakeUser = { username: 'nice789', fullname: 'Kitty' }

  function loginSubmit(event) {
    event.preventDefault()
    setAuth(fakeUser)
  }

  function logoutSubmit() {
    setAuth(null)
  }

  if (!!auth) {
    return (
      <div>
        <p>Auth username: {auth.username}</p>
        <p>Auth fullname: {auth.fullname}</p>
        <p>
          <button onClick={logoutSubmit}>Log out</button>
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={loginSubmit}>
      <p>
        <input type="text" placeholder="username" />
      </p>
      <p>
        <input type="password" placeholder="password" />
      </p>
      <p>
        <button type="submit">Log in</button>
      </p>
    </form>
  )
}

export default LoginBox
