export default class RadiusDegrees{
    static #x;
    static #y;

    static #radius(){
        const pow = Math.pow(this.#x , 2) + Math.pow(this.#y, 2);
        const result = Math.sqrt(pow);
        return result
    }
    static #degrees(){
        const atan2 = Math.atan2(this.#y, this.#x) * (-180 / Math.PI);
        const result = atan2 <= 0 ? 360 + atan2 : atan2;
        return result
    }
    static get(centerX, centerY, x, y){
        this.#x = x - centerX;
        this.#y = y - centerY;
        return [this.#radius(), this.#degrees()]
    }
}