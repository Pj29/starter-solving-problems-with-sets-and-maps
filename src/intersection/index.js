function intersection(a, b) {
  const map = new Map();
  const results = new Set();
  for (let e of a) {
    map.set(e, e);
  }

  for (let e of b) {
    if (map.has(e)) {
      results.add(e);
    }
  }

  return Array.from(results);
}

module.exports = intersection;

/*
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
*/
