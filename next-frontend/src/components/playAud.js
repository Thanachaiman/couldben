export function playAud(){
    const audioFileInput = document.getElementById('audioFileInput');
    const audioPlayer = document.getElementById('audioPlayer');

    audioFileInput.addEventListener('change', function() {
        const file = audioFileInput.files[0];
        audioPlayer.src = URL.createObjectURL(file);
        
    });
}