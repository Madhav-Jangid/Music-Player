// document.addEventListener("keydown", function (event) {
//     if (event.keyCode === 32) {
//         console.log("Spacebar was pressed.");
//         PlaySong(0);
//     }
// });
var SongIndex = 0;
let AllSongs = [
    {
        SongFile: 'assets/songs/YOYO/One Thousand Miles.mp3',
        SongName: 'One Thusand Miles',
        ImageCover: 'https://imgs.search.brave.com/8j0L7nod2E1AH0B7F0dPqNiTdSAEEtmbYGhAvz27sAs/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jLnNh/YXZuY2RuLmNvbS8x/NzMvWW8tWW8tSG9u/ZXktU2luZ2gtSGlu/ZGktMjAxOS0yMDE5/MDMzMTAxMjczNS01/MDB4NTAwLmpwZw',
        details: '<b>Singer:</b> YoYo Honey Singh<br><b>Release Date:</b> 0/0/0<br><b>Album:</b>Album Name',
        duration: '4:43'


    },
    {
        SongFile: 'assets/songs/YOYO/Blue Eyes.mp3',
        SongName: 'Blue Eyes',
        ImageCover: 'https://imgs.search.brave.com/P58SAyAHN2RtYU5N5BlCjY3BGwiTk6uaJg2y7LcmlvU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pMS5z/bmRjZG4uY29tL2Fy/dHdvcmtzLTAwMDA5/NzI0MDM0Mi0ycGFj/ZTctdDUwMHg1MDAu/anBn',
        details: '<b>Singer:</b> YoYo Honey Singh<br><b>Release Date:</b> 0/0/0<br><b>Album:</b>Album Name',
        duration: '3:40'

    },
    {
        SongFile: 'assets/songs/YOYO/Love Dose.mp3',
        SongName: 'Love Dose',
        ImageCover: 'https://imgs.search.brave.com/7xtFSNT0Dj1Qzy2p8Xb8uNNk0vx_kJjqxe5kGSkOoXA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLnl0/aW1nLmNvbS92aS9U/dm5nWTR1bmpuNC8w/LmpwZw',
        details: '<b>Singer:</b> YoYo Honey Singh<br><b>Release Date:</b> 0/0/0<br><b>Album:</b>Album Name',
        duration: '3:44'

    },
    {
        SongFile: 'assets/songs/YOYO/Kuley Kuley.mp3',
        SongName: 'Kuley Kuley',
        ImageCover: 'https://imgs.search.brave.com/Yj4UO7PZVg0w7qOu3NEWHOZT_Qx3xB900nfnG8S-_c4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jLnNh/YXZuY2RuLmNvbS82/NjEvS3VsZXktS3Vs/ZXktRnJvbS1Ib25l/eS0zLTAtUHVuamFi/aS0yMDIzLTIwMjMw/OTE0MTEzNTUzLTUw/MHg1MDAuanBn',
        details: '<b>Singer:</b> YoYo Honey Singh<br><b>Release Date:</b> 0/0/0<br><b>Album:</b>Album Name',
        duration: '3:30'

    },
    {
        SongFile: 'assets/songs/Arjit Singh/Agar Tum Saath Ho.mp3',
        SongName: 'Agar Tum Sath Ho',
        ImageCover: 'https://imgs.search.brave.com/rIEXdQsgTKEO7upaZpUimGdRXYFsE8e5ToaGvLksoa4/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jLnNh/YXZuY2RuLmNvbS83/MjMvQWdhci1UdW0t/U2FhdGgtSG8tRnJv/bS1UYW1hc2hhLS1F/bmdsaXNoLTIwMTkt/MjAyMDAxMDYyMTU5/NDUtNTAweDUwMC5q/cGc',
        details: '<b>Singer:</b> Arjit Singh <br><b>Release Date:</b> 0/0/0<br><b>Album:</b>Album Name',
        duration: '5:41'

    },
    {
        SongFile: 'assets/songs/Arjit Singh/Khairiyat.mp3',
        SongName: 'Khariyat',
        ImageCover: 'https://imgs.search.brave.com/kgy5QMO4mteU3geNSaJ4CNSKyipxTJJdlaMtZ-IcrWI/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/aGluZGl0cmFja3Mu/aW4vd3AtY29udGVu/dC91cGxvYWRzLzIw/MTkvMDgva2hhaXJp/eWF0LWx5cmljcy5q/cGc',
        details: '<b>Singer:</b> Arjit Singh <br><b>Release Date:</b> 0/0/0<br><b>Album:</b>Album Name',
        duration: '4:40'

    },
    {
        SongFile: 'assets/songs/Arjit Singh/Pal.mp3',
        SongName: 'Pal',
        ImageCover: 'https://imgs.search.brave.com/JBH9vZozqQSIUfM0oeuchOPm2wXjNFkRcOg7FIxXecI/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9scS5k/ampvaGFsLmNvbS9j/b3ZlcnMvNjc5MTAv/UGFsJTIwKEphbGVi/aSkuanBn',
        details: '<b>Singer:</b> Arjit Singh <br><b>Release Date:</b> 0/0/0<br><b>Album:</b>Album Name',
        duration: '4:07'

    },
    {
        SongFile: 'assets/songs/Arjit Singh/Shayad.mp3',
        SongName: 'Shayad',
        ImageCover: 'https://imgs.search.brave.com/0FxD9hgpno9qe6j-aOQEL-cVXAd3Iiwk6nlRFbyOKbY/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vOTlseXJp/Y3N0b3JlLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyMC8w/MS9XZWJwLm5ldC1j/b21wcmVzcy1pbWFn/ZTJCMjUyODM2MjUy/OS5qcGc_dz04NDAm/c3NsPTE',
        details: '<b>Singer:</b> Arjit Singh <br><b>Release Date:</b> 0/0/0<br><b>Album:</b>Album Name',
        duration: '4:08'

    },
    {
        SongFile: 'assets/songs/Arjit Singh/Soch Liya.mp3',
        SongName: 'Soch Liya',
        ImageCover: 'https://imgs.search.brave.com/sb8U3iPe6WqQqdg5f1447tYC99LDkoqFeWtMV2uzQXs/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9wYWdh/bG5ldy5jb20vY292/ZXJpbWFnZXMvc29j/aC1saXlhLXJhZGhl/LXNoeWFtLWhpbmRp/LTIwMjEtNTAwLTUw/MC5qcGc',
        details: '<b>Singer:</b> Arjit Singh <br><b>Release Date:</b> 0/0/0<br><b>Album:</b>Album Name',
        duration: '4:43'

    },
    {
        SongFile: 'assets/songs/Arjit Singh/Tera Yaar Hoon Main.mp3',
        SongName: 'Tera Yaar hun',
        ImageCover: 'https://imgs.search.brave.com/3DDJJ49DlUbRllOyve4RRKdN2thlpFoQFlPnf7yMyr8/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9wYWdh/bGl3b3JsZC5jb20v/c2l0ZXVwbG9hZHMv/dGh1bWIvc2Z0My8x/Mzc4XzQuanBn',
        details: '<b>Singer:</b> Arjit Singh <br><b>Release Date:</b> 0/0/0<br><b>Album:</b>Album Name',
        duration: '4:25'

    },
    {
        SongFile: 'assets/songs/Arjit Singh/Tujhe Kitna Chahne Lage.mp3',
        SongName: 'Tujhe Kitna Chane Lge',
        ImageCover: 'https://imgs.search.brave.com/TXf1LxuGDmDu_6h_iUgYv8wGsim7v6dBL6ibEG0y7go/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/Ym9sbHlub29rLmNv/bS91cGxvYWRlZF9w/aWN0dXJlcy9jb250/ZW50L2x5cmljcy81/MjB4MzMzL3R1amhl/LWtpdG5hLWNoYWhu/ZS1sYWdlLTIyMTM2/LmpwZw',
        details: '<b>Singer:</b> Arjit Singh <br><b>Release Date:</b> 0/0/0<br><b>Album:</b>Album Name',
        duration: '4:45'

    }
]

