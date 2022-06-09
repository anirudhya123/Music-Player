// console.log("Welcome to Teevra")
$(document).ready(() => {
    $(".play_btn_float").click(() => {
        $(".background_opacity").css({ "display": "block", "opacity": "0.5" });
        $(".music_player").css({ "display": "flex", "opacity": "1" });
    });
    $(".background_opacity").click(() => {
        $(".background_opacity").css({ "display": "None", "opacity": "0.5" });
        $(".music_player").css({ "display": "None", "opacity": "1" });
    });
});
// 1st creating an audio element 
let audio = document.createElement('audio');
// audio.src = "Sounds/Lily-by-Alan-Walker-K-391-Emelie-Hollow-Electro-Music.mp3";
// setInterval(instance_change, 1000);
let audio_list = ["Sounds/Lily-by-Alan-Walker-K-391-Emelie-Hollow-Electro-Music.mp3",
    "Sounds/XXXTENTACION-Hope.mp3", "Sounds/Ignite - Alan Walker- [PagalWorld.NL].mp3"]
let play_pause = document.querySelector(".play_pause");
let mute = document.querySelector(".muted");
let play = false;
let index_no = 0;
let _random = false;


function load_track(index) {
    // clearInterval(interval);
    document.getElementById("range_").value = 0;
    audio.src = audio_list[index];
    audio.load();
    interval = setInterval(instance_change, 1000);
}
load_track(index_no);
play_pause.addEventListener("click", () => {
    if (play == false) {
        audio.play();
        document.querySelector(".play_pause").innerHTML = `<i class="fa fa-pause"aria-hidden="true"></i>`;
        play = true;
    } else {
        audio.pause();
        document.querySelector(".play_pause").innerHTML = `<i class="fa fa-play"aria-hidden="true"></i>`;
        play = false;
    }
});
mute.addEventListener("click", () => {
    if (audio.muted) {
        audio.muted = false;
        mute.innerHTML = `<i class="fa fa-volume-up" aria-hidden="true"></i>`;
    } else {
        audio.muted = true;
        mute.innerHTML = `<i class="fa fa-volume-off" aria-hidden="true"></i>`;
    }
});
function duration_change() {
    let range = document.getElementById("range_");
    audio.currentTime = audio.duration * (range.value / 100);
}
function instance_change() {
    let range__ = document.getElementById("range_");
    if (!isNaN(audio.duration)) {
        range__.value = (audio.currentTime / audio.duration) * 100;
    }

    if (audio.ended) {
        if (index_no < 2) {
            index_no += 1;
        }
        else {
            index_no = 0;
        }
        load_track(index_no);
        audio.play();
        play = true;
    }
}
document.querySelector(".random_").addEventListener("click", () => {
    if (_random == false) {
        _random = true;
        document.querySelector(".random_").style.color = "yellow";
        console.log(_random);
    } else {
        _random = false;
        document.querySelector(".random_").style.color = "white";
    }
});
if (_random == false) {
    document.querySelector(".nxt").addEventListener("click", () => {
        console.log(_random);
        if (index_no < 2) {
            index_no += 1;
        }
        else {
            index_no = 0;
        }
        load_track(index_no);
        audio.play();
        play = true;
    });
    document.querySelector(".pre").addEventListener("click", () => {
        if (index_no > 0) {
            index_no -= 1;
        }
        else {
            index_no = 2;
        }
        load_track(index_no);
        audio.play();
        play = true;
    });
};
if(_random == true) {
    console.log("I am here");
    document.querySelector(".nxt").addEventListener("click", () => {
        index_no = Math.floor(Math.random() * 3);
        load_track(index_no);
        audio.play();
        play = true;
    });
    document.querySelector(".pre").addEventListener("click", () => {
        index_no = Math.floor(Math.random() * 3);
        load_track(index_no);
        audio.play();
        play = true;
    });
};


document.querySelector(".refresh").addEventListener("click", () => {
    index_no = 0;
    load_track(index_no);
    audio.play();
    play = true;
});
