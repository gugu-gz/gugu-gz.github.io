var yxm=document.getElementsByClassName("yxm")
var t=document.getElementById("t")
var wh=document.getElementById("wh")
var jntm=document.getElementById("jntm")
var cxk=document.getElementById("cxk")
var model=0
var num=0
if(model==0){
    t.onclick=function(){
        for(var i=0;i<yxm.length;i++){
            yxm[i].style.display="inline-block"
        }
        t.innerHTML="请选择你的英雄"
        model=model+1
    }
}
wh.onclick=function(){
    var xz=document.createElement("div")
    xz.className="xz"
    var wz=document.createElement("span")
    wz.className="wz"
    wz.innerText="你可以为网页设置一个名字:"
    var sz=document.createElement("input")
    sz.className="sz"
    var tc=document.createElement("div")
    tc.className="tc"
    tc.innerHTML="确定"
    document.body.appendChild(xz);
    xz.appendChild(wz);
    xz.appendChild(sz);
    xz.appendChild(tc);
    setInterval(function(){
        sz.onblur=function(){
            jntm.innerText=sz.value
        }
        tc.onclick=function(){
            document.body.removeChild(xz)
        }
    },1000)
}
setInterval(function(){
    if(num==1){
        t.style.color="red"
    }
    else if(num==2){
        t.style.color="yellow"
    }
    else if(num==3){
        t.style.color="blue"
        num=0
    }
    num=num+1
},1000)