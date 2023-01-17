var middle = document.getElementById("middle");
var l = middle.offsetLeft;
middle.timer=setInterval(function (){
    l=l-1
    if(l<=-5000){
        l=0
    }
    middle.style.left = l + "px";
},3);
middle.onmouseover=function(){
    clearInterval(middle.timer)
}
middle.onmouseleave= function () {
    middle.timer = setInterval(function (){
        l -= 1;
        if (l <= -5000){
            l = 0;
        }
        middle.style.left = l + "px";
    },3);
}
var dotArr = document.getElementsByClassName("dot");
for (var i = 0; i < dotArr.length; i++){
    dotArr[i].index = i;
    dotArr[i].onclick = function () {
        index = this.index;
        fnTab(index);
    }}function fnTab(index) {
        for(var i = 0; i < dotArr.length; i++){
        dotArr[i].className = "dot";}        
dotArr[index].className = "dot active";}
d_1.onclick=function(){
    l=0;
}
d_2.onclick=function(){
    l=-2000;
}
d_3.onclick=function(){
    l=-4000;
}
var dm=document.getElementsByClassName('dm')
setInterval(function(){
    for (var i = 0; i < dm.length; i++){
        dm[i].l = dm[i].offsetLeft
        dm[i].l=dm[i].l+1
        dm[i].style.left=dm[i].l+'px'
        if(dm[i].l>=2000){
            dm[i].style.top=Math.floor(Math.random()*500+0)+"px"
            dm[i].l=Math.floor(Math.random()*-1000+0)
            dm[i].style.left=dm[i].l+'px'
            var c=Math.floor(Math.random()*3+1)
            if(c==1){
                dm[i].style.color="gray"
            }
            else if(c==2){
                dm[i].style.color="white"
            }
            else{
                dm[i].style.color="purple"
            }
        }
    }
},50)
var l=document.getElementById('l')
var p=document.getElementById('photosWrap')
var asdf=0
l.onclick=function(){
    if(asdf==0){
        p.style.display="block"
        asdf=1
        this.innerHTML="收起"
    }
    else{
        p.style.display="none"
        asdf=0
        this.innerHTML="内容阅览(点图片下方圆点可滚动阅览)"
    }
}
var x=document.getElementById('xyx')
x.onclick=function(){
    window.location.href="html小游戏/小游戏.html"
}
var j=document.getElementById('jsq')
j.onclick=function(){
    window.location.href="计算器/计算器.html"
}
var wl=document.getElementById('wl')
wl.onclick=function(){
    window.location.href="https://checkboxrace.com/"
}
var sp=document.getElementById('sp')
sp.onclick=function(){
    window.location.href="视频/sp.html"
}