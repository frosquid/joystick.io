import Cordinate from "../../services/cordinate.js";
import RadiusDegrees from "../../services/radiusdegrees.js";
import {touchCaches} from "../services/touchCaches.js";
import indexIndentifier from "../services/indexindentifier.js";
export default function touchmove(ev,obj){
    ev.preventDefault()
    const touches = ev.changedTouches;
    if(touchCaches[0]){
        for(let i = 0; i < touches.length;i++){
            const toucheX = (touches[i].clientX - touches[i].target.offsetLeft )* obj.canvas.resolution ;
            const toucheY = (touches[i].clientY - touches[i].target.offsetTop)* obj.canvas.resolution ;
            const idx = indexIndentifier(touches[i].indentifier);
            console.log(touchCaches)
            const [radius,degrees] = RadiusDegrees.get(touchCaches[idx].joyStick.outter.x,touchCaches[idx].joyStick.outter.y,toucheX,toucheY);
            const [x,y] = Cordinate.get(touchCaches[idx].joyStick.outter.x,touchCaches[idx].joyStick.outter.y,touchCaches[idx].joyStick.maxOffsetRadius,degrees);
            if(touches[i].indentifier === touchCaches[idx].joyStick.indentifier && radius <= touchCaches[idx].joyStick.maxOffsetRadius){
                touchCaches[idx].joyStick.inner.x = (touches[i].clientX - touches[i].target.offsetLeft )* obj.canvas.resolution ;
                touchCaches[idx].joyStick.inner.y = (touches[i].clientY - touches[i].target.offsetTop)* obj.canvas.resolution ;
            }
            else if(touches[i].indentifier === touchCaches[idx].joyStick.indentifier && radius >= touchCaches[idx].joyStick.maxOffsetRadius){
                touchCaches[idx].joyStick.inner.x = x;
                touchCaches[idx].joyStick.inner.y = y;
            }
            
            console.log(touchCaches)
        }
    }
}