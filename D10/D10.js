/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/
let sum = 10 + 20;
console.log(sum);
/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/
let random = Math.floor(Math.random() * 21);
console.log(random);
/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/
let me = {
  name: "nicolò",
  surname: "scivittaro",
  age: 20
};
console.log(me);
/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/
delete me.age;
console.log(me);
/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/
me.skills = ["JavaScript", "HTML", "CSS"];
console.log(me);
/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/
me.skills.push("php");
console.log(me);
/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/
me.skills.pop();
console.log(me);
// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/
console.log("esercizio1");
function dice() {
  return Math.floor(Math.random() * 6) + 1;
}
console.log(dice());
/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/
console.log("esercizio2");
function whoIsBigger(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}


console.log(whoIsBigger(58, 105)); 
console.log(whoIsBigger(5420, 38)); 
console.log(whoIsBigger(-354, 0));
/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/
console.log("esercizio3");
function splitMe(string) {
  return string.split(" ");
}
console.log(splitMe("daje Roma daje"));
/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/
console.log("esercizio4");
function deleteOne(string, isFirst) {
  if (isFirst) {
    return string.slice(1);
  } else {
    return string.slice(0, -1);
  }
}
console.log(deleteOne("example", true)); 
console.log(deleteOne("example", false));
/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/
console.log("esercizio5");
function onlyLetters(string) {
  return string.replace(/[0-9]/g, '');
}
console.log(onlyLetters("I have 4 dogs")); 
/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/
console.log("esercizio6");
function isThisAnEmail(string) {
  return string.includes('@') && string.includes('.');
}

console.log(isThisAnEmail("test@example.com")); 
console.log(isThisAnEmail("invalid-email"));
/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/
console.log("esercizio7");
function whatDayIsIt() {
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const today = new Date();
  const dayIndex = today.getDay();
  return daysOfWeek[dayIndex];
}

console.log(whatDayIsIt());
/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/
console.log("esercizio8");

function rollTheDices(num) {
  let sum = 0;
  const values = [];
  for (let i = 0; i < num; i++) {
    const value = dice();
    sum += value;
    values.push(value);
  }
  return {
    sum: sum,
    values: values
  };
}
console.log(rollTheDices(3));
/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/
console.log("esercizio9");
function howManyDays(date) {
  const providedDate = new Date(date).getTime();
  const today = new Date().getTime();
  const differenceInMilliseconds = today - providedDate;
  const differenceInDays = Math.floor(differenceInMilliseconds / (1000 * 60 * 60 * 24));
  return differenceInDays;
}
console.log(howManyDays('2024-04-01'));
/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/
console.log("esercizio10");
function isTodayMyBirthday() {
  const today = new Date();
  const birthday = new Date(today.getFullYear(), 2, 25); 
  return today.getMonth() === 2 && today.getDate() === 25;
}
console.log(isTodayMyBirthday());
// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/
console.log("esercizio11");
function deleteProp(obj, propToDelete) {
  if (obj.hasOwnProperty(propToDelete)) {
   
    delete obj[propToDelete];
  }
  return obj;
}

const myObject = {
  name: "franco",
  age: 30,
  city: "brasilia"
};