var cnd1 = true;
function leftNav(){
    if(cnd1){
        document.getElementById('left-nav').style.transform = 'translateX(0)';
    }else{
        document.getElementById('left-nav').style.transform = 'translateX(-313px)';
    }
    cnd1 = !cnd1;
}

var PlaylistList = ['yoyo-songs', 'arijit-songs', 'bollywood-songs'];
var ListIndex = 0;

var Midsection = document.querySelectorAll('.mid-section');

console.log(PlaylistList.length)

function NavigatePlaylist(dir) {
    if (dir == 'left') {
        if (ListIndex == 0) {
            ListIndex = PlaylistList.length - 1;

        } else {
            ListIndex -= 1;
        }

        // Midsection.forEach((item) => {
        //     item.style.display = 'none'
        // })
        document.getElementById(PlaylistList[ListIndex + 1]).style.display = 'none';
        document.getElementById(PlaylistList[ListIndex]).style.display = 'block';
    }
    else if (dir == 'right') {
        if (ListIndex == PlaylistList.length - 1) {
            ListIndex = 0
        } else {
            ListIndex += 1;
        }
        // Midsection.forEach((item) => {
        //     item.style.display = 'none'
        // })
        document.getElementById(PlaylistList[ListIndex - 1]).style.display = 'none';
        document.getElementById(PlaylistList[ListIndex]).style.display = 'block';
    }
}

