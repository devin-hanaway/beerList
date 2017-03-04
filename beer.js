$('document').ready(function(){
  $('button').click(function(){
    getBeer()
  })
})

function getBeer(){
    var url= "https://api.punkapi.com/v2/beers?beer_name="
    url += $('input').val()
    $.get(url, function(data){
      // console.log(data);


      for (var i = 0; i < data.length; i++) {
          var name = data[i].name
          var image = data[i].image_url
          var description = data[i].description
          console.log(name, image, description)
          createRow(i)
          updatePage(name, image, description)
      }

    })
  }
// var column = $('.row').append('<div class="beer col l2"</div>')

function createRow(i){
  var r = $('<div class="row ">')
  $('section').append(r)
  r.append('<div class="beer col l2"</div>')
  r.append('<div class="image col l2"></div>')
  r.append('<div class="description col l4"></div>')

}

  // function createRow(i){
  //   var r = $('<div class="row'+i+'">')
  //   $('section').append(r)
  //   r.append('<div class="beer col l2"</div>')
  //   r.append('<div class="image col l2"></div>')
  //   r.append('<div class="description col l4"></div>')
  //
  // }

  function updatePage(name, image, description){
      $(".beer").append(name)
      $(".image").append('<img class="imageOne" src="'+ image +'">')
      $(".description").append(description)
  }




//callback
