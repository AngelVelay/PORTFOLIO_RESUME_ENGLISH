import blog1 from  '../img/Aplicacoines/taskq.PNG';
import blog3 from  '../img/Aplicacoines/letrasbg.PNG';
import blog2 from  '../img/Aplicacoines/Libreria.png';
import blog4 from  '../img/Aplicacoines/Cryptob.PNG';
import blog5 from  '../img/Aplicacoines/criptos.png';
import blog6 from  '../img/Aplicacoines/gastos.png';





const blogs = [
    {
        id: 1,
        title: 'TaskQ',
        content: 'Aplicación para la gestión de tareas y proyectos. El frontend está hecho en React y el Backend con NODE JS (Express JS)',
        date: '01',
        month: 'April',
        image: blog1,
        github:'https://github.com/AngelVelay/TaskQ-FRONTEND',
        demo:'https://taskq-app.netlify.app/'
    },
    {
        id: 2,
        title: 'Libreria BuyBook',
        content: 'Creación de una librería hecha en REACT utilizando la Book API del NY Times',
        date: '01',
        month: 'April',
        image: blog2,
        github:'https://github.com/AngelVelay/Libreria_BuyBook',
        demo:'https://libreri-buybook.netlify.app/'
    },
    {
        id: 3,
        title: 'Music Search',
        content: 'Aplicación hecha con REACT para buscar la biografia de una banda y las letras de las canciones utilizando la API AudioDB y LyricsOVH',
        date: '01',
        month: 'April',
        image: blog3,
        github:'https://github.com/AngelVelay/MUSIC-SEARCH',
        demo:'https://agitated-brown-6dcd15.netlify.app/'
    },
    {
        id: 4,
        title: 'CryptBT',
        content: 'Aplicación para consultar el Precio y la variación en tiempo real de diferentes Criptomonedas, hecha en React Native',
        date: '01',
        month: 'April',
        image: blog4,
        github:'https://snack.expo.dev/@angelvelay/crypto-market',
        demo:'https://snack.expo.dev/@angelvelay/crypto-market'
    },
    {
        id: 5,
        title: 'CriptoCoin',
        content: 'Aplicación para consultar el Precio y el Rate Exchange de Criptomonedas utilizando la API CoinGecko',
        date: '01',
        month: 'April',
        image: blog5,
        github:'https://github.com/AngelVelay/CriptoCoin',
        demo:'https://criptomonedas-app.netlify.app/'
    },
    
    {
        id: 5,
        title: 'Presupuesto',
        content: 'Aplicación para la gestión y administración del presupuesto mensual',
        date: '01',
        month: 'April',
        image: blog6,
        github:'https://github.com/AngelVelay/Presupuesto',
        demo:'https://presupuesto-calc.netlify.app/'
    }
]

export default blogs;