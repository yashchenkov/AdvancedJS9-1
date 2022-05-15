import Magician from '../Magician';
import Daemon from '../Daemon';

test('testing Magician attack', () => {
  const mage = new Magician(100);
  mage.setAttack(2);

  expect(mage.getAttack()).toEqual(85);
});

test('testing Daemon attack', () => {
  const mage = new Daemon(100);
  mage.setAttack(2);

  expect(mage.getAttack()).toEqual(85);
});
