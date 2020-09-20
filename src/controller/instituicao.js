const router = require('express').Router();

const mdlInstituicao = require('../models/instituicao');

router.get('/rank', (req, res) => {

    res.json( mdlInstituicao.rank() );

});
router.get('/:instituicao_id', (req, res) => {

    res.json( mdlInstituicao.get(req.params.instituicao_id) );

});
router.post('/', (req, res) => {

    res.json( mdlInstituicao.post(req.body) );

})

module.exports = router;