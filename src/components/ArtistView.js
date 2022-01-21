// import { useHistory } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

const ArtistView = () => {
    // const history = useHistory()
    const {id} = useParams()
    const [ artistData, setArtistData ] = useState([])

    useEffect(()=>{
        const API_URL = `http://localhost:4000/album/${id}`
        const fetchData = async ()=>{
            const response = await fetch(API_URL)
            const resData = await response.json()
            setArtistData(resData.results)
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

    const justAlbums = artistData.filter(entry => entry.collectionType === 'Album')
    const renderAlbums = justAlbums.map((album, i)=>{
        return(
            <div key={i}>
                <Link to={`/album/${album.collectionId}`}>
                    <p>{album.collectionName}</p>
                </Link>
            </div>
        )
    })

    return (
        <div>
            {artistData[0].artistName}
            {/* {navButtons()} */}
            {renderAlbums}
        </div>
    )
}

export default ArtistView