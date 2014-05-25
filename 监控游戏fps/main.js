/**
 * Created by sherlock on 14-5-25.
 */



;(function(win){

    var appEventListener   = win.AppEventListener = EventListener.extend({
        initialize : function(param){
            this.enabled = true;
            this.onBeforeRender = param["beforeRender"]|| this.onBeforeRender;
            this.onAfterRender  = param["afterRender"] || this.onAfterRender;

        },
        //渲染操作前触发
        onBeforeRender : function(){
            return true;
        },
        //渲染操作后触发
        onAfterRender : function(){
            return true;
        }
    });

    var game = win.Game = Class.extend({

        //监听器集合
        listeners : [],

        //添加监听器
        addListener :function(ln){
            this.listeners.push(ln);
        },
        //删除所有监听器
        clearListener: function(){
           this.listeners.length =0;
        },
        //初始化
        initialize  : function(){
            this.paused = false;
        },
        //主循环
        mainloop : function(){

            var ltns = this.listeners;
            //触发监听器渲染前事件
            for(var i=0;i<ltns.length;i++){
                ltns[i].enabled && ltns[i].onBeforeRender();
            }

            //触发监听器渲染后事件
            for(var j=0;j<ltns.length;j++){
                ltns[j].enabled && ltns[j].onAfterRender();
            }
        },
        //开始游戏
        run : function(fps){
            fps = fps || 60;
            var self = this;
                spf = (1000/fps)|0;

            //开启帧数跟踪
            FrameState.start();
            self.tHand = setInterval(function(){
                FrameState.update();
                if(!self.paused){
                    self.mainloop();
                }
            },spf);
        },

        //暂停游戏
        pause :function(){
            this.paused = true;
        },

        //结束游戏
        stop : function(){
            clearInterval(this.tHand);
        }
    });


})(window);
