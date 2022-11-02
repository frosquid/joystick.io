import JoyStick from "../joystick.js";
import {Controller} from "./canvasinstances.js"
import Percent from "../../services/percent.js"
const ControllerSize = new Percent(Controller);
export const JoyStick1 = new JoyStick({
    name : 'joystick1',
    canvas : Controller,
    mode : 'static',
    maxOffsetRadius : 100,
    inner : {
        
        x : ControllerSize.max(10) ,
        y : ControllerSize.min(85) ,
        radius : 20,
        color : function (context){
            context.fillStyle='blue';
            context.fill()
        }
    },
    outter : {
        x : ControllerSize.max(10) ,
        y : ControllerSize.min(85) ,
        radius : 50,
        color : function (context){
            context.fillStyle='red';
            context.fill()
        }
    }
})


export const JoyStick2 = new JoyStick({
    name : 'joystick2',
    canvas : Controller,
    mode : 'dynamic',
    areaX : ControllerSize.x(0),
    areaY : ControllerSize.y(0),
    areaWidth : ControllerSize.x(50),
    areaHeight : ControllerSize.y(100),
    maxOffsetRadius : 100,
    inner : {
        
        x : ControllerSize.max(90) ,
        y : ControllerSize.min(85) ,
        radius : 20,
        color : function (context){
            context.fillStyle='blue';
            context.fill()
        }
    },
    outter : {
        x : ControllerSize.max(90) ,
        y : ControllerSize.min(85) ,
        radius : 50,
        color : function (context){
            context.fillStyle='red';
            context.fill()
        }
    }
})
export const JoyStick3 = new JoyStick({
    name : 'joystick3',
    canvas : Controller,
    mode : 'static',
    maxOffsetRadius : 100,
    inner : {
        
        x : ControllerSize.max(90) ,
        y : ControllerSize.min(85) ,
        radius : 20,
        color : function (context){
            context.fillStyle='yellow';
            context.fill()
        }
    },
    outter : {
        x : ControllerSize.max(90) ,
        y : ControllerSize.min(85) ,
        radius : 50,
        color : function (context){
            context.fillStyle='red';
            context.fill()
        }
    }
})


export const JoyStick4 = new JoyStick({
    name : 'joystick4',
    canvas : Controller,
    mode : 'dynamic',
    areaX : ControllerSize.x(0),
    areaY : ControllerSize.y(0),
    areaWidth : ControllerSize.x(50),
    areaHeight : ControllerSize.y(100),
    maxOffsetRadius : 100,
    inner : {
        
        x : ControllerSize.max(90) ,
        y : ControllerSize.min(85) ,
        radius : 20,
        color : function (context){
            context.fillStyle='blue';
            context.fill()
        }
    },
    outter : {
        x : ControllerSize.max(90) ,
        y : ControllerSize.min(85) ,
        radius : 50,
        color : function (context){
            context.fillStyle='red';
            context.fill()
        }
    }
})