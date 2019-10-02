const chalk = require('chalk')
const yargs = require('yargs')
const { addNote, removeNotes, listNotes, readNotes } = require('./notes')

yargs.version('1.1.0') 
// creating commands 
yargs.command(
    {
        command: 'add',
        describe: 'Add a new note',
        builder: {
            title: {
                describe: 'Note title', 
                demandOption: true,
                type: 'string'
            },
            body: {
                describe: 'Note body',
                demandOption: true,
                type: 'string'
            }
        },
        handler(argv) {
            addNote(argv.title, argv.body)}
        }
)

yargs.command(
    {
        command: 'remove',
        describe: 'remove an existing note',
        builder:{
            title:{
                describe: 'Note title',
                demandOption: true,
                type: 'string'
            }
        },
        handler(argv) {
            removeNotes(argv.title);
        }
    }
)

yargs.command(
    {
        command: 'read',
        describe: 'Read a note',
        builder :{
            title: {
                describe: 'Note title',
                demandOption : true,
                type: 'string'
            }
        },
        handler(argv) {
            readNotes(argv.title)
        }
    }
)

yargs.command(
    {
        command: 'list',
        describe: 'list all notes',
        handler(argv) {
            listNotes()
        }
    }
)


yargs.parse()