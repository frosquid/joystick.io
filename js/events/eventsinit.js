import touchstart from "./handlers/touchstarthandler.js";
import touchmove from "./handlers/touchmovehandler.js";
import touchend from "./handlers/touchendhandler.js";
export default class StartTheJoyStick{
    static on(obj){
        
            obj.canvas.elemen.addEventListener('touchstart', e =>{
                console.log(e)
                touchstart(e,obj)
            })
            obj.canvas.elemen.addEventListener('touchmove', e =>{
                console.log(e)
                touchmove(e,obj)
            })
            obj.canvas.elemen.addEventListener('touchend', e =>{
                console.log(e)
                touchend(e,obj)
            })
            obj.canvas.elemen.addEventListener('touchcancel', e =>{
                console.log(e)
                touchcancel(e,obj)
            })
        
    }
}