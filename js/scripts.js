/* Pricing Slider JS */

var videoDuration = [
  "<span>:05</span>",
  "<span>:10</span>",
  "<span>:15</span>",
  "<span>:20</span>",
  "<span>:25</span>",
  "<span>:30</span>",
  "<span>:35</span>",
  "<span>:40</span>",
  "<span>:45</span>",
  "<span>:50</span>",
  "<span>:55</span>",
  "<span>1:00</span>",
  "<span>1:05</span>",
  "<span>1:10</span>",
  "<span>1:15</span>",
  "<span>1:20</span>",
  "<span>1:25</span>",
  "<span>1:30</span>",
  "<span>1:35</span>",
  "<span>1:40</span>",
  "<span>1:45</span>",
  "<span>1:50</span>",
  "<span>1:55</span>",
  "<span>2:00</span>",
  "<span>2:05</span>",
  "<span>2:10</span>",
  "<span>2:15</span>",
  "<span>2:20</span>",
  "<span>2:25</span>",
  "<span>2:30</span>",
  "<span>2:35</span>",
  "<span>2:40</span>",
  "<span>2:45</span>",
  "<span>2:50</span>",
  "<span>2:55</span>",
  "<span>3:00</span>"
]; //adds the times instead of regular numbers.

//   var hideShowVO = document.getElementById("jcHideShowVO");
//   var hideShowVOFinePrint = document.getElementById("jcHideShowVOFinePrint");
//   var hideShowSoundFX = document.getElementById("jcHideShowSoundFX");

//   hideShowSoundFX.style.display = "none"; //hide SFX Column by default


$(document).on(
  "input change",
  "#range-slider, #voiceover, #soundfx, #premium, #standard",
  function() {
    //Listen to slider changes (input changes)
    var slider = parseInt($("#range-slider").val());
    var voiceOption = $("#voiceover");
    var soundfxOption = $("#soundfx");
    var duration = slider * 5 + 5;

    if ($("#standard").is(':checked')) {
      var prodBaseCost = 45;
      var prodRate = 5;
      var voBaseCost = 100;
      var voRate = 1;
      var soundfxRate = 1.25;
    }
    else if ("#premium".is(':checked')) {
      var prodBaseCost = 50;
      var prodRate = 5;
      var voBaseCost = 150;
      var voRate = 2;
      var soundfxRate = 3;
    }
    else {
      console.log("error")
    }

    //Duration Displayed on Callout
    $("#callout").html("<span>" + videoDuration[slider] + "</span>");

    // Price for video duration
    var prodSubTotal = duration * prodRate + prodBaseCost;
    $("#durationPrice").html("<span>$" + prodSubTotal + ".00</span>");

    // Price for voiceover

    var voSubTotal = duration * voRate + voBaseCost;
    if (voiceOption.is(":checked")) {
      $("#voiceoverPriceBox").css("color", "black");
      $("#voiceoverPrice").css("color", "black");
      $("#voiceoverPrice").html("<span>$" + voSubTotal.toFixed(2) + "</span>");
      // hideShowVO.style.display = "block";
      // hideShowVOFinePrint.style.display = "block";
    } else {
      $("#voiceoverPriceBox").css("color", "#BFBBB6");
      $("#voiceoverPrice").css("color", "#BFBBB6");
      $("#voiceoverPrice").html("<span>$0.00</span>");
      // hideShowVO.style.display = "none";
      // hideShowVOFinePrint.style.display = "none";
    }
    //Price for Sound FX
    var soundfxSubTotal = duration * soundfxRate;
    if (soundfxOption.is(":checked")) {
      $("#soundfxPriceBox").css("color", "black");
      $("#soundfxPrice").css("color", "black");
      $("#soundfxPrice").html(
        "<span>$" + soundfxSubTotal.toFixed(2) + "</span>"
      );
      // hideShowSoundFX.style.display = "block";
    } else {
      $("#soundfxPriceBox").css("color", "#BFBBB6");
      $("#soundfxPrice").css("color", "#BFBBB6");
      $("#soundfxPrice").html("<span>$0.00</span>");
      // hideShowSoundFX.style.display = "none";
    }

    //Total price
    if (voiceOption.is(":checked") && soundfxOption.is(":checked")) {
      totalPrice = prodSubTotal + voSubTotal + soundfxSubTotal;
    } else if (voiceOption.is(":checked")) {
      totalPrice = prodSubTotal + voSubTotal;
    } else if (soundfxOption.is(":checked")) {
      totalPrice = prodSubTotal + soundfxSubTotal;
    } else {
      totalPrice = prodSubTotal;
    }
    $("#totalPrice").html("<span>$" + totalPrice.toFixed(2) + "</span>");
  }
);

// ::::: Range Slider Thumb ::::: //

$("#range-slider").on("mousedown mouseup", function() {
  //1. When user clicks their mouse down on the Range-Slider
  $(this).toggleClass("thumb-down hover-ring thumb-up hover-ring-out");
});
