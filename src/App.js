import './App.css';
import Header from './components/header.js';
import Footer from './components/footer.js';
import Home from './pages/home.js';
import Projects from './pages/projects.js';
import Blog from './pages/blog.js';
import Contact from './pages/contact.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (

  <Router>
      <div className="App">
        <Header />

        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/blog" component={Blog} />
            <Route exact path="/contact" component={Contact} />      
        </Switch>

        <Footer />
      </div>
  </Router>

  );
}

export default App;
