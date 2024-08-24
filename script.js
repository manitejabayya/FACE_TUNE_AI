document.getElementById('capture').addEventListener('click', async () => {
    const video = document.getElementById('video');

    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
            video.srcObject = stream;
            video.play();
        })
        .catch(err => {
            console.error("Error accessing webcam: " + err);
        });
    }

    video.addEventListener('loadeddata', () => {
        const canvas = document.getElementById('canvas');
        const context = canvas.getContext('2d');
        context.drawImage(video, 0, 0, canvas.width, canvas.height);
    });
});

document.getElementById('disable-cam').addEventListener('click', () => {
    const video = document.getElementById('video');
    if (video.srcObject) {
        const stream = video.srcObject;
        const tracks = stream.getTracks();

        tracks.forEach(track => {
            track.stop();
        });

        video.srcObject = null;
    }
});

document.getElementById('play-song').addEventListener('click', () => {
    console.log("Play Song button clicked");
});

document.getElementById('motivation').addEventListener('click', () => {
    console.log("Motivation button clicked");
});

document.getElementById('story').addEventListener('click', () => {
    console.log("Story button clicked");
});
