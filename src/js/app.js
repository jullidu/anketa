import '../style.css'
const data = require('./data.json');


// rendering section personal-data

let fio = document.querySelector('#fio')
fio.innerHTML = data.fio

let year = document.querySelector('#year')
year.innerHTML = data.year

let city = document.querySelector('#city')
city.innerHTML = data.city

let skype = document.querySelector('#skype')
skype.innerHTML = data.skype

let email = document.querySelector('#email')
email.innerHTML = data.email

//rendering checkboxes

let elem = document.querySelector('#checkbox')
let htmlStr = '';

for (let i = 0; i < data.checkbox.length; i++) {
  htmlStr += `<label class="checkbox-container"><input type="checkbox" ${data.checkbox[i].checked ? "checked" : ""} 
    name="skill"> <span class="checkmark"></span><span class = "skill">${data.checkbox[i].name}</span></label>`

}
elem.innerHTML = htmlStr

//setting slider value

let myValue = document.querySelector('#myRange')
myValue.value = data.level


//slider value for mobile

function setSliderSkillLevel(number) {
  if (number < 20) {
    level.innerHTML = 'Не владею'
  } else if (number < 50) {
    level.innerHTML = 'Использую готовые решения'
  } else if (number < 80) {
    level.innerHTML = 'Использую готовые решения и умею их переделывать'
  } else {
    level.innerHTML = 'Пишу сложный JS с нуля'
  }
}

let level = document.querySelector('#slider-skill-level')
let myScore = myValue.value

setSliderSkillLevel(myScore)


myValue.addEventListener('change', (event) => {
  let result = event.target.value
  setSliderSkillLevel(result)
})



//rendering date

let date = document.querySelector('#date')
date.innerHTML = data.date