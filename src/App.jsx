
import "./assets/scss/bootstrap.scss"
import "./assets/css/App.css"
import BunkAssist from "./components/BunkAssist"
import logo from './assets/images/logo.svg'
function App() {

  // useEffect(() => { import('bootstrap') }, [])
 
  return (
    <>
      <div className="App py-5">
      <img  className="w-100" style={{width:50, height:50}}src={logo} alt="" />
      <p className="text-center px-3">BunkBuddy is the ultimate bunk assistant app that takes the guesswork out of attendance management.</p>
        <BunkAssist />
      </div>

    </>
  )
}

export default App
