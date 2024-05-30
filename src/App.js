
import './App.css';
import Header from './components/Header';
import Navbar from './Navbar';
import Content from './components/Content';
import Section from './components/Section';
import Card from './components/Card';
import Video from './components/Video';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
     <Header/>
     <Navbar/>
     <Content/>
     <Section/>
     <Card/>
     <Video/>
     <Footer/>
    </div>
  );
}

export default App;
