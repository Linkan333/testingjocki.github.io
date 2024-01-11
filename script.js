document.querySelector('li[onclick]').addEventListener('click', function() {
    window.location = this.getAttribute('onclick').split('=')[1].replace(/'/g, '');
});