const menu = document.getElementById('menu');
const barBtn = document.getElementById('bar-btn');
const slider1 = document.getElementById('slider-1');
const slider2 = document.getElementById('slider-2');
const slider3 = document.getElementById('slider-3');
const vid = document.getElementById('vid');
const brand = document.getElementById('brand');
const mainPhoto = document.getElementById('main-photo');
const collectionWomen = document.querySelector('.collection__women');
const collectionMen = document.querySelector('.collection__men');

// // TRANSITION
// collectionWomen.addEventListener('transitionstart', () => {
//   console.log('Transition Ended')
//   // collectionMen.style.zIndex = "0"
//   collectionWomen.style.zIndex = "10000"
// })

// collectionWomen.addEventListener('transitionend', () => {
//   console.log('Transition Ended')
//   // collectionMen.style.zIndex = "0"
//   collectionWomen.style.zIndex = "0"
// })

// collectionMen.addEventListener('transitionstart', () => {
//   console.log('Transition Ended')
//   // collectionWomen.style.zIndex = "0"
//   collectionMen.style.zIndex = "10000"
// })

// collectionMen.addEventListener('transitionend', () => {
//   console.log('Transition Ended')
//   // collectionWomen.style.zIndex = "0"
//   collectionMen.style.zIndex = "0"
// })



// PLAY VIDEO
document.getElementById('vid').play();

// SLIDES

// Create array with objects needed
let arrayWatch = [
  { brand: 'Mojave', url: 'img/men-watch.jpg' },
  { brand: 'Maverick', url: 'img/watch-v1.jpg' },
  { brand: 'Navigator', url: 'img/forest.jpg' }
];

// Set counter
let counter = 1;

// Set time out of 10s
let myTimer = setInterval(moveSlides, 5000);

function moveSlides() {

    // Retrieve the right slider
    let slider = `slider-${counter + 1}`;
    // Update DOM element with the one from the array
    brand.innerHTML = arrayWatch[counter].brand;
    mainPhoto.src = arrayWatch[counter].url;

    let arrayTest = document.querySelectorAll('.slider__circle')
        .forEach(el => el.classList.remove('black'))

    document.getElementById(slider).classList.add('black');

    if (counter < 2) {
      counter ++

    } else {
        counter = 0;
    };
}

function reset(){
  // Retrieve number and assign to count for DOM manipulation
  counter = this.dataset.slider - 1;
  console.log(counter)
  brand.innerHTML = arrayWatch[counter].brand;
  mainPhoto.src = arrayWatch[counter].url;

  // Remove from all black
  let arrayTest = document.querySelectorAll('.slider__circle')
      .forEach(el => el.classList.remove('black'))

  // Add black to clicked element
  this.classList.add('black')

  clearInterval(myTimer);
  myTimer = setInterval(moveSlides, 5000);
};


// Event Listeners
slider1.addEventListener('click', reset);
slider2.addEventListener('click', reset);
slider3.addEventListener('click', reset);


// MENU

barBtn.addEventListener('click', function(){
  menu.classList.toggle('toggle');
});







