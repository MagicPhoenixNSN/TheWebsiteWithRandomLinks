const btn = document.getElementById('btn');
let numberClicks = 0;
let clickMutlipleir = 1

btn.addEventListener('click', function handleClick() {
    numberClicks = numberClicks + clickMutlipleir
    btn.textContent = `Button clicked ${numberClicks}`;
  });

