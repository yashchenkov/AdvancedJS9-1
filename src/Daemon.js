export default class Daemon {
  constructor(attack) {
  	this.attack = attack;
  	this.realAttack = attack;
  	this.stoned = 0;
  }

  getAttack() {
  	return this.realAttack;
  }

  setAttack(distance) {
    this.setStoned(distance);
    this.realAttack = this.attack;
    if(distance >= 10) {
      this.realAttack = 0;
    } else if(distance === 0) {
      throw new Error('Нельзя атаковать самого себя');
    } else {
      this.realAttack = this.attack*(1 - (distance - 1)*0.1) - this.getStoned(); 
    }
  }

  getStoned() {
  	return this.stoned;
  }
  setStoned(distance) {
  	this.stoned = 0;
  	this.stoned = Math.log2(distance) * 5;
  }
}