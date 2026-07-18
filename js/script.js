function scrollfun(){
  if(document.documentElement.scrollTop > 200) {
    document.getElementById('navbar').classList.add('noTransparent')
  }else{
    document.getElementById('navbar').classList.remove('noTransparent')
  }
};

window.onscroll = function(){
  scrollfun()
}
