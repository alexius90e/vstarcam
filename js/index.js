const tariffsTogglerButtons = document.querySelectorAll('.tariffs__toggler-button');
const tariffsItems = document.querySelectorAll('.tariffs__cards-item');

tariffsTogglerButtons.forEach((button) => {
  button.addEventListener('click', (event) => {
    const targetId = event.currentTarget.dataset.target;
    const targetTariffsItem = document.getElementById(targetId);

    if (targetTariffsItem) {
      tariffsTogglerButtons.forEach((button) => button.classList.remove('active'));
      event.currentTarget.classList.add('active');

      tariffsItems.forEach((item) => item.classList.remove('active'));
      targetTariffsItem.classList.add('active');
    }
  });
});

const tariffsModalTogglerButtons = document.querySelectorAll('.tariffs__modal-main-toggler-button');
const tariffsModalForms = document.querySelectorAll('.tariffs__modal-main-form');

tariffsModalTogglerButtons.forEach((button) => {
  button.addEventListener('click', (event) => {
    const targetId = event.currentTarget.dataset.target;
    const targetTariffsModalForm = document.getElementById(targetId);

    if (targetTariffsModalForm) {
      tariffsModalTogglerButtons.forEach((button) => button.classList.remove('active'));
      event.currentTarget.classList.add('active');

      tariffsModalForms.forEach((item) => item.classList.remove('active'));
      targetTariffsModalForm.classList.add('active');
    }
  });
});

const tariffsModal = document.querySelector('.tariffs__modal');

if (tariffsModal) {
  tariffsModal.addEventListener('click', (event) => {
    const isLayout = event.target === event.currentTarget;
    const isPlusBtn = event.target.classList.contains('tariffs__modal-main-counter-plus');
    const isMinusBtn = event.target.classList.contains('tariffs__modal-main-counter-minus');

    if (isLayout) event.currentTarget.classList.remove('active');

    if (isPlusBtn || isMinusBtn) {
      const modalInfoEl = tariffsModal.querySelector('.tariffs__modal-main-info-value');
      const modalPriceEl = tariffsModal.querySelector('.tariffs__modal-main-price-value');
      const modalCounterEl = tariffsModal.querySelector('.tariffs__modal-main-counter');
      const modalCounterValueEl = tariffsModal.querySelector('.tariffs__modal-main-counter-value');

      if (isPlusBtn) {
        const count = parseInt(modalCounterEl.dataset.value);
        modalCounterEl.dataset.value = count + 1;
      }

      if (isMinusBtn) {
        const count = parseInt(modalCounterEl.dataset.value);
        modalCounterEl.dataset.value = count > 1 ? count - 1 : 1;
      }

      const count = parseInt(modalCounterEl.dataset.value);
      const price = parseInt(modalPriceEl.dataset.price);
      const total = price * count;

      let ending = '';
      const noEndValues = [11, 12, 13, 14];

      if (noEndValues.includes(parseInt(count))) {
        ending = '';
      } else if (parseInt(count) % 10 === 1) {
        ending = 'a';
      } else if (parseInt(count) % 10 >= 2 && parseInt(count) % 10 <= 4) {
        ending = 'ы';
      } else {
        ending = '';
      }

      modalCounterValueEl.innerText = `${count} камер${ending}`;
      modalPriceEl.innerText = total;
    }
  });
}

const tariffsCards = document.querySelectorAll('.tariffs__card');

tariffsCards.forEach((card) => {
  card.addEventListener('click', (event) => {
    const isButton = event.target.classList.contains('tariffs__card-buy-button');

    if (isButton) {
      if (tariffsModal) {
        const titleEl = event.currentTarget.querySelector('.tariffs__card-title');
        const priceEl = event.currentTarget.querySelector('.tariffs__card-buy-button-price');
        const modalInfoEl = tariffsModal.querySelector('.tariffs__modal-main-info-value');
        const modalPriceEl = tariffsModal.querySelector('.tariffs__modal-main-price-value');
        const modalCounterEl = tariffsModal.querySelector('.tariffs__modal-main-counter');
        const modalCounterValueEl = tariffsModal.querySelector(
          '.tariffs__modal-main-counter-value'
        );
        tariffsModal.classList.add('active');

        if (modalCounterEl) {
          modalCounterEl.dataset.value = 1;
        }

        if (titleEl && modalInfoEl) {
          modalInfoEl.innerText = titleEl.textContent.trim();
        }

        if (priceEl && modalPriceEl) {
          modalPriceEl.dataset.price = parseInt(priceEl.textContent.split(' ').join(''));
        }

        if (
          titleEl &&
          modalInfoEl &&
          priceEl &&
          modalPriceEl &&
          modalCounterEl &&
          modalCounterValueEl
        ) {
          const price = modalPriceEl.dataset.price.trim();
          const count = modalCounterEl.dataset.value;
          const total = parseInt(price) * parseInt(count);

          modalPriceEl.innerText = total;

          let ending = '';
          const noEndValues = [11, 12, 13, 14];

          if (noEndValues.includes(parseInt(count))) {
            ending = '';
          } else if (parseInt(count) % 10 === 1) {
            ending = 'a';
          } else if (parseInt(count) % 10 >= 2 && parseInt(count) % 10 <= 4) {
            ending = 'ы';
          } else {
            ending = '';
          }

          modalCounterValueEl.innerText = `${count} камер${ending}`;
        }
      }
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

const tariffsPromoEls = document.querySelectorAll('.tariffs__modal-main-form-promo');

tariffsPromoEls.forEach((tariffsPromo) => {
  const input = tariffsPromo.querySelector('.tariffs__modal-main-form-promo-input');
  const button = tariffsPromo.querySelector('.tariffs__modal-main-form-promo-button');


  if (input && button) {
    input.addEventListener('input', (event) => {
      const value = event.currentTarget.value;
      button.disabled = value.length <= 0;
    });
  }
});
