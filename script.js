


const toggle=document.querySelector('#toggle')
const close=document.querySelector('#close')
const open=document.querySelector('#open')
const modal=document.querySelector('#modal')
const name1=document.querySelector('#name')
const submit=document.querySelector('#aa')
const div33=document.querySelector('.div333')
var s=false;


toggle.addEventListener('click',()=>
document.body.classList.toggle('show-nav')
);

open.addEventListener('click',()=>modal.classList.add('show-modal'))

close.addEventListener('click',()=>modal.classList.remove('show-modal'))



window.addEventListener('click',e=>{
    if(e.target!==open){
        if(modal.contains(e.target)){
            return
        }
        else{
            modal.classList.remove('show-modal')
        }
    }
})





var myInput = document.getElementById("password");
var myInput2 = document.getElementById("password2");



var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");

// When the user clicks on the password field, show the message box
myInput.onfocus = function() {
  document.getElementById("message").style.display = "block";
}

// When the user clicks outside of the password field, hide the message box
myInput.onblur = function() {
  document.getElementById("message").style.display = "none";
}

// When the user starts to type something inside the password field
myInput.onkeyup = function() {
  // Validate lowercase letters
  var lowerCaseLetters = /[a-z]/g;
  if(myInput.value.match(lowerCaseLetters)) {  
    letter.classList.remove("invalid");
    letter.classList.add("valid");
    var q=true;
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
    q=false

  }
  
  // Validate capital letters
  var upperCaseLetters = /[A-Z]/g;
  if(myInput.value.match(upperCaseLetters)) {  
    capital.classList.remove("invalid");
    capital.classList.add("valid");
    var w=true;
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
    w=false

  }

  // Validate numbers
  var numbers = /[0-9]/g;
  if(myInput.value.match(numbers)) {  
    number.classList.remove("invalid");
    number.classList.add("valid");
    var u=true;
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
    u=false
  }
  
  // Validate length
  if(myInput.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
    var o=true;
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
    o=false
  }
  myInput2.onkeyup = function() {
 

    if(myInput2.value!=myInput.value){
      document.querySelector('.div22').style.display="block"
    }
    else{
      document.querySelector('.div22').style.display="none"
      if(w&&o&&u&&q&&s){
    
        submit.removeAttribute('disabled');
        
        submit.style.backgroundColor=" #be2edd"
        submit.addEventListener('click',()=>{
          modal.classList.remove('show-modal')
          div33.innerHTML="Register Success"
          div33.classList.add('div33')
          setTimeout(function(){div33.remove();},4000)
          
        })
       
    
     
    }
    }
   
    
   }
    
}


  




name1.addEventListener('keyup',()=>{
    var t=name1.value
 
    if(+t[t.length-1]>=0){
        document.querySelector('.div3').style.display="block"
      
         
    }else{
        document.querySelector('.div3').style.display="none"
        this.s=true;
        
        
    }
    
})




       
    



