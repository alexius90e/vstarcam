const tariffsFaqMoreEl = document.querySelector('.tariffs-faq__more');
const tariffsFaqItemEls = document.querySelectorAll('.tariffs-faq__item');

if (tariffsFaqMoreEl) {
  tariffsFaqMoreEl.addEventListener('click', (event) => {
    const isMoreBtn = event.target.classList.contains('tariffs-faq__more-button');
    if (isMoreBtn) {
      tariffsFaqItemEls.forEach((element) => element.classList.remove('hidden'));
      event.currentTarget.classList.add('hidden');
    }
  });
}
