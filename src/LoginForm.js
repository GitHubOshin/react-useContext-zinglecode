function LoginForm(props) {
  const { auth } = props

  if (!!auth) {
    return (
      <div>
        <p>Auth username: {auth.username}</p>
        <p>Auth fullname: {auth.fullname}</p>
        <p>
          <button>Log out</button>
        </p>
      </div>
    )
  }

  return (
    <from>
      <p>
        <input type="text" placeholder="username" />
      </p>
      <p>
        <input type="password" placeholder="password" />
      </p>
      <p>
        <button type="submit">Log in</button>
      </p>
    </from>
  )
}

export default LoginForm
