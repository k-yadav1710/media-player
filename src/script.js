// script.js
function greet() {
    alert("Hello from the external JavaScript file!");
}


 

console.log("JavaScript is linked correctly!");
document.querySelector('.ram').addEventListener('click', function() {
    document.querySelector('.songdetails').classList.remove('hidden')
     // Toggle slide-in and slide-out
});