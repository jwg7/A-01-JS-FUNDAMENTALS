
////////////////////////////////////////////////////////////
//// JAVASCRIPT JS BASICS
////////////////////////////////////////////////////////////


const x = 6

// 1. Write a function that takes 2 numbers as arguments and returns the sum of both numbers and the variable "x" using without using arrow functions.

function problemOne(num1, num2) {
  return num1 + num2 + x;
}

console.log('Problem One');
console.log(problemOne(2, 3));

////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////

// 2. Write a function that takes 2 numbers as arguments and returns the sum of both numbers and the variable "x", using arrow functions.

const problemTwo = (num1, num2) => {
  return num1 + num2 + x;
};

console.log('Problem Two');
console.log(problemTwo(2, 3));

////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////

// 3. Write a function that returns another function. (use arrow functions please)

const problemThree = (x) => {
  return (y) => x + y;
};

console.log('Problem Three');
console.log(problemThree(2)(3));

////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////

// 4. Given the following code explain why the function that returns from getFunction still has access to variable "y" even when "y" is not a global variable.

// Answer: Because the function that returns from getFunction is a closure. It has access to the variables in the outer function's scope.


const getFunction = () => {
  const y = 5;

  const insideFunc = (a) => y + a;

  return insideFunc;
};

console.log('Problem Four');
console.log(getFunction()(2))

////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////

// 5. write a function that takes "couldThrowError()" as a callback argument.
// within that function call "couldThrowError" and log the result to the console.
// Make sure to handle errors that could be thrown by "couldThrowError()"
// If there is an error log "sorry, there was an error" to the console.

const couldThrowError = () => {
  if (Math.ceil(Math.random() * 2) < 2) {
    throw new Error("Error was thrown");
  }

  return 'success';
};

const handleCouldThrowError = (callback) => {
  try {
    const result = callback();
    console.log(result);
  } catch (error) {
    console.log("Sorry, there was an error:", error.message);
  }
};

handleCouldThrowError(couldThrowError);


//// Handling data:


const userData = [
  {
    id: '111',
    name: 'Peter',
    favorites: {
      food: ['burgers', 'pizza'],
      activites: ['basketball', "baseball"]
    },
  },
  {
    id: '222',
    name: 'John',
    favorites: {
      food: ['burgers', 'tacos'],
      activites: ['football', "golf"]
    },
  },
  {
    id: '333',
    name: 'Mary',
    favorites: {
      food: ['pizza', 'tacos', 'fried chicken'],
      activites: ['volleyball', "softball"]
    },
  }
];

////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////

// 5. Given the data above, use ".map" to make an array of objects.
// Each object should have the id of the user and the amount of favorite foods they have.
// example: [{id: '111', favoriteFoods: 2}]

const favoriteFoodsCount = userData.map(user => {
  return {
    id: user.id,
    favoriteFoods: user.favorites.food.length
  };
});

console.log('Problem Five');
console.log(favoriteFoodsCount);

////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////

// 6. Given the data above, use ".reduce" to make an array of all the names
// of the people who have pizza as one of their favorite foods.
// example: ['Peter', 'Mary']

const pizzaLovers = userData.reduce((accumulator, user) => {
  if (user.favorites.food.includes('pizza')) {
    accumulator.push(user.name);
  }
  return accumulator;
}, []);

console.log('Problem Six');  
console.log(pizzaLovers);


////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////

// 7. Show an an example of a switch statement being used


//// OBJECT AND ARRAY DESTRUCTURING

const userPersonalData = {
  name: 'peter',
  age: '56',
  birthday: 'jan 1st',
};

const userGameData = {
  score: 4546,
  accomplishments: ['won award for being good gamer', 'won 1st win', 'got good score on the weekend'],
};


const displayUserInfo = (dataType) => {
  switch (dataType) {
    case 'personalData':
      const { name, age, birthday } = userPersonalData;
      console.log(`Name: ${name}, Age: ${age}, Birthday: ${birthday}`);
      break;
    case 'gameData':
      const { score, accomplishments } = userGameData;
      console.log(`Score: ${score}, Accomplishments: ${accomplishments.join(', ')}`);
      break;
    default:
      console.log('Invalid data type requested.');
  }
};

