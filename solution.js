//1 
let board = [
    [1, 2, 3],
    ["quick", "brown", "fox", "jumped", "over", "lazy", "dog"],
    [true, false]
  ];

for (let i = 0; i < board.length; i++){
    for (let j = 0; j < board[i].length; j++){
        console.log(board[i][j]);
    }
}

//2

const doge = {
    name: "Walter",
    breed: "Sausage Dog",
    favoriteFoods: ["fries","treats","dog-food"],
    printFavFood(){
        this.favoriteFoods.forEach(foodItem => console.log(foodItem));
    }
}
console.log(doge.favoriteFoods[1]);
doge.printFavFood();

//3

const recipes = {
    ingredients: {
        butter: "butter",
        sugar: "sugar",
        flour: "flour"
    },
    printRecipe(){
        return Object.values(this.ingredients);
    }
};
recipes.ingredients.ginger = "ginger";
recipes.ingredients.sugar = "brown sugar";
console.log(recipes.ingredients);
console.log(recipes.printRecipe())


