const router = require("express"). Router();
const {
    getAllThoughts,
    getThoughtById,
    postThought,
    updateThought,
    deleteThought
} = require()
router
.route('/')
// GET to get all thoughts
.get(getAllThoughts)
// POST to create a new thought (don't forget to push the created thought's _id to the associated user's thoughts array field)
.post(postThought)
// // example data
// {
    //   "thoughtText": "Here's a cool thought...",
    //   "username": "lernantino",
    //   "userId": "5edff358a0fcb779aa7b118b"
    // }
    
    // GET to get a single thought by its _id
    .get(getThoughtById)
    // PUT to update a thought by its _id
    .put(updateThought)
    // .DELETE to remove a thought by its _id
    .delete(deleteThought);