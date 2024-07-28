import './index.css'
import {AiFillCalendar} from 'react-icons/ai'

const ProjectTimelineCard = props => {
  const {itemDetails} = props
  const {projectTitle, description, imageUrl, duration, projectUrl} =
    itemDetails
  return (
    <div className="project-timeline-cart-section">
      <img src={imageUrl} alt={projectTitle} className="project-image" />
      <div className="project-timeline-title-section align-container">
        <h1 className="project-title-heading">{projectTitle}</h1>
        <div className="project-timeline-duration-section align-container">
          <AiFillCalendar className="calender-icon" />
          <p className="project-timeline-duration">{duration}</p>
        </div>
      </div>
      <p className="project-timeline-description">{description}</p>
      <a
        href={projectUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="anchor-tag"
      >
        Visit
      </a>
    </div>
  )
}

export default ProjectTimelineCard
