var SongIndex = 0;
let AllSongs = [
    {
        SongFile: 'assets/songs/One Thousand Miles.mp3',
        SongName: 'One Thusand Miles',
        ImageCover: 'https://imgs.search.brave.com/8j0L7nod2E1AH0B7F0dPqNiTdSAEEtmbYGhAvz27sAs/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jLnNh/YXZuY2RuLmNvbS8x/NzMvWW8tWW8tSG9u/ZXktU2luZ2gtSGlu/ZGktMjAxOS0yMDE5/MDMzMTAxMjczNS01/MDB4NTAwLmpwZw'
    },
    {
        SongFile: 'assets/songs/Blue Eyes.mp3',
        SongName: 'Blue Eyes',
        ImageCover: 'https://imgs.search.brave.com/P58SAyAHN2RtYU5N5BlCjY3BGwiTk6uaJg2y7LcmlvU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pMS5z/bmRjZG4uY29tL2Fy/dHdvcmtzLTAwMDA5/NzI0MDM0Mi0ycGFj/ZTctdDUwMHg1MDAu/anBn'
    }
]



const PrevButton = document.getElementById('SkipPrevious');
const PlayButton = document.getElementById('play');
const NextButton = document.getElementById('SkipNext');
const BarsGif = document.getElementById('bars');
const SongName = document.getElementById('SongName');
const SongImg = document.getElementById('coverimg');

var AuidoElement = new Audio(AllSongs[SongIndex].SongFile)

PrevButton.addEventListener('click',function(){
    SongIndex -= 1;
    var AuidoElement = new Audio(AllSongs[SongIndex].SongFile);
})

NextButton.addEventListener('click',function(){
    SongIndex += 1;
    var AuidoElement = new Audio(AllSongs[SongIndex].SongFile);
})


PlayButton.addEventListener('click',function(){

    if(AuidoElement.paused || AuidoElement.currentTime < 0){
        AuidoElement.play();
        PlayButton.classList.remove('bx-play-circle');
        PlayButton.classList.add('bx-pause-circle');
        BarsGif.style.opacity = '1';
        SongName.innerHTML = AllSongs[SongIndex].SongName;
        SongImg.src = AllSongs[SongIndex].ImageCover;

    }else{
        AuidoElement.pause();
        PlayButton.classList.remove('bx-pause-circle');
        PlayButton.classList.add('bx-play-circle');
        BarsGif.style.opacity = '0';
        SongName.innerHTML = '';
        SongImg.src = '';

    }
})