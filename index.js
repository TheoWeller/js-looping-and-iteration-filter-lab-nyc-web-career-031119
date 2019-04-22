// Code your solution in this file
function findMatching(collection, attribute) {
  newArray = collection.filter(name => name.toLowerCase() === attribute.toLowerCase());
  return newArray;
};