const PrevButton = document.getElementById('SkipPrevious');
const PlayButton = document.getElementById('play');
const NextButton = document.getElementById('SkipNext');
const BarsGif = document.getElementById('bars');
const SongName = document.getElementById('SongName');
const SongImg = document.getElementById('coverimg');
const duration = document.getElementById('duration');
const smallPlay = document.querySelectorAll('.song-play');
const detailsRightNav = document.getElementById('detailsRightNav');

var ButtonArray = [];
smallPlay.forEach((item) => {
    ButtonArray.push(item);
})


function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    const formattedTime = `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
    return ('-' + formattedTime);
}

var AudioX = new Audio(AllSongs[SongIndex].SongFile);
const TimeBar = document.getElementById('TimeStamp');
const current = document.getElementById('current');
const Volume = document.getElementById('volumeRange')

function ChangeSongs(Index, Is) {
    if (Is) {
        AudioX.pause();
        setTimeout(() => {
            AudioX.play()
        }, 200);
    }
    AudioX.pause();
    AudioX = new Audio(AllSongs[Index].SongFile);
    if (AudioX.paused || AudioX.currentTime < 0) {
        AudioX.play();
        AudioX.addEventListener('timeupdate', function () {
            var progress = ((AudioX.currentTime / AudioX.duration) * 100)
            TimeBar.value = progress;
            current.innerHTML = formatTime(AudioX.currentTime);
            Volume.addEventListener('change', function () {
                AudioX.volume = Volume.value;
            })

            if (AudioX.currentTime == AudioX.duration) {
                Index += 1;
                if (Index < AllSongs.length) {
                    PlaySong(Index);
                } else {
                    PlaySong(0);
                }
            }
        });
        // TImebarUpdate();
    } else {
        AudioX.pause();
    }
}


var VolumeButton = document.getElementById('volIcon');
var volumeRange = document.getElementById('volumeRange')
VolumeButton.addEventListener('click', function () {
    if (volumeRange.value > 0) {
        volumeRange.value = 0;
        AudioX.volume = 0;
        VolumeButton.classList.remove('bx-volume-low');
        VolumeButton.classList.add('bx-volume-mute');
    } else {
        volumeRange.value = 1;
        AudioX.volume = 1;
        VolumeButton.classList.remove('bx-volume-mute');
        VolumeButton.classList.add('bx-volume-full');
    }
})
volumeRange.addEventListener('change', function () {
    console.log(parseFloat(volumeRange.value) * 100)
    if (volumeRange.value <= 0.5) {
        VolumeButton.classList.remove('bx-volume-mute');
        VolumeButton.classList.remove('bx-volume-full');
        VolumeButton.classList.add('bx-volume-low');
    } else if (Math.abs(volumeRange.value - 0) < 0.001) {
        VolumeButton.classList.remove('bx-volume-mute');
        VolumeButton.classList.remove('bx-volume-low');
        VolumeButton.classList.add('bx-volume-mute');
        console.log('muted')
    } else {
        VolumeButton.classList.remove('bx-volume-mute');
        VolumeButton.classList.remove('bx-volume-low');
        VolumeButton.classList.add('bx-volume-full');
    }

})


TimeBar.addEventListener('change', function () {
    AudioX.currentTime = (TimeBar.value * AudioX.duration) / 100;
})


const closeRight = document.getElementById('closeRightNav');
const RightNav = document.getElementById('right-nav');
const CenterSlide = document.getElementById('center-ele');

const rightname = document.querySelectorAll('.current-song-name');
const rightimg = document.querySelectorAll('.current-song-img');

function rightnav(Index) {
    rightname.forEach((name) => {
        name.innerHTML = AllSongs[Index].SongName;
    })

    rightimg.forEach((img) => {
        img.src = AllSongs[Index].ImageCover;
    })

}

const BottomNav = document.getElementById('BottomNav');


function PlaySong(Index, Is) {
    SongIndex = Index;
    let Div = document.getElementById(Index);
    Div.style.backgroundColor = '#333';
    Div.style.border = '2px solid rgb(0, 115, 255)'

    if (AudioX.paused || AudioX.currentTime < 0) {
        ChangeSongs(Index, Is);
        PlayButton.classList.remove('bx-play-circle');
        PlayButton.classList.add('bx-pause-circle');
        PlayButton.style.color = 'rgb(35, 232, 55)';
        RightNav.style.display = 'block';
        CenterSlide.style.width = '50vw';
        BottomNav.style.transform = 'translateY(0rem)';
        rightnav(Index);
        // BarsGif.style.opacity = '1';
        SongName.innerHTML = AllSongs[Index].SongName;
        SongImg.src = AllSongs[Index].ImageCover;
        detailsRightNav.innerHTML = AllSongs[Index].details;
        SongImg.style.display = 'block';
        duration.innerHTML = AllSongs[Index].duration;
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
        PlayButton.style.color = '#fff';
        // RightNav.style.display = 'none';
        // CenterSlide.style.width = '80vw';
        // BottomNav.style.transform = 'translateY(7rem)';
        // BarsGif.style.opacity = '0';
        SongName.innerHTML = '';
        SongImg.src = '';
        SongImg.style.display = 'none';
        AudioX.pause();
    }
}

function NavigateSong(dir) {
    if (dir == 'left') {
        if (SongIndex == 0) {
            SongIndex = AllSongs.length - 1;

        } else {
            SongIndex -= 1;
        }
        PlaySong(SongIndex, true);
        rightnav(SongIndex, true);
    }
    else if (dir == 'right') {
        if (SongIndex == AllSongs.length - 1) {
            SongIndex = 0
        } else {
            SongIndex += 1;
        }
        ChangeSongs(SongIndex, true);
        rightnav(SongIndex, true);
    }
}
var searchInput = document.getElementById("dn2");
console.log(searchInput)


const option = document.createElement("option");
const datalist = document.getElementById('suggestions')

var sortSong = [];

AllSongs.forEach((item) => {
    var Choice = document.createElement('option');
    Choice.value = item.SongName;
    datalist.appendChild(Choice);
    sortSong.push((Choice.value).toLowerCase())
})

console.log(sortSong)

function DisplaySection() {
    var inputValue = (searchInput.value).toLowerCase();
    console.log(inputValue);
    if(sortSong.includes(inputValue)){
        console.log(sortSong.indexOf(inputValue));
        if(PlaySong(sortSong.indexOf(inputValue),true)){
            searchInput.value = ''
        }
        if (inputValue === "Honey Singh") {
            DisplayArtist('yoyo-songs', 'yoyo');
        } else if (inputValue === "Arjit Singh") {
            DisplayArtist('arijit-songs', 'arijit');
        } else if (inputValue === "BollyWood Songs") {
            DisplayArtist('bollywood-songs', 'bollyWood');
        }
    }else{
        alert('Song Not Found :(')
    }
}


function DisplayArtist(id, index) {
    DisplayPlaylist(index);
    const section = document.querySelectorAll('.mid-section');
    section.forEach((item) => {
        item.style.display = 'none';
    })
    document.getElementById(id).style.display = 'block';
}

const section = document.querySelectorAll('.playlist');
function DisplayPlaylist(id) {
    section.forEach((item) => {
        item.classList.remove('active');
    })
    document.getElementById(id).classList.add('active')
}





closeRight.addEventListener('click', function () {
    RightNav.style.display = 'none';
    CenterSlide.style.width = '80vw';
})


function PlayPause() {
    PlaySong(SongIndex);
}

