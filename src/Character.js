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

      let realAttack = this.characterAttack * (1 - (this.distance - 1)*0.1);;
      return this.hasOwnProperty('characterStoned') && this.characterStoned ? realAttack - Math.log2(this.distance) * 5 : realAttack;
    } 
    return this.characterAttack;
  }

  set attack(attack) {
    this.characterAttack = attack;
  }

  get stoned() {
    if(this.hasOwnProperty('characterStoned')){
      return this.characterStoned;
    }
  }

  set stoned(stoned) {
    if(this.hasOwnProperty('characterStoned')) {
      this.characterStoned = stoned;
    }
  }
}
