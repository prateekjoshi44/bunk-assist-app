
import "./assets/scss/bootstrap.scss"
import "./assets/css/App.css"
import BunkAssist from "./components/BunkAssist"

function App() {

  // useEffect(() => { import('bootstrap') }, [])
 
  return (
    <>
      <div className="App">
      <h1 className="p-4 pb-0 custom-font text-center">BunkBuddy</h1>
      <p className="text-center px-3">BunkBuddy is the ultimate bunk assistant app that takes the guesswork out of attendance management.</p>
        <BunkAssist />
      </div>

    </>
  )
}

export default App
