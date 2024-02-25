import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const MoviesSlider = props => {
  const {movieDetails} = props
  const settings = {
    dots: false,
    slidesToScroll: 1,
    slidesToShow: 5,
  }
  return (
    <Slider {...settings}>
      {movieDetails.map(item => (
        <div key={item.id}>
          <img src={item.thumbnailUrl} alt={item.title} />
        </div>
      ))}
    </Slider>
  )
}

export default MoviesSlider
