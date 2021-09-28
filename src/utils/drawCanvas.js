/**
 * @name drawCanvas
 * @param canvas
 * @param img
 */

const drawCanvas = (canvas, img) => {
    canvas.width = getComputedStyle(canvas).width.split('px')[0];
    canvas.height = getComputedStyle(canvas).height.split('px')[0];

    const ratio  = Math.min(canvas.width / img.width, canvas.height / img.height);
    const x = (canvas.width - img.width * ratio) / 2;
    const y = (canvas.height - img.height * ratio) / 2;

    const ctx = canvas.getContext("2d");

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0, img.width, img.height, x, y, img.width * ratio, img.height * ratio);
};

export default drawCanvas;
