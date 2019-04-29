

function charCount(data) {
    if (data) {
      return data.split('').length;
    }
  
    return 0;
  }
  
  function wordCount(data) {
    if (data) {
      return data.split(' ').length;
    }
  
    return 0;
  }
  
  app.post('/index', (req, res) => {
    const { text } = req.body
    console.log(text)
  
    const wordCount = countWords(text);
    const charCount = countAlphaNumeric(text);
  
    res.json({wordCount, charCount})
  })