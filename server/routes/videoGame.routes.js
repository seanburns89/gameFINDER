const videoGameController = requre('../controllers/videoGame.controllers')

module.exports = (app => {
    app.post('/api/videoGame', videoGameController.create);
    app.get('/api/videoGame', videoGameController.getAll);
})oGameController = requre('../controllers/videoGame.controllers')

module.exports = (app => {
    app.post('/api/videoGame', videoGameController.create);
    app.get('/api/videoGame', videoGameController.getAll);
})