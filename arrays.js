// Step 1:
// Write a createGroceries function that returns an array with 6 groceries items
function createGroceries() {
  // write your code here...
  let groceries =["Banana", "Bread", "Apple","bannnnnana","apppple","bannnana"]
  return groceries
}

// Step 2:
// Write a getSecondGroceryItem function that returns the second grocery item from `groceries` argument
function getSecondGroceryItem(groceries) {
return groceries[1]
}

// Step 3:
// Write a getGroceriesCount that returns the length of the `groceries` argument
function getGroceriesCount(groceries) {
return groceries.length
}

// Step 4:
// Write a getLastGroceryItem function that returns the last grocery item from `groceries` argument
function getLastGroceryItem(groceries) {
  return groceries[groceries.length-1]

}

// Step 5:
// Write a removeLastGroceryItem function that removes the last grocery item and return it
function removeLastGroceryItem(groceries) {
  // write your code here...
  return groceries.pop();

}

// Step 6:
// Write a addNewGroceries function that adds two new and different grocery items to the end of the groceries argument
// and returns the modified array
function addNewGroceries(groceries, itemOne, itemTwo) {
  // write your code here...
  groceries.push(itemOne)
  groceries.push(itemTwo)
  return groceries
}

// Step 7:
// Write a getFirstThreeGroceryItems function that returns a new array that contains the first three grocery items
function getFirstThreeGroceryItems(groceries) {
  // write your code here...
firstThree = groceries.slice(0,3)
return firstThree
}

// 🌶️🌶️🌶️ **Challenge**

// Step 1:
// Write a deleteThirdItem function that deletes the third item from the groceries argument
// and returns the modified groceries list
function deleteThirdItem(groceries) {
  groceries[2].pop
  return groceries
}

// Step 2:
// Write a insertItemAtBeginning function that inserts a new grocery item at the beginning of the groceries argument
// and returns the modified groceries array
function insertItemAtBeginning(groceries, item) {
  groceries.push(item,[0])
  return groceries
}

// Step 3:
// Write a replaceFirstTwoItems function that replace the first two elements with 'ketchup' and 'chili'
// and return the modified groceries array
function replaceFirstTwoItems(groceries) {
  groceries[0]="ketchup";
  groceries[1]="chili";
  return groceries

}

// DO NOT CHANGE THE LINE OF CODE BELOW
const groceries = createGroceries();

module.exports = {
  groceries,
  createGroceries,
  getSecondGroceryItem,
  getGroceriesCount,
  getLastGroceryItem,
  removeLastGroceryItem,
  addNewGroceries,
  getFirstThreeGroceryItems,
  deleteThirdItem,
  insertItemAtBeginning,
  replaceFirstTwoItems,
};
