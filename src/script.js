// script.js
function greet() {
    alert("Hello from the external JavaScript file!");
}




/* document.querySelector('.coldplay').addEventListener('click', function () {
    document.querySelector('.audio').play();
    document.querySelector('.ram').innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="full" height="full" fill="white" class="bi bi-pause-circle-fill" viewBox="0 0 16 16">
    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.25 5C5.56 5 5 5.56 5 6.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C7.5 5.56 6.94 5 6.25 5m3.5 0c-.69 0-1.25.56-1.25 1.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C11 5.56 10.44 5 9.75 5"/>
  </svg>`
    document.querySelector('.currentsong').src = 'coldplay.jpeg'
});*/
let currentsong = null;
function songPlayAccordingly(nameOfTheDiv, whichAudio, imageOfTheSong) {

    
    document.querySelector(nameOfTheDiv).addEventListener('click', function () {

      if (currentsong===null){
        document.querySelector(whichAudio).play();
      }
      else{
        document.querySelector(currentsong).pause();
        document.querySelector(whichAudio).play();
      }
      currentsong=whichAudio;
        /*document.querySelector(whichAudio).play();*/
        document.querySelector('.ram').innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="full" height="full" fill="white" class="bi bi-pause-circle-fill" viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.25 5C5.56 5 5 5.56 5 6.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C7.5 5.56 6.94 5 6.25 5m3.5 0c-.69 0-1.25.56-1.25 1.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C11 5.56 10.44 5 9.75 5"/>
          </svg>`


        document.querySelector('.songdetails').classList.remove('hidden')
        document.querySelector('.currentsong').src = imageOfTheSong
        document.querySelector('.currentsong').style.width = '100%'
        document.querySelector('.currentsong').style.height = '100%'
       /* document.querySelector('.ram').addEventListener('click', function () {

            let audio = document.querySelector(whichAudio);

            if (audio.paused) {
                audio.play()
                document.querySelector('.ram').innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="full" height="full" fill="white" class="bi bi-pause-circle-fill" viewBox="0 0 16 16">
        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.25 5C5.56 5 5 5.56 5 6.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C7.5 5.56 6.94 5 6.25 5m3.5 0c-.69 0-1.25.56-1.25 1.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C11 5.56 10.44 5 9.75 5"/>
      </svg>`;
            }
            else {
                audio.pause()
                document.querySelector('.ram').innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="full" height="full" fill="white"
            class="bi bi-play-circle-fill" viewBox="0 0 16 16">
            <path
                d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814z" />
        </svg>`;
            }


        });*/

    });
}

songPlayAccordingly('.coldplay', '.audio', 'coldplay.jpeg');
songPlayAccordingly('.judwaa', '.hero', 'pritam.jpeg');




document.querySelector('.ram').addEventListener('click', function () {
    document.querySelector('.songdetails').classList.remove('hidden')
    // Toggle slide-in and slide-out
});

document.querySelector('.cross').addEventListener('click', function () {
    document.querySelector('.songdetails').classList.add('hidden')
    // Toggle slide-in and slide-out
});

/*document.querySelector('.ram').addEventListener('click', function () {

    let audio = document.querySelector('.audio');

    if (audio.paused) {
        audio.play()
        document.querySelector('.ram').innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="full" height="full" fill="white" class="bi bi-pause-circle-fill" viewBox="0 0 16 16">
    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.25 5C5.56 5 5 5.56 5 6.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C7.5 5.56 6.94 5 6.25 5m3.5 0c-.69 0-1.25.56-1.25 1.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C11 5.56 10.44 5 9.75 5"/>
  </svg>`;
    }
    else {
        audio.pause()
        document.querySelector('.ram').innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="full" height="full" fill="white"
        class="bi bi-play-circle-fill" viewBox="0 0 16 16">
        <path
            d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814z" />
    </svg>`;
    }

    document.querySelector('.currentsong').src = 'coldplay.jpeg'


    document.querySelector('.currentsong').style.width = '100%'
    document.querySelector('.currentsong').style.height = '100%'

});*/



