// $('h1').click(function(){
//   console.log('There was a click!')
// })
//
// $('li').click(function(){
//   console.log('any li was clicked!')
// })

$('h1').click(function(){
  $(this).text("I was changed!")
})

$('input').eq(0).keypress(function(){
  $('h3').toggleClass('turnBlue');
})

//on()

$('h1').on('dblclick', function(){
  $(this).toggleClass('turnBlue');
})

$('input').eq(1).on('click',function(){
  $('.container').fadeOut(3000)
})
