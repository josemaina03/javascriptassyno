function calculateTotalCost(items) {
    let totalCost = 0;
    for (let i = 0; i < items.length; i++) {
        totalCost += items[i].price;
    }
    return totalCost;
}

const items = [{price: 100}, {price: 90}, {price: 290}];
const totalCost = calculateTotalCost(items);
console.log("Total cost: $" + totalCost.toFixed(2));
