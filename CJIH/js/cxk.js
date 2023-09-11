var t = document.getElementById("t")
var h = document.getElementById("h")
var c = document.getElementById("cxk")
var aaa = document.getElementById("aaa")
var lq=document.getElementById("lq")
var num=1
var s=0
var speed=-1
setInterval(function(){
    if(num==1){
        t.innerText="菜虚"
        h.style.color="red"
        cxk.style.border="8px red double"
    }
    else if(num==2){
        t.innerText="菜虚坤"
        h.style.color="yellow"
        cxk.style.border="8px yellow double"
    }
    else if(num==3){
        t.innerHTML="菜"
        h.style.color="blue"
        cxk.style.border="8px blue double"
        num=0
    }
    num=num+1
},1000)
c.onmousedown = function (event) {
    var move = setInterval(function(){
        lq.style.left=lq.offsetLeft+speed+"px";
        if(lq.offsetLeft<=0){
            lq.style.left=900
        }
    },2)
    setInterval(function(){
        if(lq.offsetLeft>300){
            var snum=Math.floor(Math.random()*900+0);
            lq.style.top=snum+"px"
        }
    },1000)
    setInterval(function(){
        if(lq.offsetLeft>200){
            lq.style.top=cxk.style.top
        }
    },1500)
    var time=setInterval(function(){
        s=s+0.01
        h.innerHTML="别让篮球碰到菜虚坤！！！(你坚持了"+s+"秒),(你的X值为"+cxk.offsetLeft+",Y值为"+cxk.offsetTop+",篮球的X值为"+lq.offsetLeft+",Y值为"+lq.offsetTop+")"
    },10)
    var disY = event.clientY - this.offsetTop;
    c.onmousemove = function (event) {
        var t = event.clientY - disY;
        this.style.top = t + 'px';
    }
    c.onmouseup = function () {
        c.onmouseup = c.onmousemove = null;
    }
    var remove=setInterval(function(){
        if(lq.offsetTop<cxk.offsetTop+100){
            if(lq.offsetLeft<100){
                if(lq.offsetTop>cxk.offsetTop-100){
                    lq.style.left="900px"
                    lq.style.top="0px"
                    clearInterval(move)
                    clearInterval(time)
                    alert("你失败了(你坚持了"+s+"秒,点击蔡徐坤重试)")
                    s=0
                }
            }  
        }
    },1)
}