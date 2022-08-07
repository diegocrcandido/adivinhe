let numberRandom = Math.round(Math.random() * 10)
let xAttempts = 1
let btnTry = document.querySelector("#btnTry")
let btnReset = document.querySelector("#btnReset")
const screen1 =  document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")

btnTry.addEventListener('click', handleClick)
btnReset.addEventListener('click', endClick)
document.addEventListener('keydown', function(e){
  if(e.key == 'Enter'){
    handleClick()
  }
})

function handleClick(event){
  event.preventDefault()

  const inputNumber = document.querySelector("#inputNumber")

  if(Number(inputNumber.value) == numberRandom){
  toggleScreen()
  document.querySelector(".screen2 h2").innerText = `Acertou em ${xAttempts} alternativas`
  } 
  inputNumber.value = ""
  xAttempts++ 
}

function endClick(end){
  toggleScreen()
  xAttempts = 1
}

function toggleScreen(){
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}
