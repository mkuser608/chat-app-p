function index(req, res){
    const post = "upload course";
    res.send(post);
};

module.exports = {
    index: index
}