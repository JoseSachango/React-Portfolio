import {BrowserRouter as Router,Route} from  "react-router-dom";
import Navbar from "./components/Navbar"
import Homepage from "./components/Homepage"
import Portfoliopage from "./components/Portfoliopage"
import Contactpage from "./components/Contactpage"


function App() {
  return (
    <>
    
    <Router >
        <div>
          <Navbar />
          <Route exact path="/" component={Homepage}/>
          <Route exact path="/index.html" component={Homepage}/>
          <Route exact path="/portfolio.html" component={Portfoliopage} />
          <Route exact path="/contact.html" component={Contactpage} />
        </div>

    </Router>
    </>
  );
}

export default App;
