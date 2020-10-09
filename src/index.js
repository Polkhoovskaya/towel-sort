module.exports = function towelSort(matrix) {

  if (!matrix || matrix.length === 0) { return []; };

  let array = [];

  matrix.forEach((el, ind) => { (ind % 2 === 0) ? array = [...array, ...el] : array = [...array, ...el.reverse()]; });

  return array;
}
