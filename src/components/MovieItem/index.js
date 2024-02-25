import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'
import {IoMdClose} from 'react-icons/io'

import 'reactjs-popup/dist/index.css'
import './index.css'

const MovieItem = ({movieDetails}) => {
  const {thumbnailUrl, videoUrl} = movieDetails

  return (
    <Popup
      trigger={<img className="thumbnail" src={thumbnailUrl} alt="thumbnail" />}
      modal
      closeOnDocumentClick
    >
      {close => (
        <div className="modal-container">
          <button
            aria-label="close button"
            type="button"
            className="close-button"
            onClick={close}
          >
            <IoMdClose size={20} color="#231f20" />
          </button>
          <div className="movie-player-container">
            <ReactPlayer url={videoUrl} controls />
          </div>
        </div>
      )}
    </Popup>
  )
}

export default MovieItem
