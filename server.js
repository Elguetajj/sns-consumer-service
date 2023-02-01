'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const { body, validationResult } = require('express-validator');


// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/',[
    body('MessageAttributes.InstanceId').not().isEmpty()
],(req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    const { MessageAttributes : { InstanceId } } = req.body;
    res.json(InstanceId);
});

app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});