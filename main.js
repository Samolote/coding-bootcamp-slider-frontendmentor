//SLIDER

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

// const removeAnimation = (element, cssClass) => {
// 	element.classList.remove(cssClass);
// 	element.removeEventListener('animationend', removeAnimation(element, cssClass));
// };

const collectAnimations = (element, cssClass) => {
	console.log(element);
	console.log(cssClass);
};

const animate = (element, cssClass) => {
	element.classList.add(cssClass);
	element.addEventListener('animationend', () => {
		element.classList.remove(cssClass);
	});
};

const updatePortrait = (index) => {
	portrait.src = people[index]['portrait'];
	portrait.alt = `A portrait of ${people[index]['name']}`;
	animate(portrait, 'animUp');
};

const updateTestimonial = (index) => {
	hideTestimonials();
	testimonials[index].style.display = 'block';
	animate(testimonials[index], 'animLeft');
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

//BUTTON RIPPLE
const buttonContainer = document.querySelector('.button-container');

const removeRipple = function () {
	buttonContainer.removeChild(this);
};

const buttonClickHandler = function () {
	const rect = event.currentTarget.getBoundingClientRect();
	const diameter = Math.max(this.clientWidth, this.clientHeight);
	const radius = diameter / 2;
	const xPos = event.clientX - (rect.left + radius);
	const yPos = event.clientY - (rect.top + radius);
	const ripple = document.createElement('span');
	ripple.classList.add('ripple');
	ripple.style.width = `${diameter}px`;
	ripple.style.height = `${diameter}px`;
	ripple.style.left = `${xPos}px`;
	ripple.style.top = `${yPos}px`;
	this.appendChild(ripple);
	ripple.addEventListener('animationend', removeRipple);
};

buttonContainer.addEventListener('click', buttonClickHandler);
