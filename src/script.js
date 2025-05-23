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
function songPlayAccordingly(nameOfTheDiv, whichAudio, imageOfTheSong ,name ,artist
    ,year
) {


    document.querySelector(nameOfTheDiv).addEventListener('click', function () {

        if (currentsong === null) {
            forwardbutton[forwardcurrentsong].pause();
            document.querySelector(whichAudio).play();
        }
        else {
            currentsong.pause();
            currentsong.currentTime = 0;
            forwardbutton[forwardcurrentsong].pause();
            document.querySelector(whichAudio).play();
        }
        currentsong = document.querySelector(whichAudio);

        /*document.querySelector(whichAudio).play();*/
        document.querySelector('.ram').innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="full" height="full" fill="white" class="bi bi-pause-circle-fill" viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.25 5C5.56 5 5 5.56 5 6.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C7.5 5.56 6.94 5 6.25 5m3.5 0c-.69 0-1.25.56-1.25 1.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C11 5.56 10.44 5 9.75 5"/>
          </svg>`


        document.querySelector('.songdetails').classList.remove('hidden')
        document.querySelector('.currentsong').src = imageOfTheSong
        document.querySelector('.currentsong').style.width = '100%'
        document.querySelector('.currentsong').style.height = '100%'
        document.querySelector( '.a').innerHTML=  `Song name :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${name}`
        document.querySelector( '.b').innerHTML=  `Artist name :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${artist}`
        document.querySelector( '.c').innerHTML=  `Released :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp&nbsp&nbsp&nbsp&nbsp;${year}`



        const progressBar = document.querySelector('.audio-progress-bar');
        const timeDisplay = document.querySelector('.time-display');

        // Event listener for updating the progress bar and time display
        currentsong.addEventListener('timeupdate', function () {
            let progress = (currentsong.currentTime / currentsong.duration) * 100;
            progressBar.value = progress;

            // Update the background color of the progress bar
            progressBar.style.background = `linear-gradient(to right, white ${progress}%, #ddd ${progress}%)`;

            // Update the time display
            let currentTime = formatTime(currentsong.currentTime); // Format current time (in seconds)
            let duration = formatTime(currentsong.duration); // Format total duration
            timeDisplay.textContent = `${currentTime} / ${duration}`;
        });

        // Add an event listener to the progress bar for user interactions
        progressBar.addEventListener('input', function () {
            currentsong.currentTime = (progressBar.value / 100) * currentsong.duration;
        });
       

    });
}
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds < 10 ? '0' + remainingSeconds : remainingSeconds}`;
}

songPlayAccordingly('.coldplay', '.audio', 'coldplay.jpeg' ,'Hymn For The Weekend' , 'Coldplay' , '2015');
songPlayAccordingly('.judwaa', '.hero', '../assest/judwaaimage.jpeg ' ,'I am hero', 'Arijit singh' , '2018');
songPlayAccordingly('.karan', '.karanyaad', '../assest/karanyaad.jpg', 'Karan aujhla', 'My heart', '2019');
songPlayAccordingly('.weekend', '.starboy', '../assest/starboyimage.jpeg' , 'The weekend', 'Starboy' ,'2017' );



let pausevariable = 0;
document.querySelector('.ram').addEventListener('click', function () {

    /*if (currentsong.paused ) {
       currentsong.play();
        document.querySelector('.ram').innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="full" height="full" fill="white" class="bi bi-pause-circle-fill" viewBox="0 0 16 16">
    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.25 5C5.56 5 5 5.56 5 6.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C7.5 5.56 6.94 5 6.25 5m3.5 0c-.69 0-1.25.56-1.25 1.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C11 5.56 10.44 5 9.75 5"/>
  </svg>`;
    }*/

    if (currentsong.paused && !forwardbutton[forwardcurrentsong].paused) {
        forwardbutton[forwardcurrentsong].pause();
        pausevariable = 0;

        document.querySelector('.ram').innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="full" height="full" fill="white"
            class="bi bi-play-circle-fill" viewBox="0 0 16 16">
            <path
                d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814z" />
        </svg>`;
    }
    else if (!currentsong.paused && forwardbutton[forwardcurrentsong].paused) {
        currentsong.pause();
        pausevariable = 1;
        document.querySelector('.ram').innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="full" height="full" fill="white"
        class="bi bi-play-circle-fill" viewBox="0 0 16 16">
        <path
            d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814z" />
    </svg>`;
    }
    else if (currentsong.paused && forwardbutton[forwardcurrentsong].paused && pausevariable === 1) {
        currentsong.play();
        document.querySelector('.ram').innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="full" height="full" fill="white" class="bi bi-pause-circle-fill" viewBox="0 0 16 16">
        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.25 5C5.56 5 5 5.56 5 6.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C7.5 5.56 6.94 5 6.25 5m3.5 0c-.69 0-1.25.56-1.25 1.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C11 5.56 10.44 5 9.75 5"/>
      </svg>`;
    }
    else if (currentsong.paused && forwardbutton[forwardcurrentsong].paused && pausevariable === 0){
        forwardbutton[forwardcurrentsong].play();
        document.querySelector('.ram').innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="full" height="full" fill="white" class="bi bi-pause-circle-fill" viewBox="0 0 16 16">
        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.25 5C5.56 5 5 5.56 5 6.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C7.5 5.56 6.94 5 6.25 5m3.5 0c-.69 0-1.25.56-1.25 1.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C11 5.56 10.44 5 9.75 5"/>
      </svg>`;
    }


    else {
      
     document.querySelector('.ram').innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="full" height="full" fill="white"
    class="bi bi-play-circle-fill" viewBox="0 0 16 16">
    <path
        d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814z" />
</svg>`;
    }

});








/*songPlayAccordingly('.coldplay', '.audio', 'coldplay.jpeg');
songPlayAccordingly('.judwaa', '.hero', 'pritam.jpeg');*/




/*document.querySelector('.ram').addEventListener('click', function () {
    document.querySelector('.songdetails').classList.remove('hidden')
    // Toggle slide-in and slide-out
});*/

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

let firstsong = document.querySelector('.forwardsong1');
let secondsong = document.querySelector('.forwardsong2');
let thirdsong = document.querySelector('.forwardsong3')



let forwardcurrentsong = 0;
let forwardbutton = [firstsong, secondsong, thirdsong];
document.querySelector('.forward').addEventListener('click', function () {

    currentsong.pause();
    forwardbutton[forwardcurrentsong].pause();
    forwardbutton[forwardcurrentsong].currentTime = 0;
    forwardcurrentsong++;
    if (forwardcurrentsong > 2) {
        forwardcurrentsong = 0;
    }
    if(forwardcurrentsong===0){
        document.querySelector('.songdetails').classList.remove('hidden')
        document.querySelector('.currentsong').src = '../assest/despactio.jpeg'

    }
    else if(forwardcurrentsong===1){
        document.querySelector('.songdetails').classList.remove('hidden')
        document.querySelector('.currentsong').src = '../assest/blindinglight.jpeg'

    }

    else if (forwardcurrentsong===2){
        document.querySelector('.songdetails').classList.remove('hidden')
        document.querySelector('.currentsong').src = '../assest/thatstrue.jpeg'

    }

    forwardbutton[forwardcurrentsong].play();
    document.querySelector('.ram').innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="full" height="full" fill="white" class="bi bi-pause-circle-fill" viewBox="0 0 16 16">
        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.25 5C5.56 5 5 5.56 5 6.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C7.5 5.56 6.94 5 6.25 5m3.5 0c-.69 0-1.25.56-1.25 1.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C11 5.56 10.44 5 9.75 5"/>
      </svg>`;

   

});

document.querySelector('.backward').addEventListener('click', function () {

    currentsong.pause();
    forwardbutton[forwardcurrentsong].pause();
    forwardbutton[forwardcurrentsong].currentTime = 0;
    forwardcurrentsong--;
    if (forwardcurrentsong < 0) {
        forwardcurrentsong = 2;
    }
    if(forwardcurrentsong===0){
        document.querySelector('.songdetails').classList.remove('hidden')
        document.querySelector('.currentsong').src = '../assest/despactio.jpeg'

    }
    else if(forwardcurrentsong===1){
        document.querySelector('.songdetails').classList.remove('hidden')
        document.querySelector('.currentsong').src = '../assest/blindinglight.jpeg'

    }

    else if (forwardcurrentsong===2){
        document.querySelector('.songdetails').classList.remove('hidden')
        document.querySelector('.currentsong').src = '../assest/thatstrue.jpeg'

    }
    
    forwardbutton[forwardcurrentsong].play();







})



