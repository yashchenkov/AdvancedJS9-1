import Character from './Character';

export default class Daemon extends Character{
  constructor() {
    super();
    this.stoned = false;
    this.distance = 2;
  }
}
