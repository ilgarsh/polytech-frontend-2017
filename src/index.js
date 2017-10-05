var app = new Vue({
    el: '#app',
    data: {
        blocks: [
            {color: 'aliceblue '},
            {color: 'antiquewhite'},
            {color: 'aqua'},
            {color: 'aquamarine'},
            {color: 'azure'},
            {color: 'blue'},
            {color: 'burlywood'},
            {color: 'crimson'},
            {color: 'cyan'},
            {color: 'darkmagenta'},
            {color: 'deeppink'},
            {color: 'aliceblue '},
            {color: 'antiquewhite'},
            {color: 'aqua'},
            {color: 'azure'},
            {color: 'blue'}
        ]
    },
    created:
        function () {
            this.changeColors = setInterval(function () {
                this.blocks.push(this.blocks.shift());
            }.bind(this), 100);
        }
});
