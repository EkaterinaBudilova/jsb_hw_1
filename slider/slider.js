let slide = document.getElementById('slider');
const images = [
  'i/airmax-jump.png',
  'i/airmax-on-foot.png',
  'i/airmax-playground.png',
  'i/airmax-top-view.png',
  'i/airmax.png' 
];
//alert(images[5]);
//slide.src = images[3];
let i = 0;
setInterval(() => {
  if (i == images.length - 1) {
    i = 0; 
  }
  slide.src = images[i];
  i++;
}, 5000);



//for (let i = 0; i < images.length; i++) {
////  if (i = images.length - 1) {
////    i = 0;
////  }
//  slide.src = images[2];
//}
