import Cordinate from "../../services/cordinate.js";
import RadiusDegrees from "../../services/radiusdegrees.js";
import {touchCaches} from "../services/touchCaches.js";
import indexIndentifier from "../services/indexindentifier.js";
export default function touchcancel(ev,obj){
    ev.preventDefault()
    const touches = ev.changedTouches;
    for(let i = 0; i < touches.length;i++){
        const idx = indexIndentifier(touches[i].indentifier)
        console.log(touchCaches)
        if(touches[i].indentifier === touchCaches[idx].joyStick.indentifier){
            touchCaches[idx].joyStick.inner.x = touchCaches[idx].joyStick.outter.x ;
            touchCaches[idx].joyStick.inner.y = touchCaches[idx].joyStick.outter.y ;
            touchCaches.splice(idx,1)
        }
        
        
       
    }
    touchCaches = new Array();
}