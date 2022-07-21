import Sound from "./sounds.js"

export default function Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls,
}) {
  
  let minutes = Number(minutesDisplay.textContent)
  let timerTimeOut

  function reset() {
    updateDisplay(minutes, 0)
    clearTimeout(timerTimeOut)
  }

  function updateDisplay(minutes, seconds) {
    minutesDisplay.textContent = String(minutes).padStart(2, "0")
    secondsDisplay.textContent = String(seconds).padStart(2, "0")
  }

  function countDown() {
    timerTimeOut = setTimeout(function () {
    let minutes = minutesDisplay.textContent
    let seconds = secondsDisplay.textContent
    let isFinished = minutes <= 0 && seconds == 0

    updateDisplay(minutes, 0)

    if (isFinished) {
      resetControls()
      reset()
      Sound().timeEnd()
      return
    }

    if (seconds <= 0) {
      seconds = 3
      --minutes
    }

    updateDisplay(minutes, String(seconds - 1))

    countDown()
    }, 1000)
  }

  function updateMinutes(newMinutes) {
    minutes = newMinutes
  }

  function hold() {
    clearTimeout(timerTimeOut)
  }

    return {
      countDown,
      reset,
      updateDisplay,
      updateMinutes,
      hold
    }

}