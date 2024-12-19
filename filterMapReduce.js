//*filter return the value explicitly.wheareas forEach doesnot return anything either explictly or implictly.
//?implicit means returning without return keyword
//?explicit means returning with return keyword.

//?if it is in scope then we must use keyword otherwise 1liner code return automatically
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const filteredNumbers = numbers.filter((number) => number < 4);
console.log(filteredNumbers);

const movies = [
  {
    title: "Inception",
    releaseDate: "2010-07-16",
    genre: "Science Fiction",
    length: 148, // in minutes
  },
  {
    title: "The Shawshank Redemption",
    releaseDate: "1994-09-23",
    genre: "Drama",
    length: 142,
  },
  {
    title: "The Dark Knight",
    releaseDate: "2008-07-18",
    genre: "Action",
    length: 152,
  },
  {
    title: "Pulp Fiction",
    releaseDate: "1994-10-14",
    genre: "Crime",
    length: 154,
  },
  {
    title: "Forrest Gump",
    releaseDate: "1994-07-06",
    genre: "Drama/Romance",
    length: 142,
  },
  {
    title: "The Matrix",
    releaseDate: "1999-03-31",
    genre: "Science Fiction",
    length: 136,
  },
  {
    title: "Fight Club",
    releaseDate: "1999-10-15",
    genre: "Drama",
    length: 139,
  },
  {
    title: "The Godfather",
    releaseDate: "1972-03-24",
    genre: "Crime/Drama",
    length: 175,
  },
  {
    title: "Interstellar",
    releaseDate: "2014-11-07",
    genre: "Science Fiction/Adventure",
    length: 169,
  },
  {
    title: "Gladiator",
    releaseDate: "2000-05-05",
    genre: "Action/Drama",
    length: 155,
  },
];
const userMovieList = movies.filter((movie) => {
  return movie.genre === "Drama";
});
console.log(userMovieList);
console.log(movies);

//!map
//doesnot modify original array

/*//?Purpose
map(): Transforms each element of an array and returns a new array containing the results. It applies a function to every element, allowing for modification or transformation.
filter(): Selects elements from an array that meet a specified condition and returns a new array containing only those elements. It does not modify the original array.
//?Return Value
map(): Returns a new array with the same length as the original array, where each element is the result of applying the provided function.
filter(): Returns a new array that may have a different length (equal to or less than the original), containing only the elements that satisfy the condition defined in the callback function.
//?Usage
map(): Use when you need to perform an operation on each element and want to create a new array based on those transformed values.
filter(): Use when you want to extract certain elements from an array based on specific criteria.*/
const array = [1, 2, 3, 4, 5];
const sortedArray = array
  .map((num) => num + 10)
  .map((num) => num + 10)
  .filter((num) => num > 24);
console.log(sortedArray);
const reducedValue = array.reduce((accumulator, currentValue) => {
  console.log(`accumulator:${accumulator} and currentValue:${currentValue}`);
  return accumulator + currentValue;
}, 1);
console.log(reducedValue);
