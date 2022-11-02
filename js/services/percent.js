export default class Percent{
    constructor(canvas){
        this.canvas = canvas;
    }
    x(percent){
        return this.canvas.width/100*percent
    }
    y(percent){
        return this.canvas.height/100*percent
    }
    min(percent){
        console.log(this.canvas)

        if(this.canvas.width < this.canvas.height){
            return this.canvas.width/100*percent
        }
        else{
            return this.canvas.height/100*percent
        }

    }
    max(percent){
        if(this.canvas.width > this.canvas.height){
            return this.canvas.width/100*percent
        }
        else{
            return this.canvas.height/100*percent
        }
    }
}