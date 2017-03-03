$('document').ready(function(){
  $('button').click(function(){
    getBeer()
  })
})

function getBeer(){
    var url= "https://api.punkapi.com/v2/beers?beer_name="
    url += $('input').val()
    $.get(url, function(data){
      console.log(data);
      var name = data[0].name
      var image = data[0].image_url
      var description = data[0].description
      console.log(name, image)

      createRow()
      updatePage(name, image, description)
    })
  }
//
// var row = $('section').append('<div class="row">')
//
// var column = $('.row').append('<div class="beer col l2"</div>')

  function createRow(){
    // for (var i = 1; i < 2; i++) {
    //   [i]
    // }
    $('section').append('<div class="row">')
    $('.row').append('<div class="beer col l2"</div>')
    $('.row').append('<div class="image col l2"></div>')
    $('.row').append('<div class="description col l4"></div>')
  }

  function updatePage(name, image, description){
      $(".beer").append(name)
      console.log(image);
      $(".image").append('<img class="imageOne" src="'+ image +'">')
      $(".description").append(description)
  }

//callback
