var router = require('express').Router();

// ES5
var zenvia = require('@zenvia/sdk');

// Initialization with your API token (x-api-token)
const client = new zenvia.Client('OxXpW-3qXmtMlhDOPv119swT23ZiT2jKMVMd');

// Choosing the channel
const whatsapp = client.getChannel('whatsapp');


router.post('/viaWhats', async (req, res) => {

  const { mensagem } = req.body;
  
  const content = new zenvia.TextContent(mensagem);
  
  // ES8 or Typescript. NodeJS 7.6.0 or higher
  try {
    const response = await whatsapp.sendMessage('cloudy-chord', '5588999114867', content);
    
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
  }
  
});

module.exports = router;