import React from 'react'
import { useState, useEffect } from 'react'
import Map from './components/Map'
import Header from './components/Header'
import Footer from './components/Footer'
import Spinner from './components/Spinner'
import REACT_APP_NASA_KEY from '.env'


function App() {
  const [eventData, setEventData] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(()=> {
    const fetchEvents = async () => {

      setLoading(true)

      const nasaKey = REACT_APP_NASA_KEY

      const url = `https://eonet.sci.gsfc.nasa.gov/api/v2.1/events?apikey=${nasaKey}`

      const res = await fetch(url)

      const { events } = await res.json()

      setEventData(events)

      setLoading(false)

    }

    fetchEvents(eventData)

  }, [eventData])

  return (
    <div className="container">
      <Header />

      <main>
        { !loading ? <Map eventData={eventData} /> : <Spinner /> }
      </main>

      <Footer />

    </div>
  );
};

export default App;
