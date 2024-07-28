import './index.css'
import {AiFillClockCircle} from 'react-icons/ai'

const CourseTimelineCard = props => {
  const {itemDetails} = props
  const {courseTitle, duration, description, tagsList} = itemDetails
  console.log(tagsList)
  return (
    <div className="course-timeline-cart-section">
      <div className="title-section align-container">
        <h1 className="title-heading">{courseTitle}</h1>
        <div className="duration-section align-container">
          <AiFillClockCircle className="clock-icon" />
          <p className="duration">{duration}</p>
        </div>
      </div>
      <p className="course-timeline-description">{description}</p>
      <ul className="unordered-tag-list-items">
        {tagsList.map(item => (
          <li key={item.categoryId} className="tag-item">
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CourseTimelineCard
