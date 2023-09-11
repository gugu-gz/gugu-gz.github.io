var h=document.getElementById('h')
var a=document.getElementsByClassName('left')
var b=document.getElementsByClassName('right')
var tnt=0
var n=0
for(var i = 0;i<a.length;i++){
    a[i].num=i
    a[i].onclick=function(){
        pop=this.num
        for(var p=0;p<b.length;p++){
            b[p].style.display="block"
            if(p!=pop){
                b[p].style.display="none"
            }
            h.style.display="none"
        }
    }
}
var g=document.getElementById('l')
setInterval(function(){
    if(n==1){
        g.style.border="8px red double"
    }
    else if(n==2){
        g.style.border="8px yellow double"
    }
    else if(n==3){
        g.style.border="8px blue double"
        n=0
    }
    n=n+1
},1000)