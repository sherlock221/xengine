/**
 * Created by sherlock on 14-5-25.
 */



;(function(win){

    var game = win.Game = Class.extend({

        //初始化
        initialize  : function(){
            this.paused = false;
        },
        //主循环
        mainloop : function(){
           console.log("loop.....");
        },
        //开始游戏
        run : function(fps){
            fps = fps || 60;
            var self = this;
                spf = (1000/fps)|0;
            self.tHand = setInterval(function(){
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
