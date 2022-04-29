var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/MSSSM-Ignition.jpg') {
      myImage.setAttribute ('src','images/Dreamy-Wind-2.jpg');
    } else {
      myImage.setAttribute ('src','images/MSSSM-Ignition.jpg');
    }
}
var myHeading = document.querySelector('h3');

function setUserName() {
    var myName = prompt('Please enter your name.');
    var result = myName ? myName : 'Kaktus';
    localStorage.setItem('name', result);
    myHeading.textContent = 'Let`s breake this silence, ' + result;
}

  if(!localStorage.getItem('name')) {
  setUserName();
  } 
  else {
   var storedName = localStorage.getItem('name');
   myHeading.textContent = 'Let`s breake this silence, ' + storedName;
  }
 myHeading.onclick = function() {
  setUserName();
}