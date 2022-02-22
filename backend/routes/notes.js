const express = require("express");
const { body,validationResult } = require("express-validator");
const router = express.Router();
const fetchuser = require('../middleware/fetchuser');
const Note = require('../models/Note');

// ROUTE 1: post all notes using /addnotes route
router.get('/fetchallnotes', fetchuser ,async (req, res) =>
{
    try
    {
        const notes = await Note.find({user : req.user.id})
        res.json(notes)
    }
    catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }  
})

//Router 2: Add notes using '/addnotes'route

router.post('/addnote', fetchuser,
    [
body('title', 'Enter a valid title').isLength({ min: 3 }),
body('description', 'description must be atleast 5 characters').isLength({ min: 5 })],
    async (req, res) =>
    {
        try
        {
            const { title, description, tag } = req.body;

            //If there are errors, return bad request

            const errors = validationResult(req);
            if(!errors.isEmpty())
            {
                return res.status(400).json({ errors: errors.array() });   
            }
            const note = new Note({
                title, description, tag, user: req.user.id
            })

            const savedNote = await note.save();

            res.json(savedNote)
        }
        catch (error)
        {
            console.error(error.message);
            res.status(500).send("Internal Server Error");
        }
    })

// Router 3: this will update note using '/updatenote/id' endpoint

router.put('/updatenote/:id',[
    body('title', 'Enter a valid title').isLength({ min: 3 }),
    body('description', 'description must be atleast 5 characters').isLength({ min: 5 })], fetchuser,
  
    async (req, res) => {
        try {
            const { title, description, tag } = req.body;

            // create a new object

            const newNote = {};
            if (title) { newNote.title = title };
            if (description) { newNote.description = description };
            if (tag) { newNote.tag = tag };

            //Find the note to be updated

            let note = await Note.findById(req.params.id);
            if (!note) { return res.status(404).send("not found") }
        
            if (note.user.toString() !== req.user.id) {
                return res.status(401).send("not found")
            }

            note = await Note.findByIdAndUpdate(req.params.id, { $set: newNote }, { new: true })
            res.json({ note });
        }
   
        catch (error) {
            console.error(error.message);
            res.status(500).send("Internal Server Error");
        }
    }
)


// Router 4: this will delete note using '/deletenote/id' endpoint

router.delete('/deletenote/:id', fetchuser,
  
    async (req, res) => {
        try {
            const { title, description, tag } = req.body;

            //Find the note to be deleted

            let note = await Note.findById(req.params.id);
            if (!note) { return res.status(404).send("not found") }
        
            //Allow deletion only if user owns id
            if (note.user.toString() !== req.user.id) {
                return res.status(401).send("not found")
            }

            note = await Note.findByIdAndDelete(req.params.id)
            res.json({
                "success": "note has been deleted",
                 note: note
            });
        }
   
        catch (error) {
            console.error(error.message);
            res.status(500).send("Internal Server Error");
        }
    }
)


module.exports=router