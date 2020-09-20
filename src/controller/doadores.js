const router = require('express').Router();

const mdlDoadores = require('../models/doadores');

router.get('/', (req, res) => {

    const instituicao_id = req.locals.instituicao_id;

    res.json( mdlDoadores.get(instituicao_id) );

});
router.post('/', (req, res) => {

    const instituicao_id = req.locals.instituicao_id;

    res.json( mdlDoadores.post(parseInt(instituicao_id), req.body) );

})

module.exports = router;