console.log('Problem Seven');
displayUserInfo('personalData'); 
displayUserInfo('gameData'); 
displayUserInfo('unknownData');

////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////

// 8. Combine the personalData and userGameData into a user object that is equal to the object below, by using the spread operator:
// const user = {
//  name: 'peter',
//  age: '56',
//  birthday: 'jan 1st',
//  score: 4546,
//  accomplishments: ['won award for being good gamer', 'won 1st win', 'got good score on the weekend'],
// }

const user = {
  ...userPersonalData,
  ...userGameData
};

console.log('Problem Eight');
console.log(user);


////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////

// 9. Make a copy of your new user object but override the birthday to december 31st
 
const newUser = {
  ...user,
  birthday: 'December 31st'
};

console.log('Problem Nine');
console.log(newUser);

////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////

// 10. Use the spread operator to make a copy of the accomplishments array and store it in a new variable

const accomplishmentsCopy = [...user.accomplishments];

console.log('Problem Ten');
console.log(accomplishmentsCopy);


////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////

//  11.Given the object bellow, use object destructuring to get the favorite food value (user.name.favoriteThings.food)
//  and store it in a variable name food

var user1 = {
  name: 'pete',
  age: '32',
  favoriteThings: {
    food: ['pizza', 'tacos', 'burgers', 'italian'],
    movies: [],
  },
 };

 const { favoriteThings: { food } } = user1;

console.log('Problem Eleven');
console.log(food);

 
// 12. Once you have grabbed the favorite foods. Destructure the food array to grab only the first 2 values. //

const { favoriteThings: { food1 } } = user1;

const [firstFood, secondFood] = food;

console.log('Problem Twelve');
console.log(firstFood); 
console.log(secondFood); 


// 13. use object destructuring and the rest operator to transform the following array into 3 variables: name, age, and food. 
//    the food variable should have all the array items starting from the third one.
const data = ['peter', '34', 'apple', 'oranges', 'pizza', 'tacos'];

const [name, age, ...food2] = data;

console.log('Problem Thirteen');
console.log(name); 
console.log(age); 
console.log(food2); 

// 14. use object destructuring to grab the following from the userInfo object: 
// - The user's name and in a constant named userName.
// - The user's favorite food array and name it favoriteFood.
// - The users first favorite thing (cars) and name it favoriteThing
// - The users second favorite thing (jewelry) and name it secondfavoriteThing

const userInfo = {
  name: 'Peter',
  favorites: {
    needs: {
      food:  ['burger', 'pizza', 'tacos', 'fried chicken', 'sushi'],
    },
    wants: {
      things: ['cars', 'jewelry'],
    },
  },
};

var fetchData = () => new Promise((resolve, reject) => {
  console.log('fetchingData from imaginary database')
  setTimeout(() => {
       try {
         // fetchingData from imaginary database
         if((Math.ceil(Math.random() * 2)) < 2){
           throw new Error('Error!')
         }
         resolve({name: 'john', age:42})
        } catch(error) {
          reject(error);
        }
  }, 5000);
});


module.exports =  fetchData;


// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Promises:
// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Function that returns a promise.
var fetchData = () => new Promise((resolve, reject) => {
  console.log('fetchingData from imaginary database')
  setTimeout(() => {
       try {
         // fetchingData from imaginary database
         if((Math.ceil(Math.random() * 2)) < 2){
           throw new Error('Error!')
         }
         resolve({name: 'john', age:42})
        } catch(error) {
          reject(error);
        }
  }, 5000);
});


// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 15. Call fetchData (which returns a promise) and use the .then()  method to log the value the promise resolves with to the javascript console.
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 16. Call fetchData (which returns a promise) and use the async/await method to log the value the promise resolves with to the javascript console.
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////