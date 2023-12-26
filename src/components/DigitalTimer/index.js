import {Component} from 'react'
import './index.css'

const initialValues = {
  timerLimitInMinutes: 25,
  timeElapsedInSeconds: 0,
  isTimerRunning: false,
}

class DigitalTimer extends Component {
  state = initialValues

  clearTimerInterval = () => {
    clearInterval(this.intervalId)
  }

  incrementTimeElapsedInSeconds = () => {
    const {timerLimitInMinutes, timeElapsedInSeconds} = this.state
    const isTimerCompleted = timeElapsedInSeconds === timerLimitInMinutes * 60

    if (isTimerCompleted) {
      this.clearTimerInterval()
      this.setState({isTimerRunning: false})
    } else {
      this.setState(prevState => ({
        timeElapsedInSeconds: prevState.timeElapsedInSeconds + 1,
      }))
    }
  }

  onClickStartOrPauseBtn = () => {
    const {isTimerRunning, timerLimitInMinutes, timeElapsedInSeconds} =
      this.state
    const isTimeCompleted = timeElapsedInSeconds === timerLimitInMinutes * 60
    if (isTimeCompleted) {
      this.setState({timeElapsedInSeconds: 0})
    }
    if (isTimerRunning) {
      this.clearTimerInterval()
    } else {
      this.intervalId = setInterval(this.incrementTimeElapsedInSeconds, 1000)
    }
    this.setState(prevState => ({
      isTimerRunning: !prevState.isTimerRunning,
    }))
  }

  onClickDecreaseTimerLimit = () => {
    const {isTimerRunning} = this.state
    if (!isTimerRunning) {
      this.setState(prevState => ({
        timerLimitInMinutes: prevState.timerLimitInMinutes - 1,
      }))
    }
  }

  onClickIncreaseTimerLimit = () => {
    const {isTimerRunning} = this.state
    if (!isTimerRunning) {
      this.setState(prevState => ({
        timerLimitInMinutes: prevState.timerLimitInMinutes + 1,
      }))
    }
  }

  onClickResetBtn = () => {
    this.setState(initialValues)
    this.clearTimerInterval()
  }

  getElapsedMinutesSecondsInTimeFormat = () => {
    const {timerLimitInMinutes, timeElapsedInSeconds} = this.state
    const totalRemainingSeconds =
      timerLimitInMinutes * 60 - timeElapsedInSeconds
    const minutes = Math.floor(totalRemainingSeconds / 60)
    const seconds = Math.floor(totalRemainingSeconds % 60)
    const stringifiedMinutes = minutes < 10 ? `0${minutes}` : minutes
    const stringifiedSeconds = seconds < 10 ? `0${seconds}` : seconds
    return `${stringifiedMinutes}:${stringifiedSeconds}`
  }

  render() {
    const {timerLimitInMinutes, isTimerRunning} = this.state
    const statusOfTimer = isTimerRunning ? 'Running' : 'Paused'
    const startControllerBtnImgUrl = isTimerRunning
      ? 'https://assets.ccbp.in/frontend/react-js/pause-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/play-icon-img.png'
    const startControllerBtnImgUrlAlt = isTimerRunning
      ? 'pause icon'
      : 'play icon'
    const startHeadingValue = isTimerRunning ? 'Pause' : 'Start'
    return (
      <div className="app-container flexing-container">
        <h1 className="main-heading">Digital Timer</h1>
        <div className="app-sub-container">
          <div className="display-timer-container flexing-container">
            <span className="wrap-display-and-status-time flexing-container">
              <h1 className="display-time-heading">
                {this.getElapsedMinutesSecondsInTimeFormat()}
              </h1>
              <p className="status-of-timer">{statusOfTimer}</p>
            </span>
          </div>
          <div className="controls-section flexing-container">
            <div className="start-reset-section flexing-container">
              <button
                type="button"
                className="start-controller-btn flexing-container"
                onClick={this.onClickStartOrPauseBtn}
              >
                <img
                  src={startControllerBtnImgUrl}
                  alt={startControllerBtnImgUrlAlt}
                  className="play-icon"
                />
                <h1 className="start-heading">{startHeadingValue}</h1>
              </button>
              <button
                type="button"
                className="start-controller-btn flexing-container"
                onClick={this.onClickResetBtn}
              >
                <img
                  src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png"
                  alt="play icon"
                  className="reset icon"
                />
                <h1 className="start-heading">Reset</h1>
              </button>
            </div>
            <p className="set-timer-limit-paragraph-element">Set Timer Limit</p>
            <span className="wrap-timer-limit-controllers flexing-container">
              <button
                type="button"
                className="decrease-timer-limit-btn"
                onClick={this.onClickDecreaseTimerLimit}
              >
                -
              </button>
              <p className="timer-limit-value">{timerLimitInMinutes}</p>
              <button
                type="button"
                className="increase-timer-limit-btn"
                onClick={this.onClickIncreaseTimerLimit}
              >
                +
              </button>
            </span>
          </div>
        </div>
      </div>
    )
  }
}

export default DigitalTimer
