const { Schema, model } = require('mongoose')

const ReactionSchema = new Schema ({

    reactionId {

        Use Mongoose's ObjectId data type
        Default value is set to a new ObjectId
    }
    
    reactionBody: {

        String
        Required
        280 character maximum
    }
    
    
    username: {

        type: String
        Required
    }

    createdAt: {

        Date
        Set //default value to the current timestamp
        // Use moment in a getter method to format the timestamp on query
        // Schema Settings
        
       // This will not be a model, but rather will be used as the reaction field's subdocument schema in the Thought model.
    }
});

const Reaction = model('Reaction', ReactionSchema)

module.exports = Reaction;