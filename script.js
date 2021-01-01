'use strict';

window.addEventListener('DOMContentLoaded', (event) => {

    // Adding EventListners for changin theme by user
    (() => {
        const themeDots = document.getElementsByClassName('theme-dot');
        for (var i = 0; themeDots.length > i; i++) {
            themeDots[i].addEventListener('click', function () {
                document.getElementById('theme-style').href = this.dataset.mode === 'light' ? 'default.css' : this.dataset.mode + '.css'
            });
        }
    })();

    // Looping Themes
    (() => {
        let loop = true;
        let checkbox = document.querySelector("input[name=checkbox]");
        checkbox.addEventListener('change', function () {
            loop = !this.checked;
        });
        // loop
        const themes = ['light', 'blue', 'green', 'purple'];
        let current_theme = 0;
        (function themeLooper() {
            if (loop) {
                let mode = themes[current_theme];
                document.getElementById('theme-style').href = mode === 'light' ? 'default.css' : mode + '.css';
                current_theme = current_theme === themes.length - 1 ? 0 : current_theme + 1;
            }
            setTimeout(themeLooper, 10000);
        })();
    })();

    // Looping Gifs
    (() => {
        const no_of_gifs = 4;
        let current_gif = 1;
        (function gifLooper() {
            document.getElementById('social_img').src = 'images/gifs/' + current_gif + '.gif';
            current_gif = current_gif + 1 > no_of_gifs ? 1 : current_gif + 1;
            setTimeout(gifLooper, 10000);
        })();
    })();

    // Typing simulation
    (() => {
        document.getElementById("sub-heading").style["border-right"] = "1rem solid rgb(81, 255, 0)";
        let toggle = true;
        let timeoutHandler = null;

        function blink(cond) {
            if (cond === 'start') {
                if (toggle) {
                    document.getElementById("sub-heading").style["border-right"] = "";
                    document.getElementById("sub-heading").style["border-left"] = "";
                }
                else {
                    document.getElementById("sub-heading").style["border-right"] = "1rem solid rgb(81, 255, 0)";
                    document.getElementById("sub-heading").style["border-left"] = "1rem solid rgba(0, 0, 0, 0)";
                }
                toggle = !toggle;
                timeoutHandler = setTimeout(() => blink('start'), 500);
            } else if (cond === 'stop') {
                if (timeoutHandler)
                    clearTimeout(timeoutHandler);
                toggle = true;
                document.getElementById("sub-heading").style["border-right"] = "1rem solid rgb(81, 255, 0)";
            }
        }

        const titles = ["Software Developer", "FullStack Developer", "Mobile Developer", "Game Developer", "Programmer"];
        const titleStart = document.getElementById('sub-heading').innerHTML;
        let current_title = 0;
        // Going back
        function goback() {
            let currentTitle = document.getElementById('sub-heading').innerHTML;
            // print(currentTitle);
            if (currentTitle === titleStart) {
                current_title = current_title === titles.length - 1 ? 0 : current_title + 1;
                blink('stop');
                write();
            } else {
                document.getElementById('sub-heading').innerHTML = currentTitle.slice(0, currentTitle.length - 1);
                setTimeout(goback, 50);
            }
        }
        // writing titles
        function write() {
            let currentTitle = document.getElementById('sub-heading').innerHTML;
            if (currentTitle === titleStart + titles[current_title]) {
                blink('start');
                setTimeout(goback, 2600);
            } else {
                let charIndex = currentTitle.length - titleStart.length;
                document.getElementById('sub-heading').innerHTML = currentTitle + titles[current_title][charIndex];
                setTimeout(write, 80);
            }
        };
        write();
    })();

});








