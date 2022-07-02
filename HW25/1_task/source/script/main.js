let playList = [
    {
        author: "LED ZEPPELIN",
        song: "STAIRWAY TO HEAVEN",
    },
    {
        author: "QUEEN",
        song: "BOHEMIAN RHAPSODY",
    },
    {
        author: "LYNYRD SKYNYRD",
        song: "FREE BIRD",
    },
    {
        author: "DEEP PURPLE",
        song: "SMOKE ON THE WATER",
    },
    {
        author: "JIMI HENDRIX",
        song: "ALL ALONG THE WATCHTOWER",
    },
    {
        author: "AC/DC",
        song: "BACK IN BLACK",
    },
    {
        author: "QUEEN",
        song: "WE WILL ROCK YOU",
    },
    {
        author: "METALLICA",
        song: "ENTER SANDMAN",
    },
];

function AddPlayList(list) {
    const newElement = document.createElement("ol");
    newElement.classList.add(`playlist`);
    let search = document.querySelector(`.hero__section`);
    search.append(newElement);
    for (let i = 0; i < list.length; i++) {
        let newLi = document.createElement(`li`);
        newLi.classList.add(`playlist__item`);
        newLi.innerHTML = `${i+1}. <span class="playlist__author">${list[i].author}</span> - <span class="playlist__song">${list[i].song.toLowerCase()}</span>`;
        search = document.querySelector(`ol`);
        search.append(newLi);
    }
}
AddPlayList(playList);
