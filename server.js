const express = require('express');

const app = express()

const PORT = process.env.PORT || 3040;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

app.get('/',(req, res) => res.end('API Running'));