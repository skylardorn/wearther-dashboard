// user searches for city
// enter a city, click search button
// addEventListener
// return fetch results from fetch request
// weather will show
// manipulate the DOM, to reflect results from weather search

fetch("https://api.openweathermap.org/data/2.5/forecast?q=tempe&appid=e4be610c50bf8103886545b7b91a1d22")
  .then((information) => {
    console.log(information);
    // console.log(information.json());
    return information.json();
  })
  .then((data) => {
    console.log(data);
  });

//    
// https://api.openweathermap.org/data/2.5/forecast?q=tempe&appid=e4be610c50bf8103886545b7b91a1d22