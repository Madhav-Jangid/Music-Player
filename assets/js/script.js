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
    },
    {
        SongFile: 'assets/songs/Love Dose.mp3',
        SongName: 'Love Dose',
        ImageCover: 'https://imgs.search.brave.com/7xtFSNT0Dj1Qzy2p8Xb8uNNk0vx_kJjqxe5kGSkOoXA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLnl0/aW1nLmNvbS92aS9U/dm5nWTR1bmpuNC8w/LmpwZw'
    },
    {
        SongFile: 'assets/songs/Kuley Kuley.mp3',
        SongName: 'Kuley Kuley',
        ImageCover: 'https://imgs.search.brave.com/Yj4UO7PZVg0w7qOu3NEWHOZT_Qx3xB900nfnG8S-_c4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jLnNh/YXZuY2RuLmNvbS82/NjEvS3VsZXktS3Vs/ZXktRnJvbS1Ib25l/eS0zLTAtUHVuamFi/aS0yMDIzLTIwMjMw/OTE0MTEzNTUzLTUw/MHg1MDAuanBn'
    }
]


const PrevButton = document.getElementById('SkipPrevious');
const PlayButton = document.getElementById('play');
const NextButton = document.getElementById('SkipNext');
const BarsGif = document.getElementById('bars');
const SongName = document.getElementById('SongName');
const SongImg = document.getElementById('coverimg');
const TimeBar = document.getElementById('TimeStamp');
const current = document.getElementById('current');
const duration = document.getElementById('duration');
const smallPlay = document.querySelectorAll('.song-play');


var ButtonArray = [];
smallPlay.forEach((item) => {
    ButtonArray.push(item);
})



var AudioX = new Audio(AllSongs[SongIndex].SongFile);

function ChangeSongs(Index) {
    AudioX.pause();
    AudioX = new Audio(AllSongs[Index].SongFile);
    if (AudioX.paused || AudioX.currentTime < 0) {
        AudioX.addEventListener('timeupdate', function () {
            var progress = ((AudioX.currentTime / AudioX.duration) * 100)
            TimeBar.value = progress;
            current.innerHTML = AudioX.currentTime;
        });
        TimeBar.addEventListener('change', function () {
            AudioX.currentTime = (TimeBar.value * AudioX.duration) / 100;
        })
        AudioX.play();
        // PlaySong(Index);
    } else {
        AudioX.pause();
        // PlaySong(Index);
    }
}


function PlaySong(Index) {
    if (AudioX.paused || AudioX.currentTime < 0) {
        PlayButton.classList.remove('bx-play-circle');
        PlayButton.classList.add('bx-pause-circle');
        ButtonArray[Index].classList.remove('bx-play-circle');
        ButtonArray[Index].classList.add('bx-pause-circle');
        BarsGif.style.opacity = '1';
        SongName.innerHTML = AllSongs[Index].SongName;
        SongImg.src = AllSongs[Index].ImageCover;
        SongImg.style.display = 'block';
        duration.innerHTML = ((AudioX.duration) / 60);
        ChangeSongs(Index);
        ButtonArray.forEach((i) => {
            if (Index == ButtonArray.indexOf(i)) {
                // null
            } else {
                i.classList.remove('bx-pause-circle');
                i.classList.add('bx-play-circle');

            }
        })

    } else {
        console.log('Pused')
        PlayButton.classList.remove('bx-pause-circle');
        PlayButton.classList.add('bx-play-circle');
        ButtonArray[Index].classList.remove('bx-pause-circle');
        ButtonArray[Index].classList.add('bx-play-circle');
        BarsGif.style.opacity = '0';
        SongName.innerHTML = '';
        SongImg.src = '';
        duration.innerHTML = '';
        current.innerHTML = '';
        SongImg.style.display = 'none';
        AudioX.pause();
    }
}



function NavigateSong(dir) {
    if (dir == 'left') {
        SongIndex -= 1;
        ChangeSongs(SongIndex);
    }
    else if (dir == 'right') {
        SongIndex += 1;
        ChangeSongs(SongIndex);
    }
}




