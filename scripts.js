const faq = document.querySelectorAll('.faq__list__item')
faq.forEach( item => item.addEventListener('click', () => item.classList.toggle('faq__list__item--open')))


const watch = document.querySelectorAll('.watch')
const intersection_observer = new IntersectionObserver( (items) =>{
	items.forEach( item => {
		
		if( item.isIntersecting){
			item.target.classList.add('in-view')
		}
		else{
			item.target.classList.remove('in-view')
		}
	})
}, { threshold: 0.1} )

watch.forEach( el => intersection_observer.observe(el))