import Notiflix from 'notiflix';

const refs = {
  formEl: document.querySelector('.form'),
  buttonEl: document.querySelector('button'),
  inputNameEl: document.querySelector('input[type="text"]'),
};

refs.formEl.addEventListener('submit', onFormSubmit);

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

function onFormSubmit(e) {
  e.preventDefault();

  refs.buttonEl.setAttribute('disabled', '');
  const {
    elements: { 'user-name': userNameInput, delay, step, amount },
  } = e.currentTarget;

  const delayValue = Number(delay.value);
  const stepValue = Number(step.value);
  const amountValue = Number(amount.value);

  let promiseDelay = delayValue;
  let promiseCount = 1;

  for (let i = 0; i < amountValue; i += 1) {
    createPromise(promiseCount, promiseDelay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`,
          { clickToClose: true }
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`,
          { clickToClose: true }
        );
      })
      .finally(() => {
        refs.buttonEl.removeAttribute('disabled');
        refs.formEl.reset();
      });
    promiseDelay += stepValue;
    promiseCount += 1;
  }
}
