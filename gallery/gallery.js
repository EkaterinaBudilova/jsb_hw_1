const nextButton = document.getElementById('nextPhoto');
const prevButton = document.getElementById('prevPhoto');
const gallery = document.getElementById('currentPhoto');
let images = [
  'i/breuer-building.jpg',
  'i/guggenheim-museum.jpg',
  'i/headquarters.jpg',
  'i/IAC.jpg',
  'i/new-museum.jpg'
]
let i = 0;
gallery.src = images[0];
prevButton.onclick = function() {
  i--;
  if(i < 0) {
    i = images.length - 1;
  }
  gallery.src = images[i]; 
}

nextButton.onclick = function() {
  i++;
  if(i > images.length-1) {
    i = 0;
  }
//  console.log('click');
  gallery.src = images[i];  
}