let findBtn = document.getElementById('scrabble-find-btn')
let textShow = document.getElementById('show-words')

findBtn.addEventListener('click', showWords)

function showWords() {
    textShow.textContent = results.splice(0, 2);

}


let dictionary = [
    'lake', 'hair', 'year', 'road', 'tale', 'food', 'map', 'ear',
    'poet', 'hall', 'sir', 'menu', 'son', 'art', 'exam', 'city',
    'ad', 'goal', 'gene', 'way', 'math', 'dirt', 'loss', 'debt',
    'dad', 'mall', 'love', 'fact', 'town', 'king', 'oven', 'song',
    'lady', 'area', 'mode', 'girl', 'gate', 'bird', 'poem', 'mom',
    'news', 'meat', 'desk', 'bath', 'wife', 'data', 'wood', 'unit',
    'idea', 'lab'
]

let wordToTest = 'kelaoardjr';

let results = [];
// let unusedLetters = [];

function generateOutput(matchedWord, givenWordLetter) {
    for (var i = 0; i < matchedWord.length; i++) {
        if (givenWordLetter.indexOf(matchedWord[i]) < 0) {
            return;
        }


    }


    results.push(matchedWord)

    return matchedWord;



}



function lookUpWord(givenDict, givenWord) {
    let splitWord = givenWord.split('');

    var cacheFromGiven = "";
    for (let i in splitWord) {
        cacheFromGiven += splitWord[i];

    }

    for (let i = 0; i < givenDict.length; i++) {
        generateOutput(dictionary[i], cacheFromGiven);
    }
}
let store = lookUpWord(dictionary, wordToTest)





