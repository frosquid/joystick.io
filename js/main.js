import { JoyStick1, JoyStick2, JoyStick3, JoyStick4 } from "./assets/intances/joystickinstaces.js";
import { Controller } from "./assets/intances/canvasinstances.js";
import StartTheJoyStick from "./events/eventsinit.js";
import draw from "./services/draw.js"
StartTheJoyStick.on(
    {
        canvas:Controller,
        joyStick :[JoyStick1,JoyStick2,JoyStick3,JoyStick4]
    }
)
draw()