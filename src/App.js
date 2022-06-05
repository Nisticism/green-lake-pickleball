import logo from './logo.svg';
import './App.css';
import { FooterItem, Navigation, Article } from './components';
import { Footer, Header, News } from './containers';

function App() {
  return (
    <div className="App">
      <div className="gradient-background">
        <Navigation />
        {/* <Header /> */}
      </div>
      <News />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
