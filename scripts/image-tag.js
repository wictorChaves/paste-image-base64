function ImageTag() {

    var tag = document.createElement('img');

    this.setAlt = function (alt) {
        tag.alt = alt;
        return this;
    }

    this.setTitle = function (title) {
        tag.title = title;
        return this;
    }

    this.setSrc = function (src) {
        tag.src = src;
        return this;
    }

    this.get = function () {
        return tag;
    }

}