// GalleryItem.js
import { useState } from 'react'

function GalleryItem(props) {
    let [view, setView] = useState(false)

    const simpleView = () => {
        const simpleStyle = {
            'width': '25vw',
            'height': '20vh',
            'border': '1px solid black',
            'margin': '2px'
        }
        return (
            <div style={simpleStyle}>
                <h3>{props.item.trackName}</h3>
                <h4>{props.item.collectionName}</h4>
            </div>
        )
    }

    const detailView = () => {
        const detailStyle = {
            'width': '80vw',
            'height': '20vh',
            'border': '1px solid black',
            'margin': '2px',
            'backgroundImage': `url(${props.item.artworkUrl100})`,
            'backgroundRepeat': 'no-repeat',
            'backgroundSize': 'cover',
            'color': 'yellow'
        }
        return (
            <div style={detailStyle}>
                <h2>{props.item.trackName}</h2>
                <h3>
                    <a href={`/artist/${props.data.artistId}`}>
                        {props.data.artistName}
                    </a>
                </h3>
                <h3>
                    <a href={`/album/${props.data.collectionId}`}>
                        {props.data.collectionId}
                    </a>
                </h3>
                <h4>{props.item.primaryGenreName}</h4>
                <h4>{props.item.releaseDate}</h4>
            </div>
        )
    }

    return (
        <div onClick={() => setView(!view)}
        style={{'display': 'inline-block'}}>
            {view ? detailView() : simpleView()}
        </div>
    )

}
export default GalleryItem



