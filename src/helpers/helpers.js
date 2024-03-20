export const searchInString = function (query, string) {
  console.log(query, string);
  const splittedQuery = query.toLowerCase();
  const splittedString = string.toLowerCase();
  const regex = new RegExp('\\b' + splittedQuery + '\\b');
  console.log(string.toLowerCase().search(regex));
  //   function searchParts(term, arr) {}
  //   return string
  //     .toLowerCase()
  //     .split(' ')
  //     .find((el) => searchParts(query, el));
  //   return string.toLowerCase().split(' ').includes(query.toLowerCase());
};
