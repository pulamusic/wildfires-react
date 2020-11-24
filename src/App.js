import Map from './components/Map'

function App() {
  return (
    <div>

      <header>
        <h1>Current wildfires on the U.S. West Coast</h1>
        <h2>This project accesses Google Maps and NASA APIs</h2>
        <hr/>
      </header>

      <main>
        <Map />
      </main>

      <footer>
        <p>&copy; 2020 <a href="https://github.com/pulamusic" target="_blank">pulamusic</a></p>
      </footer>

    </div>
  );
};

export default App;
