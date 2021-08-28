const colors = [
    '#ecfdac',
    '#f9bc7d',
    '#a3b7ff',
    '#b897e9',
    '#f38bf5'
]

function random() {
    return Math.floor(Math.random() * 5)
}


const exchangeCards = $$('.exchange-icon');
const statistics = $$('.statistic-icon');
const statisticBars = $$('.statistic-bar');
const schedules = $$('.user-schedule');


exchangeCards.forEach(element => {
     element.style.backgroundColor = colors[random()];
});

for (let index = 0; index<statistics.length;index++){
    let thisColor = colors[random()];
    statistics[index].style.backgroundColor = thisColor;
    statisticBars[index].style.backgroundColor = thisColor;
}

schedules.forEach(value => {
    value.style.backgroundColor = colors[Math.floor(Math.random() * 5) + 1];
})

