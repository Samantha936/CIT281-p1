function generateRandomString() {
    const letters = "abcdefghijklmnopqrstuvwxyz";
    const myString = getRandomInteger(5, 26); // min 5 and max 25 uncapped
    let result = "";
  
    for (let i = 0; i < myString; i++) {
      const randomIndex = getRandomInteger(0, letters.length);
      result += letters[randomIndex];
    }
  
    return result;
  }
// Returns a random number between min (inclusive) and max (exclusive)
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

console.log(generateRandomString());