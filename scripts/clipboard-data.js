function ClipboardData(event) {

    function _getClipboardData() {
        return event.clipboardData || window.clipboardData;
    }

    this.getFirstFile = function () {
        var clipboardData = _getClipboardData();
        return clipboardData.files[0];
    }

}