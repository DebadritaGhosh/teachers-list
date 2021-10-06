import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";

//Pages
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from "./pages/NotFound";
import AddTeacher from './pages/AddTeacher';
import EditTeacher from './pages/EditTeacher';
import ViewTeacher from './pages/ViewTeacher';
//Components
import Navbar from "./components/Navbar";

//router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';



const App = () => {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/teachers/add" component={AddTeacher} />
          <Route exact path="/teachers/edit/:id" component={EditTeacher} />
          <Route exact path="/teachers/view/:id" component={ViewTeacher} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>

  );
}

export default App;
