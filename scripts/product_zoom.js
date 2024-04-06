const imageContainer = document.querySelector('.image-container');
const imageZoom = document.querySelector('.image-zoom');
const bigCard = document.querySelector('.big-card');

imageContainer.addEventListener('mousemove', (e) => {
    const xOffset = e.clientX - imageContainer.getBoundingClientRect().left;
    const yOffset = e.clientY - imageContainer.getBoundingClientRect().top;
    const bgX = (xOffset / imageContainer.offsetWidth) * (bigCard.width - imageZoom.offsetWidth);
    const bgY = (yOffset / imageContainer.offsetHeight) * (bigCard.height - imageZoom.offsetHeight);

    imageZoom.style.backgroundImage = `url(${bigCard.src})`;
    imageZoom.style.backgroundSize = `${bigCard.width}px ${bigCard.height}px`;
    imageZoom.style.backgroundPosition = `-${bgX}px -${bgY}px`;
    imageZoom.style.left = xOffset - imageZoom.offsetWidth / 2 + 'px';
    imageZoom.style.top = yOffset - imageZoom.offsetHeight / 2 + 'px';
}); 
