import express from 'express';

const router = express.Router();

// get "/" implique qu'on souhaite accéder à la route http://localhost:9000/story
router.get("/", (req,res,next)=>{
    res.json({
        msg: "storypage",
    });
});

// pour la route http://localhost:9000/story/5 (où 5 est l'id de l'article transmis dans l'url)
router.get("/:id", (req,res,next)=>{
    const {id} = req.params.id;
    res.json({
        msg: `storypage de l'article ${id} `,
    });
});

export default router;