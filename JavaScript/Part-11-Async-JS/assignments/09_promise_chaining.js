// 09. Promise Chaining
function processOrder(orderId) {
    return new Promise((resolve) => {
        resolve(`Order #${orderId} Created`);
    });
}

processOrder(101)
    .then((res) => {
        console.log(res);
        return "Payment Processed";
    })
    .then((res) => {
        console.log(res);
        return "Shipping Label Generated";
    })
    .then((res) => {
        console.log(res);
    });
