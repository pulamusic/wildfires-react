import React from 'react'
import { useState, useEffect } from 'react'
import Map from './components/Map'
import Header from './components/Header'
import Footer from './components/Footer'
import Spinner from './components/Spinner'

function App() {
  const [eventData, setEventData] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(()=> {
    const fetchEvents = async () => {
      setLoading(true)
      const url = 'https://eonet.sci.gsfc.nasa.gov/api/v2.1/events?apikey=MhYhgtZO96ANwF0YuJ5vN5t9cz6CcfcpQm0UQA11'
      const res = await fetch(url)
      const { events } = await res.json()

      setEventData(events)
      // const eventData = events
      setLoading(false)
      console.log(events)
    }

    fetchEvents(eventData)
    // console.log(eventData)
  }, [])

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
