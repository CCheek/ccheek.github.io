var pricepermonth;
pricepermonth = 129;

$(".m2mbtn").on('click', function() {
  $(".m2mbtn").addClass('active');
  $(".annualbtn").removeClass('active');
  pricepermonth = 129;
  setPrice(pricepermonth)
  return false;
});

$(".annualbtn").on('click',  function() {
  $(".annualbtn").addClass('active');
  $(".m2mbtn").removeClass('active');
  pricepermonth = 99;
  setPrice(pricepermonth)
  return false;
});

var $s = $('.priceslider').slider({ 
max: 15,
min: 1,
value: 2,
slide: function(e,ui) {
  var calcprice;
  calcprice = (ui.value * pricepermonth);
  var output;
  var outputinfo;
  if(ui.value > 10) {
    $(".pricingtable").hide();
    $(".enterprisepricing").show();
  } else {
     $(".pricingtable").show();
    $(".enterprisepricing").hide();
  } 
    output = ("$" + calcprice + "/mo");
  outputinfo = (ui.value);
  
    $('.pricingtable').html(output);
  $('.employeenocont').html(outputinfo);
}
});

function setPrice(pricepermonth) {
  var calcprice;
  var value=$s.slider("value");
  calcprice = (value * pricepermonth);
  if (value > 10) {
 $('.pricingtable').hide();
    $(".enterprisepricing").show();
  } else {
    $('.pricingtable').html("$" + calcprice + "/mo");
  }
  outputinfo = (ui.value);
  $('.employeenocont').html(outputinfo);
}
