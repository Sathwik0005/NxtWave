import './index.css'
import {Component} from 'react'
import MoviesSlider from '../MoviesSlider'

class PrimeVideo extends Component {
  render() {
    const {moviesList} = this.props
    const actionMovies = moviesList.filter(item => item.categoryId === 'ACTION')
    const comedyMovies = moviesList.filter(item => item.categoryId === 'COMEDY')
    return (
      <div className="prime-video-bg-section">
        <img
          src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
          alt="prime video"
          className="prime-video-img"
        />

        <div className="carousel-section">
          <h1 className="action-movies-heading">Action Movies</h1>
          <MoviesSlider movieDetails={actionMovies} />
          <h1 className="comedy-movies-heading">Comedy Movies</h1>
          <MoviesSlider movieDetails={comedyMovies} />
        </div>
      </div>
    )
  }
}

export default PrimeVideo
