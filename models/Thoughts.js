const { Schema, model } = require('mongoose');
const Reaction = require('./Reaction');

const ThoughtsSchema = new Schema ({

    thoughtText: {
        
        type: String,
        required: true
        //Must be between 1 and 280 characters
    },
    createdAt: {
        
        type: Date,
        default: Date.now //default value to the current timestamp
        // Use moment in a getter method to format the timestamp on query
    },
    username: { //(The user that created this thought)
        
        type: String,
        required: true
    },
    
    reactions = [ // (These are like replies)
        Reaction, './Reaction.js'
        // "Like 🙌",
        // "Dislike 😡",
        // "Funny 😂"
        // Array of nested documents created with the reactionSchema
    ]
    
    
//    Schema Settings
//    Create a virtual called reactionCount that retrieves the length of the thought's reactions array field on query.
});

const Thoughts = model('Thoughts', ThoughtsSchema);

module.exports = Thoughts;