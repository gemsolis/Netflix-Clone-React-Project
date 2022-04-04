
import './App.css';


import Banner from './components/Banner';
import Row from './components/Row';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import requests from './fetch/requests'


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <Row title="Top Trending" fetchUrl={requests.fetchTrending} isLargeRow />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
      <Footer />
    </div>
  );
}

export default App;
