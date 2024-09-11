const orderInput = prompt('Enter a list of comma-separated froyo flavors:\nEx. vanilla,coffee,strawberry');
const orderObject = calculateOrderSummary(orderInput);
console.log('The console will output the object like this:');
console.log(orderObject);
console.log('Here is a nicely formatted message:');
console.log(formatOrderSummary(orderObject));

/**
 * Calculates the count of each flavor type
 * 
 * @param {string} order comma-separated input
 * @returns {object} each flavor with the number of times it was included in the order
 */
function calculateOrderSummary(order) {
    const orderArray = order.split(',');
    const orderSummary = {};
    for (const item of orderArray) {
        if (!orderSummary[item]) {
            orderSummary[item] = 1;
        }
        else {
            orderSummary[item]++;
        }
    }
    return orderSummary;

}

/**
 * Formats the order in human-friendly terms
 * 
 * @param {object} order - froyo order by flavor and count
 * @returns a nice message for the customer
 */
function formatOrderSummary(order) {
    let orderSummaryString = '';
    for (const item in orderObject) {
        orderSummaryString += item + ' froyo: ' + orderObject[item] + '\n';
    }
    return 'You have ordered the following: ' + orderSummaryString;
}