let switchMode = document.querySelector('.switchMode');

switchMode.addEventListener('click', (e) => {
  let body = document.querySelector('.body');
  body.classList.toggle('light-mode');
});


// --------------------- Dropdown ------------>

let popUp = document.querySelectorAll('.pop-up');
let btnPopup = document.querySelectorAll('.list');

document.addEventListener('click', (e) => {
  let target = e.target;
  if (target.closest('.list')) {
    popUp.forEach(item => {
      item.classList.remove('visible');
    });
    if (target.closest('.list').querySelector('.pop-up') !== null) {
      console.log(1);
      target.closest('.list').querySelector('.pop-up').classList.toggle('visible');
    }
  } else {
    popUp.forEach(item => {
      item.classList.remove('visible');
    })
  }
})