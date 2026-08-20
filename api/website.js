const fs = require('fs');
const path = require('path');

module.exports = (req, res) => {
  try {
    const file = path.join(process.cwd(), 'website file.html');
    const html = fs.readFileSync(file, 'utf8');
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.setHeader('Cache-Control', 'no-store, max-age=0, must-revalidate');
    res.status(200).send(html);
  } catch (error) {
    console.error(error);
    res.status(500).send('Birthday page unavailable 💗');
  }
};
