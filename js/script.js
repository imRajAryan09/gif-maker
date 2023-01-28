let tl = gsap.timeline();

if (window.innerWidth > 768) {
	tl.to('#header', {
		duration: 1,
		transform: 'translateY(0%)',
	})
		.to('#hero', {
			duration: 1,
			width: 'max-content',
			opacity: 1,
		})
		.to(['#main-heading', '#sub-heading', '#cta-button'], {
			duration: 1,
			right: '0%',
			opacity: 1,
			stagger: 0.5,
		})
		.to('#hero-img', {
			duration: 1,
			opacity: 1,
			left: 0,
		});
}