import './App.css'
import LoginArea from './LoginArea'

const fakeUser = { userName: 'nice789', fullname: 'Kitty' }

function App() {
  return (
    <section className="app-section">
      <div className="app-container">
        <LoginArea auth={null} />
      </div>
    </section>
  )
}

export default App
