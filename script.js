//A random message generator
// Author: Wajahat Zia

function genRandomNum(num){
    //Returns a number from 0 to num - 1
    return Math.floor(Math.random () * num)
}

//Store messages to pick randomly 
const messagesObject = {
    dayFeel : ['good', 'bad', 'sad', 'happy'],
    advice : ['be productive', 'enjoy more', 'help someone smile', 'do what makes you happy'],
    fortune: ['good luck', 'great luck', 'ok luck', 'bad luck']
}

//Store selected messages from messagesObject
let displayMessage = []

//Loop to random select and push message into displayMessages
for (array in messagesObject){
    let index = genRandomNum(messagesObject[array].length)

    switch(array){
        case 'dayFeel':
            displayMessage.push(`You are having a ${messagesObject[array][index]} day.`)
            break
        case 'advice':
            displayMessage.push(`You should ${messagesObject[array][index]}.`)
            break
        case 'fortune':
            displayMessage.push(`You have ${messagesObject[array][index]}`)
            break
        default:
            displayMessage.push('There is not enough info.')
    }
}

//Combine displayMessage into one string and output to console
function showMessage(array){
    const joinedMessage = array.join('\n')
    console.log(joinedMessage)
}

showMessage(displayMessage)
