(function(){
    var bannerNav = document.getElementById('banner_nav');
    var bannerNavUl = document.getElementById('banner_nav_ul');
    var menus = document.querySelectorAll('.menu_boxs .menu')
    var lis = bannerNavUl.querySelectorAll('li')

    //onmouseenter不冒泡！
    bannerNavUl.onmouseover = function(e){
        if(e.target.tagName.toLowerCase() == 'li'){
            var t = e.target.getAttribute('data-t');
            var themenu = document.querySelector('.menu_boxs .menu[data-t = '+t+']');
            // var thelis = bannerNavUl.querySelector('li[data-t = '+t+']');
            
           
            for (var i =0; i<menus.length; i++){
                menus[i].className = 'menu';
                lis[i].className = lis[i].getAttribute('data-t');
            }
            themenu.className = 'menu current';
            // thelis.className +=' current';
            e.target.className +=' current';
        }
    }

    bannerNav.onmouseleave = function(){
        for (var i =0; i<menus.length; i++){
            menus[i].className = 'menu';
            lis[i].className = lis[i].getAttribute('data-t');
        }
        
    }
})();