const fs = require('fs');
const chalk = require('chalk');
const { title } = require('process');


const readNote = (title) => {
    const notes= loadNotes();
    const note = noteSearch(notes, title);
    if(note!= undefined)
    {
    console.log(chalk.bgGreen(note.body));
    } 
    else
    {
    console.log(chalk.bgRed("Note doesn't exist"));
    }
}

const listNotes = () => {
    const notes= loadNotes();
    console.log(chalk.bgGreen("Your notes: "))
    notes.forEach(note => {
        console.log(note.title);
    });

}

const duplicateExists = (notes,title) =>
   {
   const duplicateNotes = notes.find((note)=> note.title === title);
   return duplicateNotes != null;
    }

const noteSearch = (notes,title)  => {
    const foundNote = notes.find((note) => note.title === title);
    return foundNote;
 }

const addNote =  (title, body) =>{
    const notes = loadNotes();

    debugger

    if(duplicateExists(notes,title))
    {
        console.log(chalk.bgRed("Note title already taken"));
    }
    else
    {
    notes.push({ 
        title: title, 
        body: body 
    });
    uploadNote(notes);
    console.log(chalk.bgGreen("Added note!"));
}
}

const removeNote =  (title)  => {
    const notes = loadNotes();
    const newNotes = notes.filter(function(note)
    {
         return note.title != title;
    })
    if(newNotes.length === notes.length )
    {   
        console.log(chalk.bgRed("Can't find note!"));
    }
    else
    {
        console.log(chalk.bgGreen("Removed note!"));
        uploadNote(newNotes);
    }
}
const clearNotes =  () => {
    uploadNote([]);
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync("notes.json");
        const data = JSON.parse(dataBuffer);
        return data;
    }
    catch (e) {
        return {}
    }
}

const uploadNote = (data) => {
    const sData = JSON.stringify(data);
    fs.writeFileSync("notes.json", sData);
}

module.exports = {
    listNotes: listNotes,
    addNote: addNote,
    removeNote: removeNote,
    readNote: readNote,
}; 