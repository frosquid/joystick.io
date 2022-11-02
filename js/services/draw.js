import { JoyStick1,JoyStick2,JoyStick3,JoyStick4 } from "../assets/intances/joystickinstaces.js"
import { Controller } from "../assets/intances/canvasinstances.js"
export default function draw(){
    requestAnimationFrame(draw)
    Controller.context.clearRect(0, 0, Controller.width, Controller.height)
    JoyStick1.on()
    JoyStick2.on()
    JoyStick3.on()
    JoyStick4.on()
  
}