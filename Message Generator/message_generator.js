<<<<<<< HEAD
const phrases = Math.floor(Math.random() * 2) +1;

const be_phrases_array = ["Successful", "Victorious", "Resilient", "Strong", "Unstoppable", "Courageous", "Amazing", "Incredible", "Empowered", "Triumphant"];
const have_phrases_array = ["Success", "Strength", "Courage", "Victory", "Confidence", "Wisdom", "Happiness", "Peace", "Resilience", "Abundance"];

const random = phrases => {
    if (phrases === 1){
        const randomIndex = Math.floor(Math.random() * be_phrases_array.length);
        console.log(`You will be ${be_phrases_array[randomIndex]}`);
    }else if (phrases === 2){
        const randomIndex = Math.floor(Math.random() * have_phrases_array.length);
        console.log(`You will have ${have_phrases_array[randomIndex]}`)
    }
} 
random(phrases);