import logo from './logo.svg';
import './App.css';
import Countries from './components/countries/countries.';
import Country from './components/country/country';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';



function App() {
  return (
    <div className="App">
      <Header></Header>
   <Countries></Countries>
   {/* <Country></Country> */}
   <Footer></Footer>
     {/* <LoadCountries></LoadCountries> */}
    </div>
  );
}

// const LoadCountries = () => {
//   const [countries, setCountries] = useState([])

//   useEffect(() => {
//     fetch('https://restcountries.com/v3.1/all')
//     .then(res => res.json())
//     .then(data  => setCountries(data))
//   }, [])
//   return(
//     <div>
//       <h2>Load Countries API</h2>
//       <p>Available countries {countries.length}</p>
//       {
//       countries.map(country => <Country name={country.name.common} population={country.population}></Country>)
//     }
//     </div>
   
//   )
// }

// const Country = (prop) => {
// return(
//   <div>
//     <h1>{prop.name}</h1>
//   <h2>{prop.population} </h2>
//   </div>
// )
// }
export default App;
