var i=6


while(i>=0){
document.querySelectorAll("button")[i].addEventListener("click", function(){
  this.style.color="yellow";
 
  var p=this.innerHTML;
  console.log(p);
  newMethod(p);
  addAnimation(p);
  this.style.color="red";

  /* if(p==="w"){
    this.style.color="red";
    var audio= new Audio("sounds/crash.mp3");
    audio.play();
    this.style.color="pink";
  }
  else if(p==="a"){
    this.style.color="blue";
    var audio= new Audio("sounds/kick-bass.mp3");
        audio.play();
  }
  else if(p==="s"){
    this.style.color="green";
    var audio= new Audio("sounds/snare.mp3");
        audio.play();
  }
  else if(p==="d"){
    this.style.color="purple";
    var audio= new Audio("sounds/tom-1.mp3");
        audio.play();
  }
  else if(p==="j"){
    this.style.color="red";
    var audio= new Audio("sounds/tom-2.mp3");
        audio.play();
  }
  else if(p==="k"){
    this.style.color="yellow";
    var audio= new Audio("sounds/tom-3.mp3");
        audio.play();
  }
  else if(p==="l") {
    this.style.color="white";
    var audio= new Audio("sounds/tom-4.mp3");
        audio.play();
  }
  else{
    alert("Hello world");
  } */
  
  /*if(document.querySelectorAll("button")[0].onclick()){
    alert("hey");

  }
  else if(document.querySelectorAll("button")[1].click()){
    alert("sat");

  }else{
    alert("sun");
  }*/

  
    /*if (i=6){
        var audio= new Audio("sounds/crash.mp3");
    audio.play();
    }
    else if(i=5){
        var audio= new Audio("sounds/kick-bass.mp3");
        audio.play();
    }
    else if(i=4){
        var audio= new Audio("sounds/snare.mp3");
        audio.play(); 
    }
    else {
    var audio= new Audio("sounds/tom-"+(i+1)+".mp3");
    audio.play();}*/
});
i--;
}

document.addEventListener("keydown", function (){
  /* alert("Hello world") */
  console.log(event);
  
  console.log(event.key);
  newMethod(event.key);
  addAnimation(event.key);
  
});

function newMethod(p){
  if(p==="w"){
    /* this.style.color="red"; */
    var audio= new Audio("sounds/crash.mp3");
    audio.play();
    /* this.style.color="pink"; */
  }
  else if(p==="a"){
   /*  this.style.color="blue"; */
    var audio= new Audio("sounds/kick-bass.mp3");
        audio.play();
  }
  else if(p==="s"){
   /*  this.style.color="green"; */
    var audio= new Audio("sounds/snare.mp3");
        audio.play();
  }
  else if(p==="d"){
   /*  this.style.color="purple"; */
    var audio= new Audio("sounds/tom-1.mp3");
        audio.play();
  }
  else if(p==="j"){
   /*  this.style.color="red"; */
    var audio= new Audio("sounds/tom-2.mp3");
        audio.play();
  }
  else if(p==="k"){
   /*  this.style.color="yellow"; */
    var audio= new Audio("sounds/tom-3.mp3");
        audio.play();
  }
  else if(p==="l") {
   /*  this.style.color="white"; */
    var audio= new Audio("sounds/tom-4.mp3");
        audio.play();
  }
  else{
    alert("Hello world");
  }

}

function addAnimation(p){
  document.querySelector("."+p).classList.toggle("pressed");

  /* setTimeout( function() {
    document.querySelector("."+p).style.color="pink";
  },100);
   */

  setTimeout( function() {
    document.querySelector("."+p).classList.toggle("pressed");
    document.querySelector("."+p).style.color="black";
  },90);
  /* alert("You clicked "+p); */
 /*  document.querySelector("."+p).classList.remove("pressed"); */
 setTimeout( function() {
  document.querySelector("."+p).style.color="#da0463";
},1110);

}

