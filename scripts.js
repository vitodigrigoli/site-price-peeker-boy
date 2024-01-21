const faq = document.querySelectorAll('.faq__list__item')
console.log(faq)

faq.forEach( item => item.addEventListener('click', () => item.classList.toggle('faq__list__item--open')))