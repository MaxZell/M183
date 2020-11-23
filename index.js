const express = require('express');

const app = express();
const port = process.env.PORT || 5000;

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'frontend')));

  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'frontend', 'index.html'));
  });
}

app.listen(port, () => console.log(`Listening on port ${port}`));
