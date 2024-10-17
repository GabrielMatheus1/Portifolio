const btn = document.querySelectorAll('.info-span');
const close = document.querySelectorAll('.close-span');
const fundo = document.querySelectorAll('.fundo-span');

btn.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    fundo[index].style.display = 'flex';
  });
});

close.forEach((close, index) => {
  close.addEventListener('click', () => {
    fundo[index].style.display = 'none';
  });
});

