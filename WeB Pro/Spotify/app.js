//Inializing variables
let masterplay = document.getElementById('masterplay')
let audioelement = new Audio('songs/9.mp3');
let SongIndex = 0;
let myProgressBar = document.getElementById('songbar')
// audioelement.play();

let songs = [
    {songName: "Jeena Jeena" , FileName: 'songs/1.mp3' , cover: 'covers/1.jpg'},
    {songName: "Jeena Jeena" , FileName: 'songs/1.mp3' , cover: 'covers/1.jpg'},
    {songName: "Jeena Jeena" , FileName: 'songs/1.mp3' , cover: 'covers/1.jpg'},
    {songName: "Jeena Jeena" , FileName: 'songs/1.mp3' , cover: 'covers/1.jpg'},
    {songName: "Jeena Jeena" , FileName: 'songs/1.mp3' , cover: 'covers/1.jpg'},
    {songName: "Jeena Jeena" , FileName: 'songs/1.mp3' , cover: 'covers/1.jpg'},
    {songName: "Jeena Jeena" , FileName: 'songs/1.mp3' , cover: 'covers/1.jpg'},
    {songName: "Jeena Jeena" , FileName: 'songs/1.mp3' , cover: 'covers/1.jpg'},
    {songName: "Jeena Jeena" , FileName: 'songs/1.mp3' , cover: 'covers/1.jpg'},
    {songName: "Jeena Jeena" , FileName: 'songs/1.mp3' , cover: 'covers/1.jpg'},
]

//Handling play pause clicks
masterplay.addEventListener('click' , ()=>{
    if( audioelement.paused || audioelement.currentTime <=0)
        {
            audioelement.play();
            masterplay.classList.remove('fa-circle-play');
            masterplay.classList.add('fa-circle-pause');
            gif.style.opacity = 1;
        } 
        else if(audioelement.played)
        {
            audioelement.pause();
            masterplay.classList.add('fa-circle-play');
            masterplay.classList.remove('fa-circle-pause');
            gif.style.opacity = 0;

        }
});

//Listening events

audioelement.addEventListener('timeupdate', ()=>
{

    // Update Seekbar
    var progress = parseInt((audioelement.currentTime/audioelement.duration)*100);
    songbar.value = progress;
});

songbar.addEventListener('change', ()=>
{
    audioelement.currentTime = myProgressBar.value * audioelement.duration/100;
})

Array.from(document.getElementsByClassName('songItemplay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        console.log(e.target);
    })
})

