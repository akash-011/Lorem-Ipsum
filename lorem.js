words = ["Loem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipiscing", "elit", "Aenean", "pulvinar", "venenatis", "dictum", "Proin", "tellus", "tortor", 
    "ornare", "ut", "venenatis", "sed", "pulvinar", "non", "tellus", "Nam", "in", "auctor", "odio", "id", "mollis", "purus", "Maecenas", "eget", "risus", "massa", "Maecenas", 
    "lacinia", "est", "vitae", "augue", "aliquet", "vel", "tincidunt", "diam", "pharetra", "Fusce", "quis", "venenatis", "libero", "Mauris", "mollis", "quam"
]

function generateWords(number) {
    let ipsumWords = []
    for(let i =0 ; i < number; i++){
        let randomWord = words[Math.floor(Math.random() * words.length)];
        ipsumWords.push(randomWord);
    }
    return ipsumWords.join(' ');
}

function generateSentence(number) {
    let ipsumSentences = [];
    for (let i = 0 ; i < number; i++){
        let sentence = generateWords(5);
        sentence = sentence + "."
        ipsumSentences.push(sentence)
        
    }
    return ipsumSentences.join(' ')
}

module.exports.words = generateWords;
module.exports.sentences = generateSentence; 
