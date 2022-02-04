const f = document.getElementById('id2');
const q = document.getElementById('id1');
const google = 'https://www.google.com/search?q=site%3A+';
const site = 'https://ro.wikipedia.org/';

function submitted(event) {
    event.preventDefault();
    const url = google + site + '+' + q.value;
    const win = window.open(url, '_blank');
    win.focus();
}

f.addEventListener('submit', submitted);