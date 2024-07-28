import {Component} from 'react'
import {Chrono} from 'react-chrono'
import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'
import './index.css'

class TimelineView extends Component {
  render() {
    const {timelineItemsList} = this.props
    return (
      <div className="time-line-bg-section">
        <h1 className="my-journey-heading">
          MY JOURNEY OF <br />
          CCBP 4.0
        </h1>
        <div className="chrono-container">
          <Chrono mode="VERTICAL_ALTERNATING" items={timelineItemsList}>
            {timelineItemsList.map(item =>
              item.categoryId === 'COURSE' ? (
                <CourseTimelineCard key={item.id} itemDetails={item} />
              ) : (
                <ProjectTimelineCard key={item.id} itemDetails={item} />
              ),
            )}
          </Chrono>
        </div>
      </div>
    )
  }
}

export default TimelineView
