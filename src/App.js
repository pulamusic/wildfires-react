import Map from './components/Map'

function App() {
  return (
    <div className="container">

      <header>
        <h1>Current wildfires on the U.S. West Coast</h1>
        <h2>playing around with Google Maps and NASA APIs</h2>
        <p>This project started as part of a <a href="https://youtu.be/ontX4zfVqK8" target="_blank" rel="noreferrer">Traversy Media YouTube tutorial</a>. It accesses data from <span className="org-name">Google Maps</span>'s <a href="https://developers.google.com/maps/documentation/javascript/overview" target="_blank" rel="noreferrer">JavaScript API</a> &amp; <span className="org-name">NASA</span>'s <a href="https://api.nasa.gov/" target="_blank" rel="noreferrer">Earth Observatory Natural Event Tracker (EONET) API</a></p>
        <hr/>
      </header>

      <main>
        <Map />
      </main>

      <footer>
        <p>&copy; 2020 <a href="https://github.com/pulamusic" target="_blank" rel="noreferrer">pulamusic</a></p>
      </footer>

    </div>
  );
};

export default App;
