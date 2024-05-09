
var button = document.querySelector('input[value="Verificar"]')
button.addEventListener("click", (event) => {
  getAgeAndShowImage(event)
})

function getAgeAndShowImage() {
  const date = new Date()
  const year = date.getFullYear()
  const choseYear = document.querySelector('.age-txt')
  const result = document.querySelector('.txt-result')
  const ageInput = document.querySelector('.age-txt')
  const age = year - Number(choseYear.value)
  const genderRatio = document.getElementsByName('gen-ratio')
  let img = document.querySelector('.img')
  let imgBox = document.querySelector('.img-box')
  let gender = ''

  if (choseYear.value.length == 0 || Number(choseYear.value) > year) {
    result.classList.add('txt-error')
    result.removeAttribute('style')
    ageInput.classList.add('border-error')
    result.innerHTML = 'Por favor, coloque um ano válido'
  } else {
    if(genderRatio[0].checked){
      if (age >= 0 && age <= 12) {
        gender = 'criança'
        img.src = 'images/boy.jpg'
        imgBox.style.display = 'block'
      } else if (age < 21) {
        gender = 'jovem'
        img.src = 'images/youngmale.jpg'
        imgBox.style.display = 'block'
      } else if (age < 60) {
        gender = 'adulto'
        img.src = 'images/adultmale.jpg'
        imgBox.style.display = 'block'
      } else {
        gender = 'idoso'
        img.src = 'images/eldermale.jpg'
        imgBox.style.display = 'block'
      }
        
    } else if (genderRatio[1].checked) {
      gender = 'mulher'
      if (age >= 0 && age <= 12) {
        gender = 'criança'
        img.src = 'images/girl.jpg'
        imgBox.style.display = 'block'
       } else if (age < 21) {
        gender = 'jovem'
        img.src = 'images/youngfemale.jpg'
        imgBox.style.display = 'block'
       } else if (age < 60) {
        gender = 'adulta'
        img.src = 'images/adultfemale.jpg'
        imgBox.style.display = 'block'
       } else {
        gender = 'idosa'
        img.src = 'images/elderfemale.jpg'
        imgBox.style.display = 'block'
       }
    }
    result.classList.remove('txt-error')
    ageInput.classList.remove('border-error')
    result.innerHTML = `Idade calculada: Você é ${gender} e tem ${age} anos.`
    result.style.color = '#b6f0a4'
    
  }
 
  
  

}

// para remover um atribuo, utilizar removeAttribute('')

// ATENÇÃO HUDSON, CONST NÃO MUDAM SEU CARAMUJINHO, QUANDO FOR MUDAR UTILIZE LET

// adicionar classes a um elemento -> classList.add('')


