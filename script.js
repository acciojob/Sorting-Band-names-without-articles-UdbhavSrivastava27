//your code here

let bandNames = ['The Beatles', 'Pink Floyd', 'Led Zeppelin', 'The Rolling Stones'];

// Function to remove articles from band names
function removeArticles(name) {
  // List of articles to be excluded
  const articles = ['a', 'an', 'the'];

  // Splitting the name into words
  const words = name.split(' ');

  // Filtering out articles from the words array
  const filteredWords = words.filter(word => !articles.includes(word.toLowerCase()));

  // Joining the filtered words to form the updated name
  const updatedName = filteredWords.join(' ');

  return updatedName;
}

// Sorting the band names in lexicographic order excluding articles
bandNames.sort((a, b) => removeArticles(a).localeCompare(removeArticles(b)));

// Selecting the <ul> element by its id
const bandList = document.getElementById('band');

// Adding band names to the <ul> element as <li> elements
bandNames.forEach(name => {
  const listItem = document.createElement('li');
  listItem.textContent = name;
  bandList.appendChild(listItem);
});
