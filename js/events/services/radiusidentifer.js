import RadiusDegrees from "../../services/radiusdegrees.js";
import { touchCaches } from "./touchCaches.js";
export default function radiusIdentifier(touches,obj){
        const toucheX = (touches.clientX  * obj.canvas.resolution ) - ((touches.target.offsetLeft  )* obj.canvas.resolution);
        const toucheY = (touches.clientY * obj.canvas.resolution ) - ((touches.target.offsetTop ) * obj.canvas.resolution);
    const joyStick = obj.joyStick;
    for(let i = 0; i < joyStick.length ; i++){
        const [radius,degrees] = RadiusDegrees.get(joyStick[i].outter.x,joyStick[i].outter.y,toucheX,toucheY);
        if(radius <= joyStick[i].outter.radius * obj.canvas.resolution && obj.joyStick[i].mode == 'static'){
            joyStick[i].run = true;
            return touchCaches.push({identifier : touches.identifier, joyStick : obj.joyStick[i]})
        }
        else if( joyStick[i].areaX <= toucheX  && 
            joyStick[i].areaWidth >= toucheX &&
            joyStick[i].areaY <= toucheY &&
            joyStick[i].areaHeight >= toucheY && joyStick[i].mode == 'dynamic'){
            joyStick[i].inner.x = toucheX;
            joyStick[i].inner.y = toucheY;
            joyStick[i].outter.x = toucheX;
            joyStick[i].outter.y = toucheY;
            joyStick[i].run = true;
            return touchCaches.push({identifier : touches.identifier, joyStick : obj.joyStick[i]})
        }
    }
}
