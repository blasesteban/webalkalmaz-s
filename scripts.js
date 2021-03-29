$(function(){
let currentPhoto = 0;
let imagesData = [{
    photo: 'images/0ef9b9b86ac09b7f30de13a61ef80f0e.jpg',
    title: 'baba1',
    desc: 'kicsi baba deszép 1',
},
{
    photo: 'images/104944-dove-bird-4k.jpg',
    title: 'baba2',
    desc: 'kicsi baba deszép 2',
},
{
    photo: 'images/4505693-dove-birds-street-humor-pigeons.jpg',
    title: 'baba3',
    desc: 'kicsi baba deszép 3',
},
{
    photo: 'images/Animal-Dove-love-bird-couple-cute-pictures-2560x1685-620x408.jpg',
    title: 'baba4',
    desc: 'kicsi baba deszép 4',
},
{
  photo: 'images/dove-3268965_1920-1500x1000.jpg',
  title: 'baba5',
  desc: 'kicsi baba deszép 5',
},
{
  photo: 'images/dove-wallpaper-2560x1600-852_7.jpg',
  title: 'baba6',
  desc: 'kicsi baba deszép 6',
},
{
  photo: 'images/Dove-Wallpapers-HD-620x446.jpg',
  title: 'baba7',
  desc: 'kicsi baba deszép 7',
}];

let loadPhoto = (photoNumber) => {
    $('#photo').attr('src', imagesData[photoNumber].photo);
    $('#title').text(imagesData[photoNumber].title);
    $('#desc').text(imagesData[photoNumber].desc);
  }
loadPhoto(currentPhoto);

$('#prev').click(() => {
  if (currentPhoto>0){currentPhoto--}
  else {currentPhoto=imagesData.length-1}
  loadPhoto(currentPhoto);
});
$('#next').click(() => {
  if (currentPhoto<imagesData.length-1){currentPhoto++}
  else {currentPhoto=0}
  loadPhoto(currentPhoto);
});

imagesData.forEach((item, index) => {
  $('.thumbnails').append(`<div class='thumbnail' data-number='${index}'>
  <img src='${item.photo}' data-number='${index}' alt=''>
  </div>`);
  $('.thumbnail').click((event) => {
    let photoNumber=parseInt($(event.target).attr('data-number'));
    loadPhoto(photoNumber);
  });
});
imagesData.forEach((item, index) => {
  $(`.thumbnail[data-number='${photoNumber}']`).append(`<div class='minititle' data-number='${index}'>
  ${item.title}
  </div>`)
});
$('.thumbnail').mouseover((event) => {
    let photoNumber=parseInt($(event.target).attr('data-number'));
    let offst= $(`.thumbnail[data-number='${photoNumber}']`).offset().top = 10
    let offsl= $(`.thumbnail[data-number='${photoNumber}']`).offset().left = 10
    $(`.minititle[data-number='${photoNumber}']`).css('position','absolute');
    $(`.minititle[data-number='${photoNumber}']`).show().offset({top:offst, left:offsl});
  });
  $('.thumbnail').mouseout((event) => {
    let photoNumber=parseInt($(event.target).attr('data-number'));
    $(`.minititle[data-number='${photoNumber}']`).hide
  });
})