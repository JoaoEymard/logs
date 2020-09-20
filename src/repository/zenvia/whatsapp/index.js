var router = require('express').Router();

// ES5
var zenvia = require('@zenvia/sdk');

// Initialization with your API token (x-api-token)
const client = new zenvia.Client('OxXpW-3qXmtMlhDOPv119swT23ZiT2jKMVMd');

// Choosing the channel
const whatsapp = client.getChannel('whatsapp');


router.get('/viaWhats', async (req, res) => {

    // Creating a text content
    const content = new zenvia.TextContent(req.query.msg || 'diga olá para um robô! ˆˆ');
    
    // ES8 or Typescript. NodeJS 7.6.0 or higher
    try {
      const response = await whatsapp.sendMessage('cloudy-chord', '5588999114867', content);
      
      console.log(response);
      res.json(response);
    } catch (error) {
      console.log(error);
    }
    
});

module.exports = router;