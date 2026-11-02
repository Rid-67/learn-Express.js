const express = require('express');
const app = expres();

app.use(express.static('public'));

app.listen(3000, () => {
    console.log('server is running on http://localhost:3000')
})