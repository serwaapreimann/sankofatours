import './App.scss';
import Header from './components/Header/Header';
// import Maps from './components/Maps/Maps';
import POI from './components/POI/POI';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Destination from './components/Destinations/Destination';
import Homepage from './components/Homepage/Homepage';

function App() {
  // useEffect(() => {
  //   document.title = "Sankofa Tours | Explore, Experience, Embrace."
  // })

  

  return (
    <>
      <BrowserRouter>
          <Header className="header--component"/>
          <Routes>
                <Route path='/' element={<Homepage/>} />
                <Route path ="/country/countryName" element = {<POI />} />
                <Route path = "country/country/destinations" element = {<Destination />} />
          </Routes>
      </BrowserRouter>
     
    </>   
  )
}


export default App