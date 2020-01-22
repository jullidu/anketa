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