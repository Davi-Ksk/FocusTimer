export default function Controls({
  buttonPlay,
  buttonPause,
  buttonSet,
  buttonStop
}) {
  
  function play(){
    buttonPlay.classList.add('hide')
    buttonPause.classList.remove('hide')
    buttonSet.classList.add('hide')
    buttonStop.classList.remove('hide')
  }

  function pause() {
    buttonPause.classList.add('hide') 
    buttonPlay.classList.remove('hide')
  }

  function reset() {
    buttonSet.classList.remove('hide')
    buttonStop.classList.add('hide')
    buttonPause.classList.add('hide') 
    buttonPlay.classList.remove('hide')
  }

  function getMinutes() {
    let newMinutes = prompt('Quantos minutos?')
    if (!newMinutes || newMinutes ==  0) {
      return false
    }
    
    return newMinutes
  }

  return {
    reset,
    play,
    pause,
    getMinutes,
    
  }

}