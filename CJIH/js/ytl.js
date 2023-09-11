var t = document.getElementById("t")
var h = document.getElementById("h")
var c = document.getElementById("cxk")
var aaa = document.getElementById("aaa")
var lq=document.getElementById("lq")
var out=document.getElementById("out")
var num=1
var s=0
var Xspeed=Math.floor(Math.random()*10+5)
var Yspeed=Math.floor(Math.random()*10+5)
var die=0
setInterval(function(){
    if(num==1){
        t.innerText="杨天"
        h.style.color="red"
        cxk.style.border="8px red double"
    }
    else if(num==2){
        t.innerText="杨天乐"
        h.style.color="yellow"
        cxk.style.border="8px yellow double"
    }
    else if(num==3){
        t.innerHTML="杨"
        h.style.color="blue"
        cxk.style.border="8px blue double"
        num=0
    }
    num=num+1
},1000)
c.onmousedown = function (event) {
    c.style.background="url('../img/y_p.jpg')"
    var move=setInterval(function(){
        lq.style.left=lq.offsetLeft+Xspeed+"px";
        lq.style.top=lq.offsetTop+Yspeed+"px";
        if(lq.offsetLeft<=out.offsetLeft){
            Xspeed=Math.floor(Math.random()*10+5);
        }
        if(lq.offsetLeft>=out.offsetLeft+1000){
            Xspeed=-Math.floor(Math.random()*10+5);
        }
        if(lq.offsetTop<=out.offsetTop){
            Yspeed=Math.floor(Math.random()*10+5);
        }
        if(lq.offsetTop>=out.offsetTop+1000){
            Yspeed=-Math.floor(Math.random()*10+5);
        }
        if(cxk.offsetLeft<out.offsetLeft){
            cxk.style.left=out.offsetLeft
        }
        if(cxk.offsetLeft>out.offsetLeft+1000){
            cxk.style.left=out.offsetLeft+900
        }
        if(cxk.offsetTop<out.offsetTop){
            cxk.style.top=out.offsetTop
        }
        if(cxk.offsetTop>out.offsetTop+900){
            cxk.style.top=out.offsetTop+900
        }
    },10)
    var time=setInterval(function(){
        s=s+0.01
        h.innerHTML="别让羊碰到杨天乐！！！(你坚持了"+s+"秒),(你的X值为"+cxk.offsetLeft+",Y值为"+cxk.offsetTop+",羊的X值为"+lq.offsetLeft+",Y值为"+lq.offsetTop+",死亡数"+die+")"
    },10)
    var disY = event.clientY - this.offsetTop;
    var disX = event.clientX - this.offsetLeft;
    c.onmousemove = function (event) {
        var t = event.clientY - disY;
        var l = event.clientX - disX;
        this.style.top = t + 'px';
        this.style.left = l + 'px';
    }
    c.onmouseup = function () {
        c.onmouseup = c.onmousemove = null;
        clearInterval(time)
        clearInterval(move)
        die=1
    }
    var pd=setInterval(function(){
        var t1 = cxk.offsetTop;
        var l1 = cxk.offsetLeft;
        var r1 = cxk.offsetLeft + cxk.offsetWidth;
        var b1 = cxk.offsetTop + cxk.offsetHeight;

        var t2 = lq.offsetTop;
        var l2 = lq.offsetLeft;
        var r2 = lq.offsetLeft + lq.offsetWidth;
        var b2 = lq.offsetTop + lq.offsetHeight;
        if(b1<t2 || l1>r2 || t1>b2 || r1<l2){// 表示没碰上

            
        }
        else{
            clearInterval(time)
            clearInterval(move)
            clearInterval(pd)
            lq.style.left=1000
            lq.style.top=1000
            Xspeed=Math.floor(Math.random()*10+5)
            Yspeed=Math.floor(Math.random()*10+5)
            die=die+1
            c.style.background="url('../img/y_x.jpg')"
            alert("你失败了(你坚持了"+s+"秒,点击杨天乐重试)")
            s=0
        }
    },1)
}