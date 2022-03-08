function techList(array, name) {
    let techs = [];
    for (let stack in array) {
      techs.push((array[stack] = { tech: array[stack], name: name }));
      techs.sort(function (a, b) {
        if (a.tech < b.tech) {
          return -1;
        }
      });
    }
    if (array == 0) {
      return 'Vazio!';
    }
    return techs;
}
module.exports = techList