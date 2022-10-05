(function(){
    var toTop = document.getElementById('toTop')
    var mbady = document.getElementsByTagName('body')[0]
    var timer;
    toTop.onclick = function(e){
        e.stopPropagation;
        clearInterval(timer);
        timer = setInterval(function(){
            document.documentElement.scrollTop -=20;
            if(document.documentElement.scrollTop <= 0){
                clearInterval(timer);
            }
        },20);
    }

    mbady.onmousewheel = function(){
        clearInterval(timer);
    }

    window.onscroll = function(){
        var scrollTop = document.documentElement.scrollTop

        if(scrollTop == 0) toTop.style.display = 'none';
        else toTop.style.display = 'block';
    }

})();