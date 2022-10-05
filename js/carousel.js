/* 
*iife包裹为了避免产生全局变量
*
*轮播图特效
*/
(function () {
    var carousel_list = document.getElementById('carousel_list');
    var left_btn = document.getElementById('left_btn');
    var right_btn = document.getElementById('right_btn');
    //自动轮播
    var banner = document.getElementById('banner');
    // 节流器
    var lock = true;
    //圆点h获取
    var circle_ol = document.getElementById('circle_ol');
    var circle_lis = circle_ol.getElementsByTagName('li');

    //克隆第一张li
    var clone_li = carousel_list.firstElementChild.cloneNode(true);
    // 上树
    carousel_list.appendChild(clone_li);
    var idx = 0;


    // var right_btnFn = right_btn.onclick;
    right_btn.onclick = right_btnFn;
    //自动轮播
    var timer = setInterval(right_btnFn, 1500);
    banner.onmouseenter = function(){
        clearInterval(timer);
    }
    banner.onmouseleave = function(){
        clearInterval(timer);
        timer = setInterval(right_btnFn, 1500);
    }



    function right_btnFn() {
        if (!lock) return;
        carousel_list.style.transition = 'transform .5s ease 0s'

        idx++;
        if (idx >= 5) {
            setTimeout(function () {
                carousel_list.style.transition = 'none';
                carousel_list.style.transform = 'none';
                idx = 0;
            }, 500)
        }
        carousel_list.style.transform = 'translateX(' + -16.66 * idx + '%' + ')';
        //设置小圆
        setCircle();
        lock = false;
        setTimeout(function () {
            lock = true;
        }, 500)

    }

    left_btn.onclick = function () {
        if (!lock) return;
        if (idx == 0) {
            idx = 4;
            carousel_list.style.transition = 'none';
            carousel_list.style.transform = 'translateX(' + -16.66 * 5 + '%' + ')';
            setTimeout(function () {
                carousel_list.style.transition = 'transform .5s ease 0s';
                carousel_list.style.transform = 'translateX(' + -16.66 * 4 + '%' + ')';

            }, 0)
        } else {
            idx--;
            carousel_list.style.transform = 'translateX(' + -16.66 * idx + '%' + ')';
        }

        //设置小圆
        setCircle();
        lock = false;
        setTimeout(function () {
            lock = true;
        }, 500)

    }

    function setCircle() {
        //遍历0-4
        for (var i = 0; i < 5; i++) {
            if (i != idx % 5) circle_lis[i].className = '';
            else circle_lis[i].className = 'current';
        }
    }

    //监听圆点
    circle_ol.onclick = function (e) {
        if (e.target.tagName.toLowerCase() == 'li') {
            idx = e.target.getAttribute('data-n');
            carousel_list.style.transform = 'translateX(' + -16.66 * idx + '%' + ')';
            setCircle();
        }

    }
})();
