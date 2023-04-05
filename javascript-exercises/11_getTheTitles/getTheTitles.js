const getTheTitles = function(books) {
    titles = [];
    for (let i = 0; i < books.length; i++) {
        title = books[i].title;
        titles.push(title)
    }
    return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
