const resultContainer = document.querySelector(".result");

function getNameOfDay(day) {
  const days = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
  return days[day]
}

function getNameOfMonth(month) {
  const months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
  return months[month];
}

function zeroToLeft(date) {
  return date >= 10 ? date : `0${date}`
}

const date = new Date()

const day   = getNameOfDay(date.getDay())
const numberDay = date.getDate()
const month = getNameOfMonth(date.getMonth())
const year  = date.getFullYear()
const hours  = zeroToLeft(date.getHours())
const minutes  = zeroToLeft(date.getMinutes())

resultContainer.innerHTML = 
  `${day}, ${numberDay} de ${month} de ${year} <br> ${hours}:${minutes}`