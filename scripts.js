//start
document.querySelector('.ion-md-menu').addEventListener('click', function () {
    document.querySelector('.nav-list').classList.add('display');
})

document.querySelector('.nav-list').addEventListener('click', function () {
    document.querySelector('.nav-list').classList.remove('display');
})

let slides = document.querySelectorAll('.slide');
  let btns = document.querySelectorAll('.btn');
    let currentSlide = 1;

    // Javascript for image slider manual navigation
    let manualNav = function(manual){
      slides.forEach((slide) => {
        slide.classList.remove('active');

        btns.forEach((btn) => {
          btn.classList.remove('active');
        });
      });

      slides[manual].classList.add('active');
      btns[manual].classList.add('active');
    }

    btns.forEach((btn, i) => {
      btn.addEventListener("click", () => {
        manualNav(i);
        currentSlide = i;
      });
    });

    // Javascript for image slider autoplay navigation
    let repeat = function(activeClass){
      let active = document.getElementsByClassName('active');
      let i = 1;

      let repeater = () => {
        setTimeout(function(){
          [...active].forEach((activeSlide) => {
            activeSlide.classList.remove('active');
          });

        slides[i].classList.add('active');
        btns[i].classList.add('active');
        i++;

        if(slides.length == i){
          i = 0;
        }
        if(i >= slides.length){
          return;
        }
        repeater();
      }, 5000);
      }
      repeater();
    }
    repeat();