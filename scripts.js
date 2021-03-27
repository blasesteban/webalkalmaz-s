$(function){
let imagesData [{
    photo: 'images\0ef9b9b86ac09b7f30de13a61ef80f0e.jpg'
    title: 'baba1'
    desc: 'kicsi baba deszép 1'
}
{
    photo: 'images\104944-dove-bird-4k.jpg'
    title: 'baba2'
    desc: 'kicsi baba deszép 2'
}
{
    photo: 'images\4505693-dove-birds-street-humor-pigeons.jpg'
    title: 'baba3'
    desc: 'kicsi baba deszép 3'
}
]
let loadPhoto = (photoNumber) => {
    $('#photo').attr('src', imagesData[photoNumber].photo)
    $('#title').text('src', imagesData[photoNumber].title)
    $('#desc').text('src', imagesData[photoNumber].desc)
  }
let currentPhoto = 0
loadPhoto(currentPhoto)

$('#prev').click(() => {
  if (currentPhoto>0){currentPhoto--}
  else {currentPhoto==imagesdata.length}
  loadPhoto(currentPhoto);
})
$('#next').click(() => {
  if (currentPhoto<imagesdata.length){currentPhoto++}
  else {currentPhoto==0}
})
imagesData.forEach((item, index) => {
  $('#thumbnails').append(`<div class='mini' data-number='${index}'>
  <img src='${item.photo}' data-number='${index}'>
  </div>`)
$('.mini').click((event) => {
    let photoNumber=parseInt($(event.target).attr('data-number'))
    loadPhoto(photoNumber)
  })
})
imagesData.forEach((item, index) => {
  $('#thumbnails').append(`<div class='minititle' data-number='${index}'>
  ${item.title}
  </div>`)
$('.mini').mouseover((event) => {
    let photoNumber=parseInt($(event.target).attr('data-number'))
    let offst= ${`.mini[data-number='${photoNumber}']`}.offset().top = 10
    let offsl= ${`.mini[data-number='${photoNumber}']`}.offset().left = 10
    $(`.title[data-number='${photoNumber}']`).css('position','absolute')
    $(`.title[data-number='${photoNumber}']`).show().offset({top:offst, left:offsl})
  })
  $('.mini').mouseout(function(event){
    let photoNumber=parseInt($(event.target).attr('data-number'))
    $(`.title[data-number='${photoNumber}']`).hide
  })
})
}