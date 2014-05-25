/**
 * Created by Administrator on 14-5-25.
 */


;(function(win){

    var _scene = window.Scene = Class.extend({

        init : function(arg){
            arg = arg || {};
            //场景名称
            this.name = arg.name || ("Unnamed_"+_scene.SID);
            //位置信息
            this.x = arg.x || 0;
            this.y = arg.y || 0;
            this.w = arg.w || 320;
            this.h = arg.h || 200;

            this.color = arg.color || "black";

            //场景容器
            this.holder  = $('<div id="sc_'+this.name+'" style="position:absolute; overflow : hidden; left:0px; top:0px;"></div>');

            this.cvs = $('<canvas id="cv_'+this.name+'" style="position:absolute; z-index:-1; left:0px; top:0px;"></canvas>');

            this.ctx = this.cvs[0].getContext("2d");
            this.setPos();
            this.setSize();
            this.setColor(this.color);
            this.holder.append(this.cvs);
            $(document.body).append(this.holder);

        },
        //设置位置
        setPos : function(x,y){
            this.x = x || this.x;
            this.y = y || this.y;
            this.holder.css({left:this.x,top :this.y});
        },
        //设置大小
        setSize : function(w,h){
            this.w = w || this.w;
            this.h = h || this.h;
            this.holder.css({width : this.w, height : this.h});
            this.cvs.attr("width",this.w);
            this.cvs.attr("height",this.h);
        },
        setColor : function(color){
            this.color = color || "black";
            this.holder.css({backgroundColor : this.color});
        },

        //更新场景
        update : function(){
            //更新所有精灵
        },
        //执行渲染
        render : function(){
            //渲染所有精灵

        },
        clear : function(){
            //清除背景
            this.ctx.clearRect(0,0,this.w,this.h);
        },
        show : function(){
            this.holder.show();
        },
        hide : function(){
            this.holder.hide();
        },
        setBGImg : function(imgUrl,pattern){
            this.holder.css({backgroundImage:"url('"+imgUrl+"')"});
            switch (pattern){
                case 0 :
                    this.holder.css({backgroundRepeat : "no-repeat"});
                    this.holder.css({backgroundPosition : "center"});
                    break;
                case 1 :
                    this.holder.css({backgroundSize : this.w +"px " +this.h+"px"});
                    break;
            }
        },

        //清除所有相关资源
        clean : function(){
            this.cvs.remove();
            this.holder.remove();
            this.cvs =  this.holder = this.ctx = null;
        }

    });

     //记录scene的编号
     _scene.SID = 0;
    //注册到类工厂中
    ClassFactory.regClass("Scene",_scene);

})(window);