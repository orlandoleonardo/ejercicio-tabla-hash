var texto = "The Learning Network provides daily resources for teaching and learning with The New York Times, including lesson plans, questions for writing and discussion, quizzes, monthly contests and more. Join the conversation by commenting on any post"

function normalize(text){
    return text.toLowerCase().replace(",","").replace(".","")
}

function countWords (texto){
    var dictionary = {}
    var separatedWords = normalize(texto).split(" ")

    separatedWords.forEach(word => {
        if (word in dictionary){
            dictionary[word] += 1
        } else {
            dictionary[word] = 1
        }
    });
    console.log(dictionary)
    }



countWords(texto)