const models = require('../models');

function save(req, res){
    const upload = {
        title: req.body.title,
        content: req.body.content,
        videoUrl: req.body.videoUrl,
        categoryId: req.body.categoryId,
        userId: 1

    }

    models.Post.create(upload).then(result => {
        res.status(201).json({
            message: "Upload Successfully!",
            upload: result
        });
    }).catch(error => {
        res.status(500).json({
            message: "Something went wrong",
            upload: error
        });
    })

}



module.exports = {
    save: save,
}