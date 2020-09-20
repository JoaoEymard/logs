var router = require('express').Router();

// ES5
var zenvia = require('@zenvia/sdk');

// Initialization with your API token (x-api-token)
const client = new zenvia.Client('OxXpW-3qXmtMlhDOPv119swT23ZiT2jKMVMd');

// Choosing the channel
const whatsapp = client.getChannel('whatsapp');


router.get('/viaWhats', async (req, res) => {

  res.send(1)

});

router.post('/viaWhats', async (req, res) => {

  const msg = req.body.message.contents[1].text;

  if (msg == 'sim') {
    const content = new zenvia.TextContent('diga olá para um robô! ˆˆ');
  } else {
    const content = new zenvia.TextContent('vc ainda pode localizar a ong no link');
  }

  
  // ES8 or Typescript. NodeJS 7.6.0 or higher
  try {
    const response = await whatsapp.sendMessage('cloudy-chord', '5588999114867', content);
    
    res.send(1);
  } catch (error) {
    console.log(error);
  }
  
});

module.exports = router;