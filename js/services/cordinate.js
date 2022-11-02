export default class Cordinate{
    static #centerX;
    static #centerY;
    static #radius;
    static #degrees;
    static get(centerX, centerY, radius, degrees){
        this.#centerX = centerX;
        this.#centerY = centerY;
        this.#radius = radius;
        this.#degrees = degrees;
        return [this.#x(), this.#y()]
    }
    static #x(){
        const cos = Math.cos(this.#degrees * Math.PI / -180);
        const result = this.#radius * cos;
        return result + this.#centerX
    }
    static #y(){
        const sin = Math.sin(this.#degrees * Math.PI / -180);
        const result = this.#radius * sin;
        return result + this.#centerY
    }
}