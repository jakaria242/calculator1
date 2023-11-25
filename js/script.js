




let fstvalue = document.querySelector("#fstvalue")
let sndvalue = document.querySelector("#sndvalue")
let result = document.querySelector("#trdvalue")


let plus = document.querySelector(".plus")
let mainus = document.querySelector(".mainus")
let gun = document.querySelector(".gun")
let dibaided = document.querySelector(".dibaided")
let bagsesh = document.querySelector(".bagsesh")
let acc = document.querySelector(".AC")
let del = document.querySelector(".del")


plus.addEventListener("click", function(){
    let num1 = parseFloat(fstvalue.value);
    let num2 = parseFloat(sndvalue.value);

   if(!isNaN(num1) && !isNaN(num1)){
     result.value = num1 + num2;
     fstvalue.value = ""
     sndvalue.value = ""
   }else{
      result.value = "invalit number"
     fstvalue.value = ""
     sndvalue.value = ""
   }

})
mainus.addEventListener("click", function(){
    let num1 = parseFloat(fstvalue.value);
    let num2 = parseFloat(sndvalue.value);

   if(!isNaN(num1) && !isNaN(num1)){
     result.value = num1 - num2;
     fstvalue.value = ""
     sndvalue.value = ""
   }else{
      result.value = "invalit number"
     fstvalue.value = ""
     sndvalue.value = ""
   }

})
gun.addEventListener("click", function(){
    let num1 = parseFloat(fstvalue.value);
    let num2 = parseFloat(sndvalue.value);

   if(!isNaN(num1) && !isNaN(num1)){
     result.value = num1 * num2;
     fstvalue.value = ""
     sndvalue.value = ""
   }else{
      result.value = "invalit number"
     fstvalue.value = ""
     sndvalue.value = ""
   }

})
dibaided.addEventListener("click", function(){
    let num1 = parseFloat(fstvalue.value);
    let num2 = parseFloat(sndvalue.value);

   if(!isNaN(num1) && !isNaN(num1)){
     result.value = num1 / num2;
     fstvalue.value = ""
     sndvalue.value = ""
   }else{
      result.value = "invalit number"
     fstvalue.value = ""
     sndvalue.value = ""
   }

})
bagsesh.addEventListener("click", function(){
    let num1 = parseFloat(fstvalue.value);
    let num2 = parseFloat(sndvalue.value);

   if(!isNaN(num1) && !isNaN(num1)){
     result.value = num1 % num2;
     fstvalue.value = ""
     sndvalue.value = ""
   }else{
      result.value = "invalit number"
     fstvalue.value = ""
     sndvalue.value = ""
   }

})

acc.addEventListener("click", function () {
    fstvalue.value = "";
    sndvalue.value = "";
    result.value = "";
})
del.addEventListener("click", function () {
   let currectvalu = result.value;
   result.value = currectvalu.slice(0,-1)
})



let darkmode = document.querySelector(".darkmode")

 let body = document.querySelector("body")



darkmode.addEventListener("click", function(){
    body.classList.toggle("colormode")
})
