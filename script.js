
    function getStatus() {

        $.ajax({
            url: 'https://coronavirus-tracker-api.herokuapp.com/all',
            
            success: function(data) {

              console.log(data);
              $('.root').html('');
             $('.root').append('<div class="number"><h3>Confirmed</h3><span class="count">'+data.latest.confirmed+'</span></div>'); 
             $('.root').append('<div class="number"><h3>Deaths</h3><span class="count">'+data.latest.deaths+'</span></div>');
             $('.root').append('<div class="number"><h3>Recovered</h3><span class="count">'+data.latest.recovered+'</span></div>');
             $('.refreshbutton').css("display","block");
             $('.dummy').css("display","none");

          $('.count').each(function () {
        $(this).prop('Counter',0).animate({
            Counter: $(this).text()
        }, {
          duration: 3000,
          easing: 'swing',
          step: function (now) {
              $(this).text(Math.ceil(now));
                }
            });
        });
                //process the JSON data etc
        }


        })

    }

// $( document ).ready(function() {
    
//   $('.count').each(function () {
//     $(this).prop('Counter',0).animate({
//         Counter: $(this).text()
//     }, {
//         duration: 4000,
//         easing: 'swing',
//         step: function (now) {
//             $(this).text(Math.ceil(now));
//         }
//     });
// });
    
// });
