let songs = [
 'gojo',
 'toji',
 'lone soul',
 'muck da duck',
 'one piece sea shanty',
 'the cutest capybara',
 'the dragons lament',
 'battle of ages',
 'ignite',
 'sail away',
 'the peasants triumph',
 'the king of curses',
 'three sword, two legs, one eye',
 'valhalla warriors',
 'walking in the rain',
 'whitebeards rise'

]

let song = document.getElementById('song')
let list = document.getElementById('list')
let search = document.getElementById('search')
let vol = document.getElementById('vol')

function searchQ() {
  list.innerHTML = '';
  if (search.value !== '*') {
    for (let s of songs) {
     if (s.includes(search.value)) {
      let i = document.createElement('p')
      i.onclick = function() {
       song.src = 'music/' + s + '.mp3'
       song.load()
       song.play()
       song.volume = vol.value / 100;
      }
      i.style = 'cursor: pointer;'
      i.textContent = s 
      list.appendChild(i)
     }
    }
  } else {
    for (let s of songs) {
      let i = document.createElement('p')
      i.onclick = function() {
       song.src = 'music/' + s + '.mp3'
       song.load()
       song.play()
       song.volume = vol.value / 100;
      }
      i.style = 'cursor: pointer;'
      i.textContent = s 
      list.appendChild(i)
    }
  }

}


vol.addEventListener('change', function() {
  song.volume = vol.value / 100;
});