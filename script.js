function getBase64(file) {
    return new Promise((resolve, reject) => {
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            resolve({
                success: true,
                base64 : reader.result
            });
        };
        reader.onerror = (error) => {
            reject({
                success: true,
                error  : error
            });
        };
    });
}

function getClipboardData(e) {
    return e.clipboardData || window.clipboardData;
}

function getFirstFile(clipboardData) {
    return clipboardData.files[0];
}

function handlePaste(e) {
    var   clipboardData = getClipboardData(e);
    const file          = getFirstFile(clipboardData);
    getBase64(file).then(result => {
        console.log(base64)
        document.getElementById('base64').innerText = result.base64;
    }).catch(console.log);
}

document.getElementById('imagePasted').addEventListener('paste', handlePaste);