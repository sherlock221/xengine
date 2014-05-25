/**
 * Created by Administrator on 14-5-25.
 * 可被渲染的对象
 */

(function(win){

    var _renderObj = win.RenderObj = Class.extend({

        init : function(name){
            this.name = name || ("Unnamed_"+(_renderObj.SID++));
            //拥有者 指向场景对象
            this.owner = null;
            //x y 方向坐标
            this.x = 0;
            this.y = 0;
            this.w = 0;
            this.h = 0;

            //xy方向速度
            this.dx = 0;
            this.dy = 0;

            //xy方向加速度
            this.vx = 0;
            this.vy =0;

            //角度
            this.deg = 0;
            //z-index
            this.zIdx = 0;
            //是否可见
            this.isVisible = true;
            //是否可移除
            this.canRemove = false;
        },

        //设置位置
        moveTo : function(x,y){
            this.x = x || this.x;
            this.y = y || this.y;
        },
        //移动
        move  : function(xoff,yoff){
            this.x += xoff;
            this.y += yoff
        },

        //移动一小步
        moveStep : function(){
            this.dx += this.vx;
            this.dy += thid.vy;
            this.x += thid.dx;
            this.y += thid.dy;
        },
        //旋转 deg度
        rotate : function(deg){
            this.deg = deg;
        },

        //更新方法 每一帧调用
        update : function(){
            this.moveStep();
        },

        //渲染方法 每一帧调用 ctx 是canvas环境
        render : function(ctx){
            return;
        }

    });

        _renderObj.SID = 0;
        _renderObj.ClassName = "RenderObj";

        //注册到工厂中
        ClassFactory.regClass(_renderObj.ClassName,_renderObj);

})(window);
