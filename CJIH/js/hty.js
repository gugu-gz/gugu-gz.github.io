var d = document.getElementsByClassName('dm'); // 获取所有类名为'dm'的元素
var szjm = document.getElementById('szjm'); // 获取id为'szjm'的元素
var sz = document.getElementById('sz'); // 获取id为'sz'的元素
var dm = document.getElementById('dm'); // 获取id为'dm'的元素
var num = 0; // 初始化变量num为0
var l = document.getElementsByClassName('left'); // 获取所有类名为'left'的元素
var r = document.getElementsByClassName('right'); // 获取所有类名为'right'的元素
var sznr = document.getElementsByClassName('sznr'); // 获取所有类名为'sznr'的元素
var out = document.getElementById('out'); // 获取id为'out'的元素
var colorb = document.getElementById('color'); // 获取id为'color'的元素
var cz = document.getElementById('cz'); // 获取id为'cz'的元素
var yrj = 0; // 初始化变量yrj为0
var asdfasdfasdf = document.getElementById('asdfasdfasdf'); // 获取id为'asdfasdfasdf'的元素
var ddd = document.getElementById('ddd'); // 获取id为'ddd'的元素
var ccc = document.getElementById('ccc'); // 获取id为'ccc'的元素
var aaa = document.getElementById('aaa'); // 获取id为'aaa'的元素
var yx = document.getElementById('yx'); // 获取id为'yx'的元素
var spspsp = document.getElementById('spspsp'); // 获取id为'spspsp'的元素
var asdfasdf = 1; // 初始化变量asdfasdf为1
var dl = document.getElementById('dl'); // 获取id为'dl'的元素
var tc = document.getElementById('tc'); // 获取id为'tc'的元素
var overlay = document.getElementById('overlay'); // 获取id为'overlay'的元素
var button=document.getElementById('button')
var dmopen=0

dm.onclick = function () {
  overlay.style.display = 'block'; // 显示遮罩层
  tc.style.top = '35%'; // 将弹出框的top设置为35%
  tc.style.animation = "window-open 1.5s 1"; // 添加打开窗口的动画效果
}

overlay.onclick = function () {
  overlay.style.display = 'none'; // 隐藏遮罩层
  tc.style.top = '-100%'; // 将弹出框的top设置为-100%
  tc.style.animation = "window-close 2s 1"; // 添加关闭窗口的动画效果
}

setInterval(function () {
  if (num == 0) {
    sz.onclick = function () {
      szjm.style.left = '0px'; // 将szjm的left设置为0px
      sz.style.transform = 'rotate(90deg)'; // 旋转sz元素90度
      num = 1; // 将num设为1
    }
  } else if (num == 1) {
    sz.onclick = function () {
      szjm.style.left = '-260px'; // 将szjm的left设置为-260px
      sz.style.transform = 'rotate(-90deg)'; // 旋转sz元素-90度
      num = 0; // 将num设为0
    }
  }
}, 2)
var numfordm=0
topfordm=document.body.offsetHeight-100
setInterval(function () {
  if (dmopen==1){
    for(var i=0;i<d.length;i++){
      d[i].style.display="none"
    }
  }
  if (dmopen==0){
    for (var i = 0; i < d.length; i++) {
      d[i].style.display="inline"
      if(numfordm<d.length){
        d[i].style.left = Math.floor(Math.random() * -document.body.offsetWidth + 0)+"px";
        d[i].style.top = Math.floor(Math.random() * topfordm + 40)+"px";
        numfordm++;
      }
      sznr[3].onclick = function () {
        let colorInput = document.querySelector("#color"); // 获取颜色选择器输入框元素
        let color = colorInput.value; // 获取输入框中的颜色值
        for (let i = 0; i < d.length; i++) {
          d[i].style.color = color; // 将所有'dm'元素的颜色设为选择的颜色值
        }
        asdfasdf = 0; // 将asdfasdf设为0
      }
      d[i].l = d[i].offsetLeft; // 获取'dm'元素的offsetLeft值并赋给l
      d[i].r = d[i].offsetLeft + d[i].offsetWidth; // 获取'dm'元素的offsetLeft + offsetWidth值并赋给r
      d[i].l = d[i].l + 0.5; // 将l的值加上0.5
      d[i].style.left = d[i].l + 'px'; // 将'dm'元素的left属性设为l的值
      if (d[i].r >= document.body.offsetWidth) {
        d[i].style.top = Math.floor(Math.random() * topfordm + 40) + "px"; // 将'dm'元素的top属性设为随机数
        d[i].l = Math.floor(Math.random() * -document.body.offsetWidth + 0); // 将l的值设为随机数
        d[i].style.left = d[i].l + 'px'; // 将'dm'元素的left属性设为l的值
        console.log(asdfasdf);
        if (asdfasdf == 1) {
          var c = Math.floor(Math.random() * 3 + 1); // 生成1到3之间的随机数
          if (c == 1) {
            d[i].style.color = "gray"; // 将'dm'元素的颜色设为灰色
          } else if (c == 2) {
            d[i].style.color = "white"; // 将'dm'元素的颜色设为白色
          } else {
            d[i].style.color = "purple"; // 将'dm'元素的颜色设为紫色
          }
        }
      }
    }
  }
}, 0.5)

asdfasdfasdf.onmouseover = function () {
  ddd.style.display = "inline"; //将'ddd'元素的display属性设为inline
}

asdfasdfasdf.onmouseleave = function () {
  ddd.style.display = "none"; //将'ddd'元素的display属性设为none
}

yx.onmouseover = function () {
  ccc.style.display = "inline"; //将'ccc'元素的display属性设为inline
}

yx.onmouseleave = function () {
  ccc.style.display = "none"; //将'ccc'元素的display属性设为none
}

spspsp.onmouseover = function () {
  aaa.style.display = "inline"; //将'aaa'元素的display属性设为inline
}

spspsp.onmouseleave = function () {
  aaa.style.display = "none"; //将'aaa'元素的display属性设为none
}

dl.onmouseover = function () {
  this.innerHTML = "去登陆"; // 将dl元素的innerHTML设为"去登陆"
  this.style.color = " rgba(255, 0, 0, 0.3)"; // 将dl元素的颜色设为红色
  this.onmouseleave = function () {
    this.innerHTML = "尚未登陆"; // 将dl元素的innerHTML设为"尚未登陆"
    this.style.color = "black"; // 将dl元素的颜色设为黑色
  }
  this.onclick = function () {
    window.location.href = "登录页/login.html"; // 点击dl元素时跳转到登录页
  }
}
button.onmouseover = function () {
  if (dmopen==0){
    this.style.color = " rgba(255, 0, 0, 0.3)"; // 将dl元素的颜色设为红色
    this.onmouseleave = function () {
      this.style.color = "black"; // 将dl元素的颜色设为红色
    }
    this.onclick=function(){
      this.innerHTML="开"
      dmopen=1
    }
  }
  if (dmopen==1){
    this.style.color = " rgba(0, 255, 0, 0.3)"; // 将dl元素的颜色设为红色
    this.onmouseleave = function () {
      this.style.color = "black"; // 将dl元素的颜色设为红色
    }
    this.onclick=function(){
      this.innerHTML="关"
      dmopen=0
    }
  }
}