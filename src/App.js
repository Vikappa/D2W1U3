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
import React, { useState } from 'react';


const shuffleArray = function(array) {//knot-shuffle sull'array argomento
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function App() {
  
  const [ricerca, setRicerca] = useState("") // Stato per la stringa di ricerca
  const [genereselezionato, setGenereselezionato] = useState("") // Stato per il filtro del genere
  const [minPrezzo, setMinPrezzo] = useState(0) // Stato per il prezzo minimo
  const [maxPrezzo, setMaxPrezzo] = useState(0) // Stato per il prezzo massimo
  const [carrello, setCarrello] = useState([]); // Stato per l'array del carrello (clona e setta un nuovo carrello ogni volta per usarlo)

  const totalBooklist = [
    ...fantasyBooks,
    ...historyBooks,
    ...horrorBooks,
    ...romanceBooks,
    ...scifiBooks
  ]

  shuffleArray(totalBooklist)

  return (
    <div className="App">
      <MyNav 
        home={{ href: "/home"  }}
        about={{ href: "/about"}}
        browse={{ href: "/browse" }}
        ricerca={ricerca}
        setRicerca={setRicerca}
        minPrezzo={minPrezzo}
        setMinPrezzo={setMinPrezzo}
        maxPrezzo={maxPrezzo}
        setMaxPrezzo={setMaxPrezzo}
        carrello={carrello}
        setCarrello={setCarrello}
      />
      <Welcome />

      <main>
        <BookList 
          arrayBooks={{ totalBooklist }}
          genereselezionato={genereselezionato}
          carrello={carrello}
          setCarrello={setCarrello}
          minPrezzo={minPrezzo}
          maxPrezzo={maxPrezzo}
          ricerca={ricerca}
        />
      </main>

      <MyFooter />
    </div>
  )
}


export default App;
