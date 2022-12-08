/*
Email RegEx
(yourname)@(domain).(extension)(.again)
yourname => any letters, numbers, dots and/or hyphens
domain => any letters, numbers and/or hyphens
extension => any letters 
.again => a dot(.) then any letters
*/

exports.validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(/^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,12})(\.[a-z]{2,12})?$/);
};

exports.validateLength = (text, min, max) => {
  if (text.length > max || text.length < min) {
    return false;
  }
  return true;
};
