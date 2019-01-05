
var nature = ["tree", "mountain", "fruits", "sky", "oceans", "lakes","rivers"];

function btns(val) {
      var btn = $("<button>" + val + "</button>")
      $(btn).attr("data-search", val)
      $(btn).appendTo("#buttons")
      $(btn).addClass("btn btn-primary")
}

      for (var i = 0; i < nature.length; i++) {
        btns(nature[i]);
      }

      $("#submitBtn").on("click", function() {
        var textBtn = $("#submitIp").val();
        if (textBtn != ""){

          btns(textBtn);
          textBtn = $("#submitIp").val("");
        }
      })

      // console.log(search);
      
      $(document).on("click", ".btn-primary",function(){

              var search = $(this).data("search");
              var queryUrl = "https://api.giphy.com/v1/gifs/search?api_key=45BRB8FYsh5ZodFXSsHncMlGJ5Uo3B93&q=" + search + "&limit=10&lang=en"
        
              console.log(queryUrl);

            $.ajax({
              url: queryUrl,
              method: "GET"
              }).then(function(response){
              console.log(response)
              for (var j = 0; j < response.data.length; j++) {
                
                $("#gif").append("Rating: "+ response.data[j].rating + "<br>"+"<br>");
                $("#gif").append("<img src=" +response.data[j].images.fixed_height.url + ">"+"<br>");
                
              }
              
            })
        
      })


     
