import './App.css';
import { Navigation, Home, FAQ, Courts, Photos, About, Webcam, Contact, Footer, NotFound  } from './components';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { history } from "./helpers/history";

function App() {
  return (
    <Router history={ history } basename="/">
      <div className="App">
        <div className="nav-background">
          <Navigation />
          {/* <Header /> */}
        </div>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/courts" element={<Courts />} />
            <Route path="/photos" element={<Photos />} />
            <Route path="/about" element={<About />} />
            <Route path="/webcam" element={<Webcam />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
