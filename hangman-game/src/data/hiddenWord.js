function hideWord(currentWord) {
    let dashedWord = "";

    for (let i = 0; i < currentWord.length; i++) {
        if (currentWord[i] === " ") {
            dashedWord += " ";
        } else {
            dashedWord += "_";
        }
    }

    return dashedWord;
}

export default hideWord;