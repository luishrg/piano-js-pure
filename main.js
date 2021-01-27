const keys = document.querySelectorAll('.keys')

function playNote(event) {
  const keyCode = getKeyCode(event)
  const key = document.querySelector(`div[data-key="${keyCode}"]`)
  const note = document.querySelector(`audio[data-key="${keyCode}"]`)

  if (note == null) return

  addPlayingClass(key)
  note.currentTime = 0
  note.play()
}

function getKeyCode(event) {
  const typeEvent = event.type
  const keyCode = typeEvent == 'click' ? event.target.dataset.key : event.keyCode
  return keyCode
}

function addPlayingClass(key) {
  key.classList.add('playing')
}

function removePlayingClass(event) {
  const key = event.target
  key.classList.remove('playing')
}

keys.forEach(key => {
  key.addEventListener('click', playNote)
  key.addEventListener('transitionend', removePlayingClass)
})

window.addEventListener('keydown', playNote)