export const searchInString = function (query, string) {
  console.log(query, string);
  function isValidRegExp(regexString) {
    try {
      new RegExp(regexString);
      return true;
    } catch (e) {
      return false;
    }
  }
  const formattedQuery = query.toLowerCase().trim();
  if (!isValidRegExp(formattedQuery)) {
    console.log(isValidRegExp(formattedQuery));
    return false;
  }
  const splittedString = string.toLowerCase().split(' ');
  return splittedString.some((el) => el.match(formattedQuery));
};
