		$(window).scroll(function(){
			if($(this).scrollTop() >= 200){
				$('#navbar').addClass('noTransparent')
			}else {
				$('#navbar').removeClass('noTransparent')
			}
		});
// إضافة الدالة لدعم المكتبات القديمة التي تعتمد عليها
if (typeof jQuery.isNumeric !== 'function') {
    jQuery.isNumeric = function(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    };
};


  $(document).ready(function(){
    $('.circle').circleProgress({
      startAngle: -Math.PI/2,
      fill: "#0575e6"
    }).on('circle-animation-progress', function(event, progress, stepValue){
      $(this).find('span').html(Math.round(stepValue * 100) + '%');
    });
  });


  document.getElementById('currentyear').innerHTML= new Date().getFullYear();