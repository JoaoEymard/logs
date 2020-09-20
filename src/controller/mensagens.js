const router = require('express').Router();

const mdlMensagens = require('../models/mensagens');

router.get('/', (req, res) => {

    const instituicao_id = req.locals.instituicao_id;

    res.json( mdlMensagens.get(instituicao_id) );

});
router.post('/', (req, res) => {

    const instituicao_id = req.locals.instituicao_id;

    res.json( mdlMensagens.post( parseInt(instituicao_id), req.body) );

})

module.exports = router;