import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
// import { useHistory } from 'react-router-dom'

const AlbumView = () => {
    // const history = useHistory()
    const { id } = useParams()
    const [ albumData, setAlbumData ] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const API_URL = `http://localhost:4000/song/${id}`
            const response = await fetch(API_URL)
            const resData = await response.json()
            setAlbumData(resData.results)
        }
        fetchData()
    }, [id])

    // const navButtons = ()=>{
    //     return(
    //         <div>
    //             <button onClick={()=>history.goBack()}>Back</button>
    //             |
    //             <button onClick={()=>history.push('/')}>Home</button>
    //         </div>
    //     )
    // }

    const justSongs = albumData.filter(entry => entry.kind === 'song')

    const renderSongs = justSongs.map((song, i) => {
        return (
            <div key={i}>
                <p>{song.trackName}</p>
            </div>
        )
    })

    return (
        <div>
            {albumData[0].albumName}
            {/* {navButtons()} */}
            {renderSongs}
        </div>
    )
}

export default AlbumView