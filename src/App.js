import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './Components/Home Section/Home';
import Bollywood from './Components/Bollywood/Bollywood';
import Technology from './Components/Technology/Technology';
import Food from "./Components/Food/Food"
import Travel from "./Components/Travel/Travel"
import Hollywood from "./Components/Hollywood/Hollywood"
import SinglePost from './Components/Single Post/SinglePost';

function App() {
  return (
    <div className="App">

      <BrowserRouter>

        <Switch >
          <Route exact path="/" component={Home} />
          <Route exact path="/Bollywood" component={Bollywood} />
          <Route exact path="/Technology" component={Technology} />
          <Route exact path="/Travel" component={Travel} />
          <Route exact path="/Hollywood" component={Hollywood} />
          <Route exact path="/Food" component={SinglePost} />

        </Switch>
      </BrowserRouter>

    </div>

  );
}

export default App;
