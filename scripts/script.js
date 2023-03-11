function showBase64(base64Image) {
    document.getElementById('base64').innerText = base64Image;
}

function showImage(base64Image) {
    var imgTag = new ImageTag().setSrc(base64Image).get();
    document.getElementById('imagePasted').append(imgTag);
}

function getBase64Success(result) {
    showBase64(result.base64);
    showImage(result.base64);
}

function handlePaste(event) {
    const file = new ClipboardData(event).getFirstFile();
    convertImageToBase64(file).then(getBase64Success).catch(console.log);
}

document.getElementsByTagName('body')[0].addEventListener('paste', handlePaste);