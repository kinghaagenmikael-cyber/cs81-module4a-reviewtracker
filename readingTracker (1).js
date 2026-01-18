// Weekly reading log
// This array stores reading data for each day of the week.
// Each object represents one reading session with a day, book title, and minutes read.
const readingLog = [
  { day: "Monday", book: "Dune", minutes: 30 },
  { day: "Tuesday", book: "1984", minutes: 20 },
  { day: "Wednesday", book: "Dune", minutes: 25 },
  { day: "Thursday", book: "The Hobbit", minutes: 40 },
  { day: "Friday", book: "1984", minutes: 15 }
];

/*
This function adds a new reading entry to the reading log.
It takes the day, book title, and minutes read as inputs.
The function creates a new object and appends it to the readingLog array.
*/
function addReadBook(day, book, minutes) {
  // Create a new reading entry using the provided arguments
  const newEntry = { day, book, minutes };

  // Add the new entry to the existing reading log array
  readingLog.push(newEntry);
}

/*
This function calculates the total number of minutes spent reading.
It loops through each reading entry in the log and sums the minutes.
The function returns the total reading time as a number.
*/
function totalReadingMinutes(log) {
  let total = 0;

  // Loop through each object in the reading log array
  for (let entry of log) {
    // Add the minutes from each reading session to the total
    total += entry.minutes;
  }

  // Return the final total reading time
  return total;
}

/*
This function determines which book was read most frequently.
It counts how many times each book appears in the log.
The function returns the title of the most frequently read book.
*/
function mostReadBook(log) {
  // Object used to store how many times each book appears
  const bookCounts = {};

  // Loop through the log and count each book
  for (let entry of log) {
    // If the book does not exist in the object, initialize it
    if (!bookCounts[entry.book]) {
      bookCounts[entry.book] = 1;
    } else {
      // Otherwise, increase the count for that book
      bookCounts[entry.book]++;
    }
  }

  let maxBook = null;
  let maxCount = 0;

  // Loop through the bookCounts object to find the most frequent book
  for (let book in bookCounts) {
    if (bookCounts[book] > maxCount) {
      maxBook = book;
      maxCount = bookCounts[book];
    }
  }

  // Return the book that was read the most
  return maxBook;
}

/*
This function will print a daily summary of reading activity.
It should loop through the reading log and logs a formatted message for each entry.
The output shows the day, minutes read, and the book title.
*/
function printDailySummary(log) {
  // Loop through each reading entry and display its details
  for (let entry of log) {
    console.log(`${entry.day}: ${entry.minutes} mins reading "${entry.book}"`);
  }
}

// IMPROVEMENT SUGGESTION:
// The readingLog array is accessed globally in some functions and passed as a parameter in others.
//  all functions could accept the log as a parameter
// instead of relying on the global variable.

// Example usage
// Add a new reading session to test the addReadBook function
addReadBook("Saturday", "Dune", 50);

// adding an additional reading entry to further test the system
addReadBook("Sunday", "The Hobbit", 35);

// Prints a summary of daily reading activity
printDailySummary(readingLog);

// Displays total minutes read for the week
console.log("Total minutes read:", totalReadingMinutes(readingLog));

// Displays the most frequently read book
console.log("Most read book:", mostReadBook(readingLog));
