function convertImageToBase64(file) {
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