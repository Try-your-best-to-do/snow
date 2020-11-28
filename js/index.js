//        function add() {
//            var mydiv = document.createElement("div");
//            mydiv.style.width = "100px";
//            mydiv.style.height = "50px";
//            mydiv.style.backgroundColor = "blue";
//            document.body.appendChild(mydiv);
//        }
//老师给的例子
// function add1() {
//     for (var i = 1; i <= 30; i++) {
//         var mydiv = document.createElement("div");
//         mydiv.style.width = "100px";
//         mydiv.style.height = "50px";
//         mydiv.style.backgroundColor = "blue";
//         mydiv.style.position = "fixed";
//         mydiv.style.left = Math.random() * 1300 + "px";
//         mydiv.style.top = Math.random() * 700 + "px";
//         document.body.appendChild(mydiv);
//     }
// }
var W = window.innerWidth;   //获取屏幕的宽高
var H = window.innerHeight;
var add_snow = null;         //把add_snow定时器全局变量，方便删除
var angle = 0;               //增加参数
var flag = false;            //是否有雪花元素

//增加雪花
function add() {
    for (var i = 1; i <= 100; i++) {
        var mydiv = document.createElement("div");
        var size = Math.random()*24+1+"px";
        mydiv.style.width = size
        mydiv.style.height = size
        mydiv.style.backgroundImage="url('images/white-snow.png')";
        mydiv.style.backgroundSize="cover";
        mydiv.style.position = "absolute";
        mydiv.style.left = Math.random() * (W-50) + "px";
        mydiv.style.top = Math.random() * (H-50) + "px";
        flag = true;
        document.body.appendChild(mydiv);
    }
}

//开始雪花沈阳
function start(){
    if (add_snow){

    }else {
        add_snow = setInterval(function (){
            update()
        },100)
    }
}

//删除雪花元素
function del() {
    var allSnow = document.getElementsByTagName("div");
    var length = allSnow.length;
    for (var i = 0; i < length; i++) {
        //                document.body.removeChild(allSnow[i]);  // 删除body的子节点
        allSnow[0].remove();                // 直接将该元素删
//                  allSnow[i].style.display = "none";  // 通过设置元素为不可见来模拟删除
    }
    flag = false
    clearInterval(add_snow)
    add_snow = null;
}

//雪花的下落效果
function update(){
    if (flag){
        angle += 0.01;
        var allSnow = document.getElementsByTagName("div");
        var length = allSnow.length;
        for (var i = 0; i < length; i++) {
            var x = Math.sin(angle)*2
            var y = Math.cos(angle+parseFloat(allSnow[i].style.height.slice(0,-2)))+1+parseFloat(allSnow[i].style.height.slice(0,-2))/2
            allSnow[i].style.left = x+parseFloat(allSnow[i].style.left.slice(0,-2)) + "px";
            allSnow[i].style.top = y +parseFloat(allSnow[i].style.top.slice(0,-2))+ "px";
            var x1 = x+parseFloat(allSnow[i].style.left.slice(0,-2));
            var y1 = y +parseFloat(allSnow[i].style.top.slice(0,-2));
            if(x1 > W-50 || x1 < 0||  y1 > H-50)
            {
                allSnow[i].style.left = Math.random() * (W-50) + "px";
                allSnow[i].style.top = 20 + "px";
            }
        }
    }else {
        add()
    }

}

//暂停雪花效果
function stop(){
    clearInterval(add_snow)
    add_snow = null;
}
