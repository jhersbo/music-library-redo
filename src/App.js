import { useEffect, useState } from 'react'
import AlbumView from './components/AlbumView'
import ArtistView from './components/ArtistView'
import Gallery from './components/Gallery'
import Searchbar from './components/Searchbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// App.js
const App = () => {
  let [search, setSearch] = useState('')
  let [message, setMessage] = useState('Search for Music!')
  let [data, setData] = useState([])

  const API_URL = 'https://itunes.apple.com/search?term='

  useEffect(() => {
      if(search) {
          const fetchData = async () => {
              document.title = `${search} music`
              const response = await fetch(API_URL + search)
              const resData = await response.json()
              console.log(resData)
              if (resData.results.length > 0) {
                  return setData(resData.results)
              } else {
                  return setMessage('Not Found.')
              }
          }
          fetchData()
      }
  }, [search])

  const handleSearch = (e, term) => {
      e.preventDefault()
      setSearch(term)
  }

  return (
      <div>
          {message}
          <Router>
            <Routes>
                <Route path = '/' element={
                    <div>
                        <Searchbar handleSearch={handleSearch}></Searchbar>
                        <Gallery data={data}></Gallery>
                    </div>
                }/>
                <Route path = '/album/:id' element={<AlbumView/>}/>
                <Route path = '/artist/:id' element={<ArtistView/>}/>
            </Routes>
          </Router>
      </div>
  )
}

export default App

