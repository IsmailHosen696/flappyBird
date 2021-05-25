context = c.getContext('2d');

const bird = new Image();
bird.src = "asset/bird.png";
birdX = birdDy = score = bestScore = 0;
birdY = 200;
pipeGap = 150;
interval = pipeWidth = 24;
topPipeGapBottomY = 14;
birdSize = 30;
canvasSize = pipeX = 400;
c.onclick = () => { birdDy = 6 }
setInterval(() => {
    context.fillStyle = 'skyblue';
    context.fillRect(0, 0, canvasSize, canvasSize);

    birdY -= birdDy -= 0.5;
    context.drawImage(bird, birdX, birdY, birdSize * (275 / 183), birdSize);

    context.fillStyle = 'green';
    pipeX -= 8;
    pipeX < -pipeWidth && ((pipeX = canvasSize), topPipeGapBottomY = Math.random() * pipeGap);
    context.fillRect(pipeX, 0, pipeWidth, topPipeGapBottomY);
    context.fillRect(pipeX, topPipeGapBottomY + pipeGap, pipeWidth, canvasSize);

    context.fillStyle = 'green';
    context.fillText(score++, 9, 25);
    bestScore = bestScore < score ? score : bestScore;
    context.fillText(`Best Score: ${bestScore} `, 9, 50);
    ((birdY < topPipeGapBottomY || birdY > topPipeGapBottomY + pipeGap) && pipeX < birdSize * (275 / 183) || (birdY > canvasSize)) &&
        ((birdDy = 0), (birdY = 200), (pipeX = canvasSize), (score = 0))
}, interval)
