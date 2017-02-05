class GuessingGame {
 
    constructor() {
        //left index of range
        this.min = 0;
        //right index of range
        this.max = 0;
    }
 
    setRange(min, max) {
        this.min = min;
        this.max = max;
    }
 
    guess() {
        return this.middleOfRange();
    }
 
    lower() {
        this.max = this.middleOfRange();
    }
 
    greater() {
        this.min = this.middleOfRange();
    }
 
    /**
     * find index of the middle of range
     * @returns {number} index of the middle of current range
     */
    middleOfRange() {
        return Math.ceil((this.min + this.max) / 2);
    }
}
 
module.exports = GuessingGame;