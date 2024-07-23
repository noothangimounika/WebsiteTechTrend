var feild=document.querySelector('textarea');
var backup=feild.getAttribute('placeholder');
var btn=document.querySelector('.btn');
var clear=document.getElementById('clear');

feild.onfocus=function() {
    this.setAttribute('placeholder' , '');
    btn.computedStyleMap.display='block';
    
}


feild.onblur-function() {
    this.setAttribute('placeholder',backup)
}

clear.onclick=function(){
    btn.computedStyleMap.display='none';
    feild.value='';
}