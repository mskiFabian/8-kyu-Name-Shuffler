// Write a function that returns a string in which firstname is swapped with last name.

// Example(Input --> Output)

// "john McClane" --> "McClane john"


function nameShuffler(str){
    //Shuffle It
    let [word1, word2] = str.split(' ')
    return [word2, word1].join(' ')
}