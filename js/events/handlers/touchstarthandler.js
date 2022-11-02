import Cordinate from "../../services/cordinate.js";
import RadiusDegrees from "../../services/radiusdegrees.js";
import {touchCaches} from "../services/touchCaches.js";
import radiusIdentifier from "../services/radiusidentifer.js";
export default function touchstart(ev,obj){
    ev.preventDefault()
    const touches = ev.changedTouches;
    for(let i = 0; i < touches.length;i++){
        radiusIdentifier(touches[i],obj);
        console.log(touchCaches)
    }
    touchCaches.sort((a,b) => a.identifier - b.identifier)
}