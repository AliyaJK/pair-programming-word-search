const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map(ls => ls.join(''));
  for (l of horizontalJoin) {
    if (l.includes(word)) return true;
  };

  // check vertically
  for (let i = 0; i < letters[0].length; i++) {
    let column = '';
    for (let j = 0; j < letters.length; j++) {
      column += letters[j][i];
    }
    if (column.includes(word)) {
      return true;
    }
  }

  // word not found
  return false;
};


module.exports = wordSearch;
