const form = document.querySelector('form')
form.addEventListener('submit' , function (event){
event.preventDefault()
const height = parseInt(document.querySelector('#Height').value)
const weight = parseInt(document.querySelector('#Weight').value)
const result = document.querySelector('#result')
if(height === '' || height < 0 || isNaN(height)){
result.innerHTML = `Please Give valid height ${height}`

}
else if(weight === '' || weight < 0 || isNaN(weight)){
    result.innerHTML = `Please Give valid weight ${weight}`
    }
    else {
        const BMI = (weight / (height*height)).toFixed(2)
        result.innerHTML = `<span> Your BMI is  ${BMI} </span>`
        switch(true){
      case(BMI < 18):
      result.innerHTML = `You are UnderWeight having ${BMI}`
      break
      case(BMI > 18 && BMI == 24):
      result.innerHTML = `You have Normalweight with ${BMI}`
      break
      case(BMI <= 24):
      result.innerHTML = `You have Normalweight with ${BMI}`
      break
      default:
        break

        }
    }

})