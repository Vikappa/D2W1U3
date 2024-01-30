import logo from './logo.svg';
import Button from 'react-bootstrap/Button';
import './App.css';
import MyNav from './myComponents/MyNav';
import MyFooter from './myComponents/MyFooter';
import Welcome from './myComponents/Welcome';

function App() {
  return (
    <div className="App">
<MyNav 
  home={{ href: "/home"  }}
  about={{ href: "/about"}}
  browse={{ href: "/browse" }}
/>
<Welcome/>
<MyFooter/>
    </div>
  );
}

export default App;
