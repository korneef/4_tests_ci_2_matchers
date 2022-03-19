import sortUnits from '../unit_health';

test('sort units', () => {
  const units = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'орк', health: 10 },
  ];
  sortUnits(units);
  const received = units;
  const expected = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
    { name: 'орк', health: 10 },
  ];
  expect(received).toEqual(expected);
});
