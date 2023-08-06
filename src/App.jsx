
import "./assets/scss/bootstrap.scss"
import "./assets/css/App.css"
import BunkAssist from "./components/BunkAssist"

function App() {

  // useEffect(() => { import('bootstrap') }, [])
 
  return (
    <>
      <div className="App">
      <h1 className="p-4  text-center">Welcome to Bunk Assist</h1>
        <BunkAssist />
      </div>

    </>
  )
}

export default App
