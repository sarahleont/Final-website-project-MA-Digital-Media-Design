
window.onload = function(){
    document.getElementById('close').onclick = function(){
        this.parentNode.remove("cookie-notice");
        return false;
    };
};
