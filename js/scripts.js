// Custom Scripts
const form = document.querySelector(".form");
const input = document.querySelector(".form__input");

input.addEventListener("focus", function () {
	form.classList.add("form--active");
});

input.addEventListener("blur", function () {
	form.classList.remove("form--active");
});

// Import Swiper and modules
// Now you can use Swiper

const swiper = new Swiper(".mySwiper", {
	slidesPerView: 3,
	spaceBetween: 30,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
});

// Модальное окно
function bindModal(trigger, modal, close) {
	(trigger = document.querySelector(trigger)),
		(modal = document.querySelector(modal)),
		(close = document.querySelector(close));

	const body = document.body;

	trigger.addEventListener("click", e => {
		e.preventDefault();
		modal.style.display = "flex";
		body.classList.add("locked");
	});
	close.addEventListener("click", () => {
		modal.style.display = "none";
		body.classList.remove("locked");
	});
	modal.addEventListener("click", e => {
		if (e.target === modal) {
			modal.style.display = "none";
			body.classList.remove("locked");
		}
	});
}

// ПЕРВЫЙ аргумент - класс кнопки, при клике на которую будет открываться модальное окно.
// ВТОРОЙ аргумент - класс самого модального окна.
// ТРЕТИЙ аргумент - класс кнопки, при клике на которую будет закрываться модальное окно.
bindModal(".modal__btn", ".modal__wrapper", ".modal__close");

