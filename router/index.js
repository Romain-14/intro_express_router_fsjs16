import express from 'express';
import storyRoutes from './story/index.routes.js';
// import userRoutes from './user/index.routes.js';
const router = express.Router();

// affichage de la landing page -> http://localhost:9000
router.get("/", (req, res, next)=>{
    res.json({
        msg: "homepage",
    });
});

// ensuite le router express va vérifier les paramètre url pour orienter vers la bonne route
router.use("/story", storyRoutes);
// router.use("/user", userRoutes);

// si aucune route ne correspond tant en paramètre qu'en verbe http on envoi un notFound
router.all("/*", (req, res, next) => {
    res.json({
        msg: "notFound",
    });
});

export default router;