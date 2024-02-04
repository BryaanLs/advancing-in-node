/**
 * @class People
 * @classdesc This class create a people
 */
class People {
  /**
   * @param {string} name
   * @param {string} surname
   */
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
    this.fullName = name + " " + surname;
  }
  /**
   * @method
   * @param {string} msg
   * @return {string} log with msg
   */
  talk = (msg) => {
    const fullMsg = `-> ${this.name} talk: ${msg}`;
    return console.log(fullMsg);
  };
}

const p1 = new People("Bryan", "Soares");
