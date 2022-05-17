export default class Character {
  constructor() {

  }

  get attack() {
    if(this.hasOwnProperty('distance')){
      if(this.distance >= 10) {
        return 0;
      } else if(this.distance === 0) {
        throw new Error('Нельзя атаковать самого себя');
      }

      let realAttack = this.attack*(1 - (this.distance - 1)*0.1);;
      return this.hasOwnProperty('stoned') && this.stoned ? realAttack - Math.log2(this.distance) * 5 : realAttack;
    } 
    return this.attack;
  }

  set attack(attack) {
    this.attack = attack;
  }

  get stoned() {
    if(this.hasOwnProperty('stoned')){
      return this.stoned;
    }
  }

  set stoned(stoned) {
    if(this.hasOwnProperty('stoned')) {
      this.stoned = stoned;
    }
  }
}
