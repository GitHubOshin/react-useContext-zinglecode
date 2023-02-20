import './LoginArea.CSS'
import LoginForm from './LoginForm'

function LoginArea(props) {
  const { auth } = props
  return (
    <div className="box">
      <h2>Welcome to my world</h2>
      <LoginForm auth={auth} />
    </div>
  )
}

export default LoginArea
