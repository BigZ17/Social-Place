const { Schema, model, Types } = require('mongoose')

const ReactionSchema = new Schema ({

    reactionId: {
        // Use Mongoose's ObjectId data type
        type: Schema.Types.ObjectId,
        // Default value is set to a new ObjectId
        default: () => new Types.ObjectId()
    },
    
    reactionBody: {

        type: String,
        required: true
        
//        280 character maximum
    },
    
    
    username: {

        type: String,
        required: true
    },

    createdAt: {

        type: Date,
        //default value to the current timestamp
        default: Date.now,
        // Use moment in a getter method to format the timestamp on query
        get: createdAtVal => moment(createdAtVal).format('MMM DD, YYYY [at] hh:mm a')
        // Schema Settings
        
       // This will not be a model, but rather will be used as the reaction field's subdocument schema in the Thought model.
    }
});

const Reaction = model('Reaction', ReactionSchema)

module.exports = Reaction;