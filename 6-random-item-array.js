function grtRsndomItem(arr){
    const randomIndex = Math.floor(Math.random()*arr.length);
    const item = arr[randomIndex];
    return item;
}

const array = [1,'hello', 5, 8];
const result = getRandomItem(array);
console.log(result);