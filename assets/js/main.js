

//slice function
function sliceTextToNumber(className) {
    var elements = document.getElementsByClassName(className);

    for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
    var text = element.textContent.trim();
    var maxChars = parseInt(element.getAttribute('data-max'));

    if (text.length > maxChars) {
        var slicedText = text.slice(0, maxChars);
        element.textContent = slicedText + '...';
    }
    }
}
sliceTextToNumber('slice');

// Example: Slice text based on the data-max attribute

//end slice function

// loader
function loader() {
  $('.lds-ellipsis').fadeOut();
  $('.preloader').delay(333).fadeOut('slow');
  $('body').delay(333);
  $('body').css('overflow-y','auto');
  $('html').css('overflow-y','auto');
}

//end loader



//start Slider

if ($('.owl-carousel.offers-slider').length > 0) {
  $('.owl-carousel.offers-slider').owlCarousel({
    margin: 144,
      nav: true,
      autoplay: false,
      autoplayTimeout:5000,
      rtl:false,
      loop:true,
      responsive: { 0: { items: 1 }, 768: { items: 2 }, 1170: { items:3 }
  }});
  
}




if ($('.owl-carousel.best-slider').length > 0) {
  $('.owl-carousel.best-slider').owlCarousel({
      margin: 144,
        nav: true,
        autoplay: false,
        autoplayTimeout:5000,
        rtl:false,
        loop:true,
        responsive: { 0: { items: 1 }, 768: { items: 2 }, 1170: { items:2 }
  }});
}


//end Slider




// Function to allow only numbers
function isNumberKey(evt) {
    var charCode = evt.which ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57))
      return false;
    return true;
  }
  
  // Function to prevent copying and pasting non-numeric characters in a number input
  function onPaste(event) {
    const pastedText = event.clipboardData?.getData('text');
    if (pastedText && /\D/.test(pastedText)) {
      event.preventDefault(); // Cancel the paste action if it contains non-numeric characters
    }
  }
  
  // Function to allow only letters
  function handleKeydown(event) {
    const allowedKeys = /[a-zA-Zء-ي\s]/;
    const keyPressed = event.key;
  
    if (!allowedKeys.test(keyPressed)) {
      event.preventDefault();
    }
  }
  
  // Function to prevent copying and pasting numbers in a text input
  function handlePaste(event) {
    event.preventDefault();
  
    const clipboardData = event.clipboardData || window.clipboardData;
    const pastedText = clipboardData.getData('text/plain');
    const allowedPattern = /^[a-zA-Zء-ي\s]+$/;
  
    if (!allowedPattern.test(pastedText)) {
      // Optionally, you can display an error message or perform some action here.
      return;
    }
  
    // Manipulate the pasted text if needed
    const modifiedText = pastedText.toUpperCase();
  
    // Insert the modified text into the input field or perform any other desired action
    const inputElement = event.target;
    const currentPosition = inputElement.selectionStart || 0;
    const inputValue = inputElement.value;
    const newValue = inputValue.slice(0, currentPosition) + modifiedText + inputValue.slice(currentPosition);
    inputElement.value = newValue;
  }




if ($(window).width() <= 1024) {  
  $('.dropdown-toggle').attr('data-bs-toggle','dropdown');
} 


if ( $('nav .cart-icon').length > 0) {
//when click on cart icon in navbar show the cart section      
$('nav .cart-icon').click(function () {

  $('nav .cart').slideToggle(1000)
  
})
}


if ( $('#order-type').length > 0) {
  $('#order-type').change(function () {
    if ($('#order-type').val() == "delivery" ) {
        $("#delivery-inputs").css('display','flex')
        $("#delivery-inputs input").attr('required', true); // Add 'required' attribute
    }else{
      $("#delivery-inputs").css('display','none')
      $("#delivery-inputs input").removeAttr('required'); // Remove 'required' attribute
  
    }
  
  })
}



$(document).ready(function () {

  function updatePrice(cartItem) {
      let value = parseInt(cartItem.find('.quantity').val());
      let pricePerItem = parseFloat(cartItem.find('.price_per_item').val());
      let totalPrice = value * pricePerItem;
      cartItem.find('.total_price_display').val(totalPrice);
      console.log(`Updated price for cart item: ${totalPrice}`);
  }

  
  if ($('.cart_item').length > 0) {
    $('.cart_item').each(function () {
        const cartItem = $(this);
        console.log("Initializing cart item");

        // Initialize the price on page load
        updatePrice(cartItem);

        cartItem.find('.fa-plus').off('click').on('click', function () {
            console.log("Plus button clicked");
            let value = parseInt(cartItem.find('.quantity').val());
            console.log(`Incrementing value: ${value} -> ${value + 1}`);
            cartItem.find('.quantity').val(value + 1);
            updatePrice(cartItem);
        });

        cartItem.find('.fa-minus').off('click').on('click', function () {
            console.log("Minus button clicked");
            let value = parseInt(cartItem.find('.quantity').val());
            if (value > 0) {
                console.log(`Decrementing value: ${value} -> ${value - 1}`);
                cartItem.find('.quantity').val(value - 1);
                updatePrice(cartItem);
            } else {
                console.log("Value is already zero, cannot decrement further");
            }
        });
    });
  }

  AOS.init();

  loader()  
});


// end cart-count


