const router = require('express').Router();

const { middleware_save_instituicao } = require('./utils/index');

// Middleware
// router.get('/teste', function (req, res, next) {
//   global.io.emit('evento', 'hoje')
//   res.send();
// });

router.use('/zenvia', require('./repository/zenvia/whatsapp/index'));

router.use('/instituicoes', middleware_save_instituicao, require('./controller/instituicao'));

router.use('/instituicoes/:instituicao_id/doadores', middleware_save_instituicao, require('./controller/doadores'));

router.use('/instituicoes/:instituicao_id/mensagens', middleware_save_instituicao, require('./controller/mensagens'));

module.exports = router;
