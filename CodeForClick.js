const btn = document.getElementById('btn');
const upgradeBtn = document.getElementById('upgradebtn')
let numberClicks = 0;
let clickMutlipleir = 1
let multipleirCost = 10

btn.addEventListener('click', function handleClick() {
    numberClicks = numberClicks + clickMutlipleir
    btn.textContent = `Button Clicked ${numberClicks}`;
  });

upgradeBtn.addEventListener('click', function handleClick() {
    if (numberClicks >= multipleirCost){
        clickMutlipleir = clickMutlipleir + 1
        multipleirCost = multipleirCost * 1.5
        multipleirCost = Math.round(multipleirCost)
        numberClicks = 0
        btn.textContent = `Button Clicked ${numberClicks}`
        upgradeBtn.textContent = `Upgrade for : ${multipleirCost}`
    }

})