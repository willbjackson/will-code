const express = require('express');
const app = express();
const PORT = 8080;


app.use(express.json());
app.use(express.static('.'));

function charCounter(data) {
    if (data) {
      return data.split('').length;
    }
  
    return 0;
  }
  
  function wordCounter(data) {
    if (data) {
      return data.split(' ').length;
    }
  
    return 0;
  }
  
  app.post('/index', (req, res) => {
    const { text } = req.body
    console.log(text)
  
    const wordCount = wordCounter(text);
    const charCount = charCounter(text);
  
    res.json({wordCount, charCount})
  })

  app.listen(PORT, () => console.log(`Server up on PORT ${PORT}`));
