const sortUnits = (a, b) => {
  if (a.health < b.health) {
    return 1;
  } if (b.health < a.health) {
    return -1;
  }
  return 0;
};

const sortArray = (units) => {
  units.sort(sortUnits);
};

export default sortArray;
