const prev = document.querySelector('.button--prev');
const next = document.querySelector('.button--next');
const portrait = document.querySelector('.portrait-container__portrait');
const testimonials = document.querySelectorAll('.testimonial');
let index = 0;

const people = [
	{
		name: 'Tanya Sinclair',
		portrait: './assets/images/image-tanya.jpg',
	},
	{
		name: 'John Tarkpor',
		portrait: './assets/images/image-john.jpg',
	},
];

const hideTestimonials = () =>
	testimonials.forEach((testimonial) => (testimonial.style.display = 'none'));

const animate = (element, cssClass, timeout) => {
	element.classList.add(cssClass);
	setTimeout(() => element.classList.remove(cssClass), timeout);
};

const updatePortrait = (index) => {
	portrait.src = people[index]['portrait'];
	portrait.alt = `A portrait of ${people[index]['name']}`;
	animate(portrait, 'animUp', 1020);
};

const updateTestimonial = (index) => {
	hideTestimonials();
	testimonials[index].style.display = 'block';
	animate(testimonials[index], 'animLeft', 1020);
};

const slideToPrev = () => {
	if (index <= 0) {
		index = testimonials.length - 1;
	} else {
		index--;
	}
	updatePortrait(index);
	updateTestimonial(index);
};

const slideToNext = () => {
	if (index >= testimonials.length - 1) {
		index = 0;
	} else {
		index++;
	}
	updatePortrait(index);
	updateTestimonial(index);
};

prev.addEventListener('click', slideToPrev);
next.addEventListener('click', slideToNext);
updatePortrait(index);
updateTestimonial(index);
