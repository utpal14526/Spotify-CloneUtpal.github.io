
//intialize 

let songIndex=0;
let audioElement=new Audio('0.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myprogressBar');
let masterSongName=document.getElementById('masterSongName');
let gif=document.getElementById('gif');
let songItems=Array.from(document.getElementsByClassName('songItem'));

var totalsongs=7;

let songs=[
    {songName:"Let me love you-Justin bieber" ,filepath:"0.mp3",coverpath:"cover1.jpg"},
    {songName:"Tair Paatge-Gulzarr channiwala" ,filepath:"1.mp3",coverpath:"cover2.jpg"},
    {songName:"Call Aundi-Honey Singh" ,filepath:"2.mp3",coverpath:"cover3.jpg"},
    {songName:"Bhool Bhulaiyaa 2 track" ,filepath:"3.mp3",coverpath:"cover4.jpg"},
    {songName:"Shooter -Sapna Choudhary" ,filepath:"4.mp3",coverpath:"cover5.jpg"},
    {songName:" Levels - Sidhu Moose Wala" ,filepath:"5.mp3",coverpath:"cover6.jpg"},
    {songName:" The Last Ride - Sidhu Moose Wala" ,filepath:"6.mp3",coverpath:"cover7.jpg"},
]

songItems.forEach((element,i)=>{

    element.getElementsByTagName('img')[0].src=songs[i].coverpath;
    element.getElementsByClassName('songName')[0].innerHTML=songs[i].songName;
});


const makeallplays=()=>{
   console.log("change");
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
   
}//to change all pause button || to pause >


//handle play/pause click
masterPlay.addEventListener('click',()=>{
    
    if(audioElement.paused || audioElement.currentTime<=0){
         audioElement.play();
         masterPlay.classList.remove('fa-play-circle');
         masterPlay.classList.add('fa-pause-circle');
         var a=songIndex;
         document.getElementById(a).classList.remove('fa-play-circle');
         document.getElementById(a).classList.add('fa-pause-circle');

         gif.style.opacity="1";
    }
    else{
        makeallplays();
        
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity="0";
    }
})

//listen to Events

audioElement.addEventListener('timeupdate',()=>{
  
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);

    myProgressBar.value=progress;
    
});


myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
})






Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
      
       
        if(audioElement.paused || audioElement.currentTime<=0){
            makeallplays();
   
            e.target.classList.remove('fa-play-circle');
            e.target.classList.add('fa-pause-circle');
            songIndex=parseInt(e.target.id);
            audioElement.src=`${songIndex}.mp3`;
            audioElement.play();
            gif.style.opacity="1";
            audioElement.currentTime=0;
            masterPlay.classList.remove('fa-play-circle');
            masterPlay.classList.add('fa-pause-circle');
            masterSongName.innerHTML=songs[songIndex].songName;
        }

        else if((!audioElement.paused || !audioElement.currentTime<=0) && parseInt(e.target.id)==songIndex ){
        
            makeallplays();
            masterPlay.classList.remove('fa-pause-circle');
            masterPlay.classList.add('fa-play-circle');
            audioElement.pause();
            gif.style.opacity="0";
           
        }
        
        else if((!audioElement.paused || !audioElement.currentTime<=0) && parseInt(e.target.id)!=songIndex ){
            makeallplays();
            e.target.classList.remove('fa-play-circle');
            e.target.classList.add('fa-pause-circle');
            songIndex=parseInt(e.target.id);
            masterPlay.classList.remove('fa-play-circle');
            masterPlay.classList.add('fa-pause-circle');
            songIndex=parseInt(e.target.id);
            audioElement.src=`${songIndex}.mp3`;
            audioElement.play();
            gif.style.opacity="1";
            masterSongName.innerHTML=songs[songIndex].songName;
        }

    })
})

document.getElementById('next').addEventListener('click',()=>{

    if(songIndex>(totalsongs-2)){
        songIndex=0;
    }
    else{
        songIndex+=1;
    }
  

    audioElement.src=`${songIndex}.mp3`;
    audioElement.play();
    gif.style.opacity="1";
    audioElement.currentTime=0;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    masterSongName.innerHTML=songs[songIndex].songName;
    var a=songIndex;
    makeallplays();
    document.getElementById(a).classList.remove('fa-play-circle');
    document.getElementById(a).classList.add('fa-pause-circle');

})



document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0;
    }
    else{
        songIndex-=1;
    }

    audioElement.src=`${songIndex}.mp3`;
    audioElement.play();
    gif.style.opacity="1";
    audioElement.currentTime=0;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    masterSongName.innerHTML=songs[songIndex].songName;
    var a=songIndex;
    makeallplays();
    document.getElementById(a).classList.remove('fa-play-circle');
    document.getElementById(a).classList.add('fa-pause-circle');
})







