import { useContext } from 'react'
import { AuthContext } from './App'

function LoginBox() {
  const { authState, authDispatch } = useContext(AuthContext)
  const fakeUser = { username: 'nice789', fullname: 'Kitty' }

  function loginSubmit(event) {
    event.preventDefault()
    authDispatch({ type: 'login', payload: fakeUser })
  }

  function logoutSubmit() {
    authDispatch({ type: 'logout' })
  }

  if (!!authState) {
    return (
      <div>
        <p>Auth username: {authState.username}</p>
        <p>Auth fullname: {authState.fullname}</p>
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

