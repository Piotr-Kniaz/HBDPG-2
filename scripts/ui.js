document.addEventListener('DOMContentLoaded', function() {
    function isPWA() {
        if (window.navigator.standalone || window.matchMedia('(display-mode: standalone)').matches) {
            return true;
        } else {
            return false;
        }
    }

    if (!isPWA()) {
        window.location.href = 'https://hbdpg-2.github.io/';
    }

    linkButton.addEventListener('click', function() {
        window.open('https://hbdpg-2.github.io/', '_blank');
    });
});

const linkButton = document.getElementById('linkButton');