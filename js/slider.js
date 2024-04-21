const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');
const comicData = document.querySelectorAll('.comic-data');
let currentComicIndex = 0;

for (let i = 1; i < comicData.length; i++) {
    comicData[i].style.display = 'none';
}

const showNextComic = () => {
    comicData[currentComicIndex].style.display = 'none';
    currentComicIndex = (currentComicIndex + 1) % comicData.length;
    comicData[currentComicIndex].style.display = 'block';
}

const showPrevComic = () => {
    comicData[currentComicIndex].style.display = 'none';
    currentComicIndex = (currentComicIndex - 1 + comicData.length) % comicData.length;
    comicData[currentComicIndex].style.display = 'block';
}

nextButton.addEventListener('click', showNextComic);
prevButton.addEventListener('click', showPrevComic);