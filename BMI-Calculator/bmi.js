var heightField = document.querySelector(".heightField");
var weightField = document.querySelector(".weightField");
let resultText = document.querySelector(".resultText");



function calculate(){
   let height = heightField.value;
   let weight = weightField.value;
   let bmi = weight/((height/100)*(height/100));
   
   resultText.innerHTML = `Your BMI = ${bmi.toFixed(2)}`;


//    bmi = bmi.toFixed(2);
   
//    console.log(bmi);
}