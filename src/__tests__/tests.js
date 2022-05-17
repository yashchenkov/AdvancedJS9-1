import Magician from '../Magician';
import Daemon from '../Daemon';

test('testing Magician attack', () => {
  const mage = new Magician();
  mage.attack = 100;
  mage.stoned = true;

  expect(mage.attack).toEqual(85);
});

test('testing Daemon attack', () => {
  const daemon = new Daemon();
  daemon.attack = 100;
  daemon.stoned = true;

  expect(daemon.attack).toEqual(85);
});
