function copyDivToClipboard(containerid) {
    navigator.clipboard.writeText(document.getElementById(containerid).innerText);
}