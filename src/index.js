var { Router } = require('express');

var router = Router();

// Middleware
router.get('/teste', function (req, res, next) {
  global.io.emit('evento', 'hoje')
  res.send();
});

// Rota não encontrada
// router.use('/', function (req, res) { 
//   res.status(400).json(param_err.router_not_found);
// });

module.exports = router;
