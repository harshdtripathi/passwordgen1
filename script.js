let newPassword=document.querySelector("[datapassworddisplay]");
let copyMessage=document.querySelector("[data-copyMsg]");
let passwordLen=document.querySelector("[data-length]");
let datalen=document.querySelector("[ data-lengthslider]");
let uppercasecheck=document.querySelector("#uppercase");
let lowercasecheck=document.querySelector("#lowercase");
let numberscheck=document.querySelector("#numbers");
let symbolscheck=document.querySelector("#symbols");
let genrateBtn=document.querySelector(".generateButton");
let copyBtn=document.querySelector("[data-copyBtn]");
let colorstrngth=document.querySelector(".colorchange");
let allcheckBox=document.querySelectorAll("input [type=checkbox]");

let newLength="10";
let randompassword="";
let checkCount=0;
let symbolarray="✗↳$¢❤₿✓▲Ð⚆♕♝%^<>*@";


function handleSlide() {
    datalen.value=newLength;
    passwordLen.innerText=newLength; 

}



function setcolorchange(color) {
  colorstrngth.style.backgroundColor = color;
  colorstrngth.style.boxShadow = `0 0 10px ${color}`;
}

function setIndicator(color) {
  setcolorchange(color);
}
function randomvalue(min,max) {
     let rvalue=Math.floor(Math.random()*(max-min)+min); 
     return rvalue; 




}
function generateRandomNumber() {
    return randomvalue(0,9);
}
function generateLowercase() {
      return String.fromCharCode(randomvalue(97,123));
}
function generateUppercase() {
    return String.fromCharCode(randomvalue(65,91));
}
  function generateSymbol() {
    let value = randomvalue(0, symbolarray.length);
       return symbolarray.charAt(value);
  }


  
 async function copycontent(){
     // navigator.clipboard.righttext ek method hai text ko colpy krne ke liye
     try{
        await navigator.clipboard.writeText(newPassword.placeholder)
        copyMessage.innerText="copied";
       

     }
     catch(e)
     {
        copyMessage.innerText="Failed";


     }
     // to make copy wala span visible
     copyMessage.classList.add("active");
     setTimeout(() => {
        copyMessage.classList.remove("active");
     }, 2000);
 

 }

 copyBtn.addEventListener('click',()=>{
   if(newPassword.placeholder)
    console.log("hello");
       copycontent();
       
});
 datalen.addEventListener('input',(e)=>{
    newLength=e.target.value;
    handleSlide();
 });
  

 function handleCheckBoxChange()
 {
    checkCount=0;
    allcheckBox.forEach((checkbox)=>{
        if(checkbox.checked)
            checkCount++;
    });
 }
 allcheckBox.forEach((checkbox)=>{
    checkbox.addEventListener('change',handleCheckBoxChange);
 })



 // work according to  umber if check count
function fillpassword() {
  randompassword="";

  

  // for(let i=0; i<newLength;i++)
  //   {
  
  // if(uppercasecheck.checked)
  //   {
  //     randompassword=randompassword+generateUppercase();
  //   }
  //   if( lowercasecheck.checked)
  //     {
  //       randompassword=randompassword+generateLowercase();
        
  //     }
  //     if(numberscheck.checked)
  //       {
  //         randompassword=randompassword+generateRandomNumber();
  //       }
  //       if(symbolscheck.checked)
  //         {
  //           randompassword=randompassword+generateSymbol();
  //         }
  //   }

  let generators=[];
  if(uppercasecheck.checked)
    {
      generators.push(generateUppercase());

    }
    if( lowercasecheck.checked)
          {
           generators.push(generateLowercase());
            
          }

          if( numberscheck.checked)
            {
             generators.push(generateRandomNumber());
              
            }
            if( symbolscheck.checked)
              {
               generators.push(generateSymbol());
                
              }
               for(let i=0;i<generators.length;i++)
                {
                  randompassword=randompassword+generators[i];
                }
                // remaining adddition
                console.log('chal rha hai kya');
                for(let j=0;j<newLength-generators.length;j++ )
                  {
                    console.log('tumbhi chal rhe kya');
                    let randIndex= generateRandomNumber(0,15);
                    randompassword=randompassword+randIndex;

                  }
                  randompassword = randompassword.split('').sort(() => Math.random() - 0.5).join('');
    
  

    
      newPassword.placeholder=randompassword;
      setStrengthIndicator();
    


}
function setStrengthIndicator() {
  let strength = checkStrength();
  if (strength <= 1) {
      setIndicator("#FF0000"); // Red
  } else if (strength == 2) {
      setIndicator("#FFFF00"); // Yellow
  } else {
      setIndicator("#00FF00"); // Green
  }
}

function checkStrength() {
  let strength = 1;
  if (uppercasecheck.checked) strength++;
  if (lowercasecheck.checked) strength++;
  if (numberscheck.checked) strength++;
  if (symbolscheck.checked) strength++;
  return strength;
}
handleSlide();
setIndicator("#FFFF00");


 




  
  
  

  




