let songs = document.querySelectorAll('a[href^="/leaderboard"');
songs.forEach(function(songNode){
    let a = document.createElement('a');
    let songName = songNode.innerText;
    songName = songName.substring(songName.indexOf('-')+1, songName.length);
    songName = songName.substring(0, songName.indexOf('(')).trim();
    songName = songName.replace('!', '');
    let searchString = encodeURIComponent(songName);

    a.setAttribute('href', 'https://bsaber.com/?s=' + searchString );
    a.setAttribute('target', '_blank');
    a.setAttribute('class', 'rate-on-beastsaber');
    a.innerHTML = "Rate on BeastSaber";
    songNode.parentNode.appendChild(a);
});

