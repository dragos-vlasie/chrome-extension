function init() {

// let buttonPost = document.getElementById("alfa");

    let highlit  = document.querySelector('.highlight2');
    let highlit1  = document.querySelector('.highlight1');
    theUrl = 'http://192.168.11.86:1880/bathroomstatus';
    fetch(theUrl)
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {
      console.log(myJson.bathroom2);
      if(myJson.bathroom2 ==="open"){
          console.log("it s oppen");
      }else {
        highlit.style.background = "red";
        console.log("something");
      }
      console.log(myJson.bathroom3);
      if(myJson.bathroom3 ==="open"){
          console.log("this is dev open");
      }else {
        highlit1.style.background = "red";
        console.log("this is dev closed");
      }
    });
};

document.addEventListener('DOMContentLoaded', init);

