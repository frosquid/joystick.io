import Cordinate from "../../services/cordinate.js";
import RadiusDegrees from "../../services/radiusdegrees.js";
import {touchCaches} from "../services/touchCaches.js";
import indexIndentifier from "../services/indexindentifier.js";
export default function touchend(ev,obj){
    ev.preventDefault()
    const touches = ev.changedTouches;
    if(touchCaches[0]){
        for(let i = 0; i < touches.length;i++){
            const idx = indexIndentifier(touches[i].indentifier)
            console.log(touchCaches)
            if(touches[i].indentifier === touchCaches[idx].joyStick.indentifier && touchCaches[idx].joyStick.mode == 'static'){
                touchCaches[idx].joyStick.inner.x = touchCaches[idx].joyStick.outter.x ;
                touchCaches[idx].joyStick.inner.y = touchCaches[idx].joyStick.outter.y ;
                touchCaches[idx].joyStick.run = false;
                touchCaches.splice(idx,1)
            }
            else if(touches[i].indentifier === touchCaches[idx].joyStick.indentifier && touchCaches[idx].joyStick.mode == 'dynamic'){
                touchCaches[idx].joyStick.run = false;
                touchCaches.splice(idx,1)
            }
            
            console.log(touchCaches)
        }
    }
}