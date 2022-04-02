// $('.click').click(function() {
//     // get the contents of the link that was clicked
//     var linkText = $(this).text();

//     // replace the contents of the div with the link text
//     $('#content-container').html(linkText);

//     // cancel the default action of the link by returning false
//     return false;
// });



// const weeklyButton = $('#weekly');
// function changeDaily () {

// }
const jsonData = require('./data.json')
// console.log(jsonData[0].title)
function getData() {
    for (let i = 0; i < jsonData.length; i++) {
        if (jsonData[i].title == 'Work'){
            console.log(jsonData[i].timeframes.daily.current)
        }
    }
}

getData();