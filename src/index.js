var router = require('express').Router();

// Middleware
router.get('/teste', function (req, res, next) {
  global.io.emit('evento', 'hoje')
  res.send();
});

router.use('/zenvia', require('./repository/zenvia/whatsapp/index'));

// Rota não encontrada
// router.use('/', function (req, res) { 
//   res.status(400).json(param_err.router_not_found);
// });

module.exports = router;
