// Javascript for image slider manual
import "./scss/style.scss";
import "./menu";

let btns = document.querySelectorAll(".slider__dots");
let slides = document.querySelectorAll(".slider__img");

let manualNav = function (manual) {
	slides.forEach((slide) => {
		slide.classList.remove("slider__img--active");

		btns.forEach((btn) => {
			btn.classList.remove("slider__dots--active");
		});
	});

	slides[manual].classList.add("slider__img--active");
	btns[manual].classList.add("slider__dots--active");
};

btns.forEach((btn, i) => {
	btn.addEventListener("click", () => {
		manualNav(i);
		// currentSlide = i;
	});
});

// Javascript for image slider autoplay navigation
let repeat = function (activeClass) {
	let activeSlider = document.getElementsByClassName("slider__img--active");
	let activeDot = document.getElementsByClassName("slider__dots--active");
	let i = 1;

	let repeater = () => {
		setTimeout(function () {
			[...activeSlider].forEach((activeSlideImg) => {
				activeSlideImg.classList.remove("slider__img--active");
			});

			[...activeDot].forEach((activeSlideBtn) => {
				activeSlideBtn.classList.remove("slider__dots--active");
			});

			slides[i].classList.add("slider__img--active");
			btns[i].classList.add("slider__dots--active");
			i++;

			if (slides.length == i) {
				i = 0;
			}
			if (i >= slides.length) {
				return;
			}
			repeater();
		}, 5000);
	};
	repeater();
};
repeat();
