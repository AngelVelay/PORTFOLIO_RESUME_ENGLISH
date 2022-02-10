import blog1 from "../img/Aplicacoines/taskq.jpg";
import blog3 from "../img/Aplicacoines/musicsearchcomp.jpg";
import blog2 from "../img/Aplicacoines/Libreria.jpg";
import blog4 from "../img/Aplicacoines/crypt_preview_rev_1.jpg";
import blog5 from "../img/Aplicacoines/criptos.jpg";

import blog7 from "../img/Aplicacoines/marvelapp.jpg";
import blog6 from "../img/Aplicacoines/gastos.jpg";

const blogs = [
  {
    id: 1,
    title: "TaskQ",
    content:
      "Application for task and project management. The frontend was made in React and the backend with NODE JS (Express JS).",
    date: "01",
    month: "April",
    image: blog1,
    github: "https://github.com/AngelVelay/TaskQ-FRONTEND",
    demo: "https://taskq-app.netlify.app/",
  },
  {
    id: 1,
    title: "Marvel App",
    content:
      "Application made to search some MARVEL and DC Comics superheroes.Made in React using React Router V6",
    date: "01",
    month: "April",
    image: blog7,
    github: "https://github.com/AngelVelay/MarvelApp",
    demo: "https://marvel-app1.netlify.app/",
  },
  /*    {
        id: 2,
        title: 'BuyBook',
        content: 'Creation of a Book Store made in REACT using the NY Times Book API',
        date: '01',
        month: 'April',
        image: blog2,
        github:'https://github.com/AngelVelay/Libreria_BuyBook',
        demo:'https://libreri-buybook.netlify.app/'
    }, */
  {
    id: 3,
    title: "Music Search",
    content:
      "REACT application to search a band´s biography and song lyrics using the AudioDB API and LyricsOVH",
    date: "01",
    month: "April",
    image: blog3,
    github: "https://github.com/AngelVelay/MUSIC-SEARCH",
    demo: "https://agitated-brown-6dcd15.netlify.app/",
  },

  {
    id: 4,
    title: "CriptoCoin",
    content:
      "Application to consult the Price and Rate Exchange of Cryptocurrencies using the CoinGecko API.",
    date: "01",
    month: "April",
    image: blog5,
    github: "https://github.com/AngelVelay/CriptoCoin",
    demo: "https://criptomonedas-app.netlify.app/",
  },

  {
    id: 5,
    title: "Monthly Budget",
    content: "Application for monthly budget management and administration",
    date: "01",
    month: "April",
    image: blog6,
    github: "https://github.com/AngelVelay/Presupuesto",
    demo: "https://presupuesto-calc.netlify.app/",
  },
  {
    id: 6,
    title: "CrytoBT",
    content:
      "Application to check the real-time price of different cryptocurrencies made in React Native and uses the CoinGecko API.",
    date: "01",
    month: "April",
    image: blog4,
    github: "https://snack.expo.dev/@angelvelay/crypto-market",
    demo: "https://snack.expo.dev/@angelvelay/crypto-market",
  },
];

export default blogs;
