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

function show(req, res) {
    const id = req.params.id;

    models.Post.findByPk(id).then(result => {
        if(result){
            res.status(200).json(result) 
        }else{
            res.status(404).json({
                message: "Post not found!"
            })
        }
        res.status(200).json(result)
    }).catch(error => {
        res.status(500).json({
            message: "Something went wrong!"
        })
    });
}

function getAll(req, res){
    models.Post.findAll().then(result => {
        res.status(200).json(result)
    }).catch(error => {
        res.status(500).json({
            message: "Something went wrong!"
        })
    });
}

function update(req, res){
    const id = req.params.id;

    const updatedPost = {
        title: req.body.title,
        content: req.body.content,
        videoUrl: req.body.videoUrl,
        categoryId: req.body.categoryId,
        userId: 1
    }

    models.Post.update(updatedPost, {where: {id: id, userId: 1}}).then(result => {
        res.status(200).json({
            message: "Updated Successfully!",
            post: result
        })
    }).catch(error => {
        res.status(500).json({
            message: "Something went wrong!",
            post: error
        })
    });
}

function Delete(req, res){
    const id = req.params.id;
    const userId = 1;

    models.Post.destroy({where: {id: id, userId: 1}}).then(result => {
        res.status(200).json({
            message: "Post Deleted Successfully!",
            post: result
        })
    }).catch(error => {
        res.status(500).json({
            message: "Something went wrong!",
            error: error
        })
    });
}

module.exports = {
    save: save,
    show: show,
    getAll: getAll,
    update: update,
    Delete: Delete
}