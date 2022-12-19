(() => {
    'use strict';

    let anchors = document.querySelectorAll('a[name]');

    function backlightOfElements() {
        anchors.forEach((elem) => {
            let offsetTop = elem.offsetTop - window.pageYOffset;
            let anchorName = elem.getAttribute('name');
            let link = document.querySelector(`a[href$="#${anchorName}"]`);

            if (offsetTop < 0 || window.innerHeight < offsetTop) {
                
                link.style.background='';
            } else {
                link.style.background='#ccc';
            }
        });
    }

    backlightOfElements();

    window.addEventListener('scroll', backlightOfElements);
})()