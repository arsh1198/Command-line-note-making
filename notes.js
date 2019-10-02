const fs = require('fs')
const chalk = require('chalk')

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNotes = notes.find((note) => note.title === title)

    if(!duplicateNotes){
        notes.push({
            title, body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('New note added!'))
    }
    else{
        console.log(chalk.red.inverse('Note title taken! '))
    }
}

const removeNotes = (title) => {
    const notes = loadNotes()
    const duplicate = notes.filter((note) => note.title !== title)

    if(duplicate.length !== notes.length){
        saveNotes(match)
        console.log(chalk.green.inverse(title + ' Removed'))
    }
    else{
        console.log(chalk.red.inverse('Not Found!'))
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }   catch (e){
        return []
    }
}

const listNotes = () =>{
    const notes = loadNotes()
    console.log(chalk.blue.inverse('Your Notes:'))
    notes.forEach(note => {
        console.log(note.title)
    });
}

const readNotes = (title) =>{
    const notes = loadNotes()
    const match = notes.find((note) => note.title === title)
    debugger
    if(match){
        console.log(chalk.inverse(match.title))
        console.log(match.body)
    }
    else{
        console.log(chalk.red.inverse('Not Found!'))
    }
}

module.exports = {
    addNote, removeNotes, listNotes, readNotes
}