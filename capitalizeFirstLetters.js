
const capitalizeFirstLetters = (entry) => {
  return entry.length > 0 ? 
    entry.split(' ').map(string=> string[0].toUpperCase() + string.slice(1)).join(' ') 
    : '';
};

module.exports = capitalizeFirstLetters;
