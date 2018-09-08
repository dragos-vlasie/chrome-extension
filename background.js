console.log("hey you clicked me ")

chrome.browserAction.onClicked.addListener(buttonClicked);


let highlit  = document.querySelector('.highlight2');
let highlit1  = document.querySelector('.highlight1');
theUrl = 'https://demo0563230.mockable.io/bathroom';
fetch(theUrl)
.then(function(response) {
  return response.json();
})
.then(function(myJson) {
 chrome.browserAction.setBadgeBackgroundColor({color:[190, 190, 190, 230]});
  chrome.browserAction.setBadgeText({text:myJson.bathroom2});
});


function buttonClicked() {
console.log("pizde")

        
        };
        
        window.setInterval(function(){
            theUrl = 'https://demo0563230.mockable.io/bathroom';   
fetch(theUrl);
console.log("merge")
          }, 5000);
    