import './App.css';
import MyNav from './myComponents/MyNav';
import MyFooter from './myComponents/MyFooter';
import Welcome from './myComponents/Welcome';
import AllTheBooks from './myComponents/AllTheBooks';

function App() {
  return (
    <div className="App">
<MyNav 
  home={{ href: "/home"  }}
  about={{ href: "/about"}}
  browse={{ href: "/browse" }}
/>
<Welcome/>

<main>

<AllTheBooks/>

</main>

<MyFooter/>
    </div>
  );
}

export default App;
