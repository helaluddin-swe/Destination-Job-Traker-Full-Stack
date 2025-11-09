import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import LandingPage from "./routes/Home/LandingPage"
import Layout from "./Layout"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout/>}>
      
          <Route index element={<LandingPage/>}/>
        </Route>
      </Routes>
    </Router>
  )
}

export default App
