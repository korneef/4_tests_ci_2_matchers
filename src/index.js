const aragorn = { name: 'Маг', health: 90 };

function checkHealth(unit) {
  if (unit.health > 50) {
    return 'green';
  } if (unit.health < 50 && unit.health > 15) {
    return 'orange';
  }
  return 'red';
}

checkHealth(aragorn);