console.log(deleteProp(myObject, "city"));
/* ESERCIZIO 12
Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/
console.log("esercizio12");

function newestMovie(movies) {
  let newest = movies[0];
  movies.forEach(movie => {
    if (parseInt(movie.Year) > parseInt(newest.Year)) {
      newest = movie;
    }
  });
  return newest;
}
  
const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },

  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
]
const newestMovieResult = newestMovie(movies);
console.log("Il film più nuovo è:", newestMovieResult.Title, "-", newestMovieResult.Year);
/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/
console.log("esercizio13");
function countMovies(movies) {
  return movies.length;
}
console.log("Il numero totale di film è:", countMovies(movies));
/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/
console.log("esercizio14");
function onlyTheYears(movies) {
  const years = [];
  movies.forEach(movie => {
    years.push(movie.Year);
  });
  return years;
}
console.log("Anni di uscita dei film:", onlyTheYears(movies));
/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/
console.log("esercizio15");
function onlyInLastMillennium(movies) {
  const lastMillenniumMovies = movies.filter(movie => {
    const year = parseInt(movie.Year);
    return year >= 1000 && year <= 1999;
  });
  return lastMillenniumMovies;
}
console.log("Film prodotti nel millennio scorso:", onlyInLastMillennium(movies));

/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/
console.log("esercizio16");
function sumAllTheYears(movies) {
  let totalYears = 0;
  for(i=0;i<movies.length;i++){
    totalYears += parseInt(movies[i].Year);
  }
  return totalYears;
}
console.log("la somma degli anni è:", sumAllTheYears(movies));
/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/
console.log("esercizio17");
function searchByTitle(searchString, movies) {
  const matchingMovies = movies.filter(movie => {
    return movie.Title.toLowerCase().includes(searchString.toLowerCase());
  });
  return matchingMovies;
}
const searchString = "lord";
console.log("Film con titolo che contiene '" + searchString + "':", searchByTitle(searchString, movies));
/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/
console.log("esercizio18");
function searchAndDivide(searchString, movies) {
  const match = [];
  const unmatch = [];
  
  movies.forEach(movie => {
    if (movie.Title.toLowerCase().includes(searchString.toLowerCase())) {
      match.push(movie);
    } else {
      unmatch.push(movie);
    }
  });
  
  return { match, unmatch };
}
const searchString2 = "lord";
console.log("Film con titolo che contiene '" + searchString2 + "':", searchAndDivide(searchString2, movies));
/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/
console.log("esercizio19");
function removeIndex(index, movies) {
  const newArray = [...movies]; 
  newArray.splice(index, 1); 
  return newArray;
}
const indexToRemove = 0; 
console.log("Array movies senza l'elemento all'indice " + indexToRemove + ":", removeIndex(indexToRemove, movies));
// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/
console.log("esercizio20");
function selectContainerElement() {
  const containerElement = document.getElementById("container");
  return containerElement;
}

const container = selectContainerElement();
console.log(container);
/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/
console.log("esercizio21");
function selectAllTdElements() {
  const tdElements = document.querySelectorAll("td");
  return tdElements;
}

const tdElements = selectAllTdElements();
console.log(tdElements);
/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/
console.log("esercizio22");
function printTextInTdTags() {
  const tdElements = document.querySelectorAll("td");
  tdElements.forEach(td => {
    console.log(td.textContent);
  });
}

printTextInTdTags();
/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/
console.log("esercizio23");
function addRedBackgroundToLinks() {
  const links = document.querySelectorAll("a");
  links.forEach(link => {
    link.style.backgroundColor = "red";
  });
}

addRedBackgroundToLinks();
/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/
console.log("esercizio24");
function addNewItemToList(itemText) {
  const newItem = document.createElement("li");
  newItem.textContent = itemText;
  const myList = document.getElementById("myList");
  myList.appendChild(newItem);
}

addNewItemToList("Nuovo elemento");
/* ESERCIZIO 25*/
function clearList() {
  const myList = document.getElementById("myList");
  myList.innerHTML = "";
}
clearList();
console.log("esercizio25");
/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/
function addClassToTR() {
  const trElements = document.querySelectorAll("tr");
  trElements.forEach(tr => {
    tr.classList.add("test");
  });
}

addClassToTR();
console.log("esercizio26");
// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/
console.log("esercizio27");
function halfTree(height) {
  for (let i = 1; i <= height; i++) {
    console.log("*".repeat(i));
  }
}

halfTree(6);
/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/
console.log("esercizio28");
function tree(height) {
  for (let i = 1; i <= height; i++) {
    let spazzi = " ".repeat(height - i);
    let stelle = "*".repeat(2 * i - 1);
    console.log(spazzi + stelle);
  }
}

tree(5);
/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/
console.log("esercizio29");


function isItPrime(n) {
while (n < 0){
   n = n;
}
	
 var div = 1;
 var cont=0;
	
 while(cont <= 1 && div <= n/2) {
   if(n % div == 0)  {
	cont++;	
   }
   div++;
 }
	
 if (cont == 1){
   document.write('true  ');
 }   
 else {
    document.write('false ');
 }
}
isItPrime(7); 
isItPrime(12); 