function intersection(a, b) {
  const map = new Map();
  const resultSet = new Set();

  for (const e of a) {
    map.set(e, true);
  }

  for (const e of b) {
    if (map.has(e)) {
      resultSet.add(e);
    }
  }

  const intersectionArray = Array.from(resultSet);

  return intersectionArray;
}

module.exports = intersection;
