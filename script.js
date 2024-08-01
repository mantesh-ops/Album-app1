const _bx1 = document.querySelector('.bx-1');
const _bx2 = document.querySelector('.bx-2');
const _bx3 = document.querySelector('.bx-3');
const _bx4 = document.querySelector('.bx-4');
const _bx5 = document.querySelector('.bx-5');
const Video = document.querySelector('.video-background');
const _name = document.querySelector('.g-name');
const _para = document.querySelector('.g-para');

// PAGES

const page3 = document.querySelector('.page-3');

page3.addEventListener('mousemove', () => {
    // page3.style.cursor = "url('./images/bag-x-c.cur'), auto";
    page3.style.cursor = "no-drop";
})

let videoSources = [
    { src: './videos/new-state.mp4' },
    { src: './videos/PUBG.mp4' },
    { src: './videos/cod.mp4' },
    { src: './videos/apex.mp4' },
    { src: './videos/asphalt.mp4' }
];

let currentSourceIndex = 0;

function changeVideoSource(index) {
    Video.classList.remove('active');
    setTimeout(() => {
        Video.src = videoSources[index].src;
        Video.play();
        Video.classList.add('active');
    }, 100); // Change video source and play it after 1 second
}

_bx1.addEventListener('click', () => {
    currentSourceIndex = 0;
    changeVideoSource(currentSourceIndex);
});

_bx2.addEventListener('click', () => {
    currentSourceIndex = 1;
    changeVideoSource(currentSourceIndex);
});

_bx3.addEventListener('click', () => {
    currentSourceIndex = 2;
    changeVideoSource(currentSourceIndex);
});

_bx4.addEventListener('click', () => {
    currentSourceIndex = 3;
    changeVideoSource(currentSourceIndex);
});

_bx5.addEventListener('click', () => {
    currentSourceIndex = 4;
    changeVideoSource(currentSourceIndex);
});

// // Play the first video when the window loads
// window.addEventListener('load', () => {
//     Video.src = videoSources[currentSourceIndex].src;
//     Video.play();
// });

// window.addEventListener('scroll', function () {
//     const nav = document.querySelector('nav');
//     const pre = document.querySelector('.pre');

//     // NAV
//     if (window.scrollY >= 500) {
//         nav.style.backgroundColor = 'black';
//         pre.style.border = '1px solid white';
//     } else {
//         nav.style.backgroundColor = 'transparent';
//     }
// });


// Define an array of image sources
var imageSources = [
    'https://m.media-amazon.com/images/I/81eNirKvLeL._AC_UF1000,1000_QL80_.jpg',
    'https://e0.pxfuel.com/wallpapers/967/200/desktop-wallpaper-sennheiser-sennheiser-sennheiser-headphones-and-sennheiser-650-gaming-headset.jpg',
    'https://c1.wallpaperflare.com/preview/395/281/231/controller-games-video-buttons.jpg',
    'https://cybershack.com.au/wp-content/uploads/2022/08/ASUS-RGOS-header-1.jpg',
    'https://i.pinimg.com/originals/b5/f8/dd/b5f8dd5ae83f4552cf4083d62d2c126d.jpg',
    'https://bit-tech.net/media/image/2021/2/77d709f7-9a4d-443d-a2b5-1316a0915627.jpg',
    'https://images.pexels.com/photos/7862491/pexels-photo-7862491.jpeg?cs=srgb&dl=pexels-alena-darmel-7862491.jpg&fm=jpg',
    'https://e1.pxfuel.com/desktop-wallpaper/712/555/desktop-wallpaper-steelseries-arctis-7p-gaming-headset-is-compatible-with-various-consoles-offers-3d-audio-gadget-flow-gaming-headphones.jpg'
];

var index = 0;
var image = document.querySelector(".product-slider");

function changeImage() {
    image.style.opacity = 0; // Set opacity to 0 to create a fade effect
    setTimeout(function () {
        index = (index + 1) % imageSources.length;
        image.style.backgroundImage = `url('${imageSources[index]}')`;
        setTimeout(function () {
            image.style.opacity = 1; // Restore opacity after background change
        }, 100);
    }, 1000);
}

// Initially set the background image
image.style.backgroundImage = `url('${imageSources[index]}')`;

// Change the image every 5 seconds
setInterval(changeImage, 5000);

