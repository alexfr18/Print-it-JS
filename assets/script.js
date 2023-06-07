const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

const picture = document.querySelectorAll(".stock");
// console.log(picture);

const nbPicture = picture.length;
// console.log(nbPicture);

const arrowLeft = document.querySelector(".arrow_left");
//console.log(arrowLeft);

const arrowRight = document.querySelector(".arrow_right");
//console.log(arrowRight);

let count = 0;
// console.log(count);

const bullet = document.querySelectorAll(".dot");
// console.log(bullet);

const nbBullet = bullet.length;
// console.log(nbBullet);

function next() {
  bullet[count].classList.remove("dot_selected");
  picture[count].classList.remove("active");

  if (count < nbBullet - 1) {
    count++;
  } else {
    count = 0;
  }

  bullet[count].classList.add("dot_selected");
  picture[count].classList.add("active");
  console.log(count);
}

function previous() {
  bullet[count].classList.remove("dot_selected");
  picture[count].classList.remove("active");

  if (count > 0) {
    count--;
  } else {
    count = nbBullet - 1;
  }

  bullet[count].classList.add("dot_selected");
  picture[count].classList.add("active");
  console.log(count);
}

arrowRight.addEventListener("click", next);
console.log(arrowRight);

arrowLeft.addEventListener("click", previous);
console.log(arrowLeft);
