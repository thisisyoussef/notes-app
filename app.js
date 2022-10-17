const yargs = require('yargs');

const notes = require('./notes');
const { addNotes } = require('./notes');

yargs.version('1.1.3');

//Create add command
yargs.command({
    command: "add",
    describe: 'Add a new note',
    builder:
    {
        title:
        {
            describe: 'Note title',
            demandOption: true,
            type: 'string',
        },
        body:
        {
            describe: 'Note body',
            demandOption: true,
            type: 'string',
        }

    },
    handler (argv) {notes.addNote(argv.title, argv.body)}
})

//Create remove command
yargs.command({
    command: "remove",
    builder:
    {
        title:
        {
            describe: 'Note title',
            demandOption: true,
            type: 'string',
        },

    },
    describe: 'Remove a new note',
    handler  (argv) {notes.removeNote(argv.title)}
})

yargs.command({
    command: "read",
    builder:
    {
        title:
        {
            describe: 'Note title',
            demandOption: true,
            type: 'string',
        },

    },
    describe: 'Read a note',
    handler  (argv) {notes.readNote(argv.title)}
})


//Create list command
yargs.command({
    command: "list",
    describe: 'List notes',
    handler () {notes.listNotes()}
})


yargs.parse();