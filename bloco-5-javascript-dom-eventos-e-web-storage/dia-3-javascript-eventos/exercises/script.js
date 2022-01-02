function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');

for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
};
};

createDaysOfTheWeek();

//exercise 1:
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    
function dayCalender (dayList){
    let ulList = document.getElementById('days');
    for (let index = 0; index < dayList.length; index += 1){
        let days = dayList[index];
        let onLi = document.createElement('li');
        onLi.classList.add('day');
        onLi.innerText = days;
        ulList.appendChild(onLi);

        switch (days){
            case 24:
                onLi.classList.add('holiday');
                break;
            case 25:
                onLi.classList.add('holiday');
                onLi.classList.add('friday');
                break;
            case 31:
                onLi.classList.add('holiday');
                break;
            case 4:
                onLi.classList.add('friday');
                break;
            case 11:
                onLi.classList.add('friday');
                break;
            case 18:
                onLi.classList.add('friday');
                break;
        }
    }
}
dayCalender(dezDaysList);

//exercise 2:
function onHoliday (str){
    let button = document.getElementsByClassName('buttons-container')[0];
    let onButton = document.createElement('button');
    onButton.id = 'btn-holiday';
    onButton.innerText = str;
    button.appendChild(onButton);
}
onHoliday('Feriado');

//exercise 3:
let clickP = document.querySelectorAll('.holiday');
clickP.addEventListener("click", function() {
    this.style.backgroundColor = 'white';
});