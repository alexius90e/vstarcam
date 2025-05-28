const tariffsTogglerButtons = document.querySelectorAll('.tariffs__toggler-button');
const tariffsItems = document.querySelectorAll('.tariffs__cards-item');

tariffsTogglerButtons.forEach((button) => {
  button.addEventListener('click', (event) => {
    const targetId = event.currentTarget.dataset.target;
    const targetTariffsItem = document.getElementById(targetId);

    console.log(targetTariffsItem);

    if (targetTariffsItem) {
      tariffsTogglerButtons.forEach((button) => button.classList.remove('active'));
      event.currentTarget.classList.add('active');

      tariffsItems.forEach((item) => item.classList.remove('active'));
      targetTariffsItem.classList.add('active');
    }
  });
});

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
