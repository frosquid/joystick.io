export default class JoyStick{
    constructor(set){
        this.name = set.name;
        this.canvas = set.canvas;
        this.mode = set.mode;
        this.run = false;
        this.maxOffsetRadius = set.maxOffsetRadius * this.canvas.resolution;
        switch(set.mode){
            case 'static' :
                this.inner = {
                    x : set.inner.x ,
                    y : set.inner.y ,
                    radius : set.inner.radius,
                    color : set.inner.color
                    };
                this.outter = {
                    x : set.outter.x ,
                    y : set.outter.y ,
                    radius : set.outter.radius,
                    color : set.outter.color
                    };
            break
            case 'dynamic' :
                this.areaX = set.areaX;
                this.areaY = set.areaY;
                this.areaWidth = set.areaWidth;
                this.areaHeight = set.areaHeight;
                this.inner = {
                    x : 0 ,
                    y : 0 ,
                    radius : set.inner.radius,
                    color : set.inner.color
                    };
                this.outter = {
                    x : 0 ,
                    y : 0 ,
                    radius : set.outter.radius,
                    color : set.outter.color
                    };
                break
        }
        
        this.context = this.canvas.context;
        this.on()
    }
    on(){
        this.context.beginPath();
        this.context.arc(this.outter.x, this.outter.y, this.outter.radius * this.canvas.resolution, 0, 2 * Math.PI);
        this.mode == 'static'?this.outter.color(this.context):this.run && this.mode == 'dynamic'?this.outter.color(this.context):0;        
        this.context.beginPath();
        this.context.arc(this.inner.x, this.inner.y, this.inner.radius * this.canvas.resolution, 0, 2 * Math.PI);
        this.mode == 'static'?this.inner.color(this.context):this.run && this.mode == 'dynamic'?this.inner.color(this.context):0;
    }
    update(set){
        this.name = set.name;
        this.canvas = set.canvas;
        this.inner = {
            x : set.inner.x ,
            y : set.inner.y ,
            radius : set.inner.radius,
            color : set.inner.color
            };
        this.outter = {
            x : set.outter.x ,
            y : set.outter.y ,
            radius : set.outter.radius,
            color : set.outter.color
            };
        this.context = this.canvas.context;
        this.direction = {
                top : {
                   left : set.direction.top.left,
                   right : set.direction.top.right
                },
                bottom : {
                    left : set.direction.bottom.left,
                    right : set.direction.bottom.right
                },
                left : {
                    top : set.direction.left.top,
                    bottom : set.direction.left.bottom
                },
                right : {
                    top : set.direction.right.top,
                    bottom : set.direction.right.bottom
                }
        };
        this.status = {
            start : set.status.start,
            move : set.status.move,
            end : set.status.end,
            cancel : set.status.cancel
        }
    }
}