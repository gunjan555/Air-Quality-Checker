function linearRegression(x, weights, iterations, learningRate) {
    x = Number(x);
    iterations = Number(iterations);
    learningRate = Number(learningRate);
    let w = Number(weights[0]);
    let b = Number(weights[1]);

    if (!Array.isArray(weights) || weights.length !== 2 ||
        isNaN(x) || isNaN(w) || isNaN(b) || isNaN(iterations) || isNaN(learningRate)) {
        console.error("❌ Invalid input to linearRegression");
        return null;
    }

    // Simply return the prediction without training
    // (since we're just doing prediction with given weights)
    return w * x + b;
}

function logisticRegression(x, weights, iterations, learningRate) {
    const sigmoid = z => 1 / (1 + Math.exp(-z));
    x = Number(x);
    iterations = Number(iterations);
    learningRate = Number(learningRate);
    let w = Number(weights[0]);
    let b = Number(weights[1]);

    if (!Array.isArray(weights) || weights.length !== 2 ||
        isNaN(x) || isNaN(w) || isNaN(b) || isNaN(iterations) || isNaN(learningRate)) {
        console.error("❌ Invalid input to logisticRegression");
        return null;
    }

    // Simply return the probability without training
    return sigmoid(w * x + b);
}

module.exports = { linearRegression, logisticRegression };