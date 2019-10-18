/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/
function GameObject(game) {
  this.createdAt = game.createdAt;
  this.name = game.name;
  this.dimensions = game.dimensions;
}
GameObject.prototype.destroy = function() {
  return `${this.name} was removed from the game`;
};

function CharacterStats(char) {
  GameObject.call(this, char);
  this.healthPoints = char.healthPoints;
}
CharacterStats.prototype = Object.create(GameObject.prototype);

CharacterStats.prototype.takeDamage = function() {
  return `${this.name} took damage`;
};

function Humanoid(human) {
  CharacterStats.call(this, human);
  (this.team = human.team),
    (this.weapons = human.weapons),
    (this.language = human.language);
}
Humanoid.prototype = Object.create(CharacterStats.prototype);

Humanoid.prototype.greet = function() {
  return `${this.name} offers a greeting in ${this.language}`;
};
