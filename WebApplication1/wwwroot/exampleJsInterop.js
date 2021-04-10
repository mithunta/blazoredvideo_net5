window.onload = function () {

    alert("here");
    const video = document.getElementById('myVideo');

    video.addEventListener('pause', (event) => {
        //document.getElementById("video_overlays").style.visibility = "visible";
        let time = video.currentTime;
        alert("pause");
    });
    video.addEventListener('play', (event) => {
        alert("play");
    });
}
