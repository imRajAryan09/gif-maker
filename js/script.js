let li = document.querySelectorAll('body header nav ul li a');
li.forEach(item => {
	item.addEventListener('click', e => {
		e.preventDefault();
		if (item.textContent === 'About') {
			document.querySelector('body').style.background = '#82cbf8';
		} else if (item.textContent === 'Contact') {
			document.querySelector('body').style.background = '#f8c982';
		} else {
			document.querySelector('body').style.background = '#ffdca8';
		}
	});
});

let tl = gsap.timeline();

if (window.innerWidth > 425) {
	tl.from('#logo', {
		duration: 1,
		yPercent: -100,
	})
		.from(
			'#li-text',
			{
				duration: 1,
				stagger: 0.1,
				ease: 'power0.none',
				width: 0,
			},
			'<'
		)
		.fromTo(
			'#hero',
			{
				duration: 1.5,
				opacity: 0,
			},
			{
				opacity: 1,
			}
		)
		.from(['#main-heading', '#sub-heading', '#cta-button'], {
			right: '150%',
			duration: 1,
			stagger: 0.5,
			ease: 'power4.out',
		})
		.from(
			'#hero-img',
			{
				duration: 1,
				opacity: 0,
				left: '100%',
			},
			'<'
		);
}
