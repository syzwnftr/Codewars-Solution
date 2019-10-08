function findScreenHeight(width, ratio) {
    let strArr = ratio.split(':');
    let mul = parseInt(strArr[0]) - parseInt(strArr[1]);
    let height = width - (mul * (width / strArr[0]));
    return `${width}x${height}`;
}