const express = require('express');
const bodyParser = require('body-parser');
const { linearRegression, logisticRegression } = require('./model');

const app = express();
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('🔥 Regression API is up! Use POST /predict/linear or /predict/logistic');
});

app.post('/predict/linear', (req, res) => {
    const { x, weights, iterations, learningRate } = req.body;
    console.log("📩 Received Input:", req.body);

    const prediction = linearRegression(x, weights, iterations, learningRate);
    console.log("📤 Prediction:", prediction);

    if (prediction === null || isNaN(prediction)) {
        return res.status(400).json({ error: "Invalid input or prediction failed." });
    }

    res.json({ prediction });
});

app.post('/predict/logistic', (req, res) => {
    const { x, weights, iterations, learningRate } = req.body;
    console.log("📩 Received Input:", req.body);

    const probability = logisticRegression(x, weights, iterations, learningRate);
    const classification = probability >= 0.5 ? "Bad Air" : "Good Air";
    console.log("📤 Probability:", probability);

    if (probability === null || isNaN(probability)) {
        return res.status(400).json({ error: "Invalid input or probability failed." });
    }

    res.json({ probability, classification });
});

app.listen(3000, () => {
    console.log('✅ Server running on http://localhost:3000');
});