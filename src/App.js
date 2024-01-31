import './App.css';
import MyNav from './myComponents/MyNav';
import MyFooter from './myComponents/MyFooter';
import Welcome from './myComponents/Welcome';
import fantasyBooks from './books/fantasy.json';
import historyBooks from './books/history.json';
import horrorBooks from './books/horror.json';
import romanceBooks from './books/romance.json';
import scifiBooks from './books/scifi.json';
import BookList from './myComponents/BookList';

const shuffleArray = function(array) {//knot-shuffle sull'array argomento
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function App() {
  
  const totalBooklist = [
    ...fantasyBooks,
    ...historyBooks,
    ...horrorBooks,
    ...romanceBooks,
    ...scifiBooks
  ]

  return (
    <div className="App">
<MyNav 
  home={{ href: "/home"  }}
  about={{ href: "/about"}}
  browse={{ href: "/browse" }}
/>
<Welcome/>

<main>

<BookList arrayBooks={{totalBooklist}} />

</main>

<MyFooter/>
    </div>
  );
}

export default App;
