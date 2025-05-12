console.log("Welcome to Spotify" );


//Intialize the variables
let songIndex = 0;
let audioElement = new Audio('0.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));


let songs =[

    {songName:"Salame-e-ishq",filePath:"songs/0.mp3",coverPath:"cover/1.jpg"},
    {songName:"Salame-e-ishq",filePath:"songs/2.mp3",coverPath:"cover/2.jpg"},
    {songName:"Salame-e-ishq",filePath:"songs/3.mp3",coverPath:"cover/3.jpg"},
    {songName:"Salame-e-ishq",filePath:"songs/4.mp3",coverPath:"cover/4.jpg"},
    {songName:"Salame-e-ishq",filePath:"songs/5.mp3",coverPath:"cover/5.jpg"},
    {songName:"Salame-e-ishq",filePath:"songs/6.mp3",coverPath:"cover/6.jpg"},
    {songName:"Salame-e-ishq",filePath:"songs/7.mp3",coverPath:"cover/7.jpg"},
    {songName:"Salame-e-ishq",filePath:"songs/8.mp3",coverPath:"cover/8.jpg"},
    {songName:"Salame-e-ishq",filePath:"songs/9.mp3",coverPath:"cover/9.jpg"},
    {songName:"Salame-e-ishq",filePath:"songs/10.mp3",coverPath:"cover/10.jpg"},
]


songsItems.forEach((element,i)=>{
   
    element.getElementsByTagName("img")[0].src= songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText= songs[i].songName;



});
//audioElement.play();

//Handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-paused-circle');
        gif.style.opacity=1;
    }

    else{
    audioElement.pause();
    masterPlay.classList.remove('fa-pause-circle');
    masterPlay.classList.add('fa-play-circle');
    gif.style.opacity=0;

    }


})




//Listen to Events
audioElement.addEventListener('timeupdate',()=>{
   

    //update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
   
    myProgressBar.value = progress;

})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value* audioElement.duration/100;
})

const makeAllPlays = ()=>{
   
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
       element.classList.add('fa-pause-circle');


    })
}
Array.from(document.getElementByClassName('songItemPlay').forEach((element)=>{
    element.addEventListener('click',(e)=>{
        console.log(e.target);
        songindex =parseInt(e.target.id);
        makeAllPlays();
       
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src ='songs/$songindex+1}.mp3';
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime =0;
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');


    )

    })
})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=9){
        songIndex =0;
    }
    else{
        songIndex += 1;
    }

    audioElement.src =songs/${songindex + 1}.mp3;
    masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime =0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');



})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex =0;
    }
    else{
        songIndex -= 1;
    }

    audioElement.src ='songs/$songindex+1}.mp3';
    masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime =0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');



})