function playVideo(url, title, views, date) {
    document.getElementById('mainPlayer').src = url;
    document.getElementById('videoTitle').innerText = title;
}

function searchVideo() {
    let input = document.getElementById('searchInput').value.toLowerCase();
    let li = document.getElementById('videoList').getElementsByTagName('li');

    for (let i = 0; i < li.length; i++) {
        let text = li[i].textContent || li[i].innerText;
        if (text.toLowerCase().indexOf(input) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

function sortVideos(type) {
    let list = document.getElementById('videoList');
    let items = Array.from(list.getElementsByTagName('li'));

    items.reverse();
    items.forEach(item => list.appendChild(item));
}