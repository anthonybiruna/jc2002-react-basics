
import './assets/styles.css'
import "bootstrap/dist/css/bootstrap.min.css"
import BandInfo from './components/BandInfo/BandInfo';
import BandPhotos from './components/BandPhotos/BandPhotos';
import Navbar from './components/Navbar/Navbar';
import TourCard from './components/TourCard/TourCard'

function App() {
  return (
    <>
      <Navbar/>
      <div>
        <h1>welcome</h1>
        <h2>Halo kawan</h2>
      </div>
      <BandInfo/>
      <BandPhotos/>
      <div>
        <TourCard />
        <TourCard />
        <TourCard />
      </div>
    </>
  
  );
}

export default App;
