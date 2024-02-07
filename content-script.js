window.onload = () => {
    console.log('Content Script Loaded'); 
    const button = document.createElement('button');
    button.id = 'dark-mode';
    button.innerText = 'Dark Mode';
    document.querySelector('#end').prepend(button);

    button.addEventListener('click', () => darkMode());
}


function darkMode() {
    document.getElementsByTagName('ytd-app')[0].style.color = 'black';
    document.getElementsByTagName('ytd-app')[0].style.backgroundColor = 'white';
}