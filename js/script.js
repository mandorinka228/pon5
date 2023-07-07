let shot = document.querySelector('.shot'),
    hit = document.querySelector('.hit'),
    count = document.querySelector('.count strong'),
    counter = 0;

document.body.addEventListener('click', playShot);


function playShot(e) {
 let el = e.target;
  ammo--;
  if (ammo == 0)
  {
    alert ("Закончились потрони")
    location.reload()
  }
 if(el.classList.contains('michen')) {
  hit.stop();
  hit.play();
  counter++;
  count.textContent = counter;
  el.classList.add('die');
  el.remove()
  if(counter == 10) {
   setTimeout(replay,400);
  }
 } else {
  shot.stop();
  shot.play();
 }
}

function replay() {
 let died = document.querySelectorAll('.michen');
 died.forEach(function(item){
  item.classList.remove('die');
  
 });
 counter = 0;
 count.textContent = counter;
}


HTMLAudioElement.prototype.stop = function(){
 this.pause();
 this.currentTime = 0.0;
}

let ammo = 10