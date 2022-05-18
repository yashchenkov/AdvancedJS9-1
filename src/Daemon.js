import Character from './Character';

export default class Daemon extends Character{
  constructor() {
    super();
    this.characterStoned = false;
    this.distance = 2;
  }
}
