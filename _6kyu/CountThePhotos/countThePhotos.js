/*

In a string we describe a road. There are cars that move to the right and we denote them with ">" and cars that move to the left and we denote them with "<". There are also cameras that are indicated by: " . ".
A camera takes a photo of a car if it moves to the direction of the camera.

Task
Your task is to write a function such that, for the input string that represents a road as described, returns the total number of photos that were taken by the cameras. The complexity should be strictly O(N) in order to pass all the tests.

Examples

For ">>." -> 2 photos were taken
For ".>>" -> 0 photos were taken
For ">.<." -> 3 photos were taken
For ".><.>>.<<" -> 11 photos were taken

*/

function countPhotos(road) {
    const leftRoad = road.split('').filter((char) => char === '>' || char === '.');
    const rightRoad = road.split('').filter((char) => char === '<' || char === '.');
    
    let lCamera = leftRoad.filter(char => char === '.').length;
    let lPhotos = 0;
    let lCars = 0;

    leftRoad.forEach((el, i) => {
        if(el === '>') {
            lCars += 1;
        }
        
        if(el === '.' && lCamera !== 0) {
            lPhotos += (lCars * lCamera);
            lCars = 0;
            lCamera--;
        }

        if(el === '.' && lCamera === 0) {
            lPhotos += lCars;
            lCars = 0;
        } 
    });

    let rCamera = rightRoad.filter(char => char === '.').length;
    let rPhotos = 0
    let rCars = 0;

    for(let i = rightRoad.length - 1; i >= 0; i--) {
        if(rightRoad[i] === '<') {
            rCars +=1;
        } 

        if(rightRoad[i] === '.' && rCamera !== 0) {
            rPhotos += (rCars * rCamera);
            rCars = 0;
            rCamera--;
        }

        if(rightRoad[i] === '.' && rCamera === 0) {
            rPhotos += rCars;
            rCars = 0;
        } 
    }

    let photos = lPhotos + rPhotos;
    return photos;
}

// alt:
function countPhotos(road) {
    const leftRoad = road.split('').filter((char) => char === '>' || char === '.');
    const rightRoad = road.split('').filter((char) => char === '<' || char === '.').reverse();

    const roadArr = [leftRoad, rightRoad];
    let photos = 0;

    roadArr.forEach(r => {
        let roadCamera = r.filter(char => char === '.').length;
        let roadPhotos = 0;
        let cars = 0;

        r.forEach((el) => {
            if(el === '>' || el === '<') {
                cars += 1;
            }
            
            if(el === '.' && roadCamera !== 0) {
                roadPhotos += (cars * roadCamera);
                cars = 0
                roadCamera--;
            }
    
            if(el === '.' && roadCamera === 0) {
                roadPhotos += cars;
                cars = 0;
            } 
        });

        photos += roadPhotos;
    })

    return photos;
}
