 var sizeRange = [" <span>$100.00</span>",
                  " <span>$110.00</span>",
                  "<span>$120.00</span>",
                  "<span>$130.00</span>",
                  "<span>$140.00</span>",
                  "<span>$150.00</span>",
                  " <span>$160.00</span>",
                  " <span>$170.00</span>",
                  " <span>$180.00</span>",
                  " <span>$190.00</span>",
                  " <span>$200.00</span>",
                  " <span>$210.00</span>",
                  " <span>$220.00</span>",
                  " <span>$230.00</span>",
                  " <span>$240.00</span>",
                  " <span>$250.00</span>",
                  " <span>$260.00</span>",
                  " <span>$270.00</span>",
                  " <span>$280.00</span>",
                  " <span>$290.00</span>",
                  " <span>$300.00</span>",
                  " <span>$310.00</span>",
                  " <span>$320.00</span>",
                  " <span>$350.00</span>",
                  " <span>$380.00</span>",
                  " <span>$410.00</span>",
                  " <span>$440.00</span>",
                  " <span>$470.00</span>",
                  " <span>$500.00</span>",
                  " <span>$530.00</span>",
                  " <span>$560.00</span>",
                  " <span>$590.00</span>",
                  " <span>$620.00</span>",
                  " <span>$650.00</span>",
                  " <span>$680.00</span>"
                 ]


var imageUrl = [" <span>:10</span>",
                  " <span>:15</span>",
                  "<span>:20</span>",
                  "<span>:25</span>",
                  "<span>:30</span>",
                  "<span>:35</span>",
                  " <span>:40</span>",
                  " <span>:45</span>",
                  " <span>:50</span>",
                  " <span>:55</span>",
                  " <span>1:00</span>",
                  " <span>1:05</span>",
                  " <span>1:10</span>",
                  " <span>1:15</span>",
                 " <span>1:20</span>",
                 " <span>1:25</span>",
                 " <span>1:30</span>",
                " <span>1:35</span>",
                " <span>1:40</span>",
                " <span>1:45</span>",
                " <span>1:50</span>",
                " <span>1:55</span>",
                " <span>2:00</span>",
                " <span>2:15</span>",
                " <span>2:30</span>",
                " <span>2:45</span>",
                " <span>3:00</span>",
                " <span>3:15</span>",
                " <span>3:30</span>",
                " <span>3:45</span>",
                " <span>4:00</span>",
                " <span>4:15</span>",
                " <span>4:30</span>",
                " <span>4:45</span>",
                " <span>5:00</span>",
                 ]//adds the times instead of regular numbers.


$('#sliderPrice').html( sizeRange[0] );

$(document).on('input change', '#range-slider', function() { //Listen to slider changes (input changes)
    var v=$(this).val(); //Create a Variable (v), and store the value of the input change (Ex. Image 2 [imageURL])
  
   $('#sliderStatus').html(imageUrl[v]);
   $('#sliderPrice').html( sizeRange[v] );
  
  $("#img").prop("src", imageUrl[v]); // Modify the Images attribute src based on the sliders value, and input the value inside the imageURL[v] to display image
});

// ::::: Range Slider Thumb ::::: //

$("#range-slider").on("mousedown", function() { //1. When user clicks their mouse down on the Range-Slider
    $(this).removeClass().addClass("thumb-down");//1.1 Remove default class from CSS, and add the class .thumb-down (changes background color)
    $(this).addClass("hover-ring");//1.2 Remove default class from CSS, and add the class .hover-ring (changes box-shadow to a green color)
});

$("#range-slider").on("mouseup", function() { //2. When user mouse-up on Range-Slider
  
    $(this).addClass("thumb-up"); //2.1 Changes thumb color back to light green
  
    $(this).addClass("hover-ring-out"); //2.2 Remove Box-Shadow
});
