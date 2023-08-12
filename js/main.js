function functionFetch () {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=Кишинев,md&appid=6e1bd1b9727859bebfd04a95c84c3ab9')
        .then(function(resp) {return resp.json()})
        .then(function(data) {
            // console.log(data);
// Город
            document.querySelector('.package-name').textContent = data.name;
// Дневная температура
            document.querySelector('.price').innerHTML = Math.round(data.main.temp - 273) + '&deg' + 'C';
// Дневная температура
            document.querySelector('.feels_like').innerHTML = Math.round(data.main.feels_like - 273) + '&deg' + 'C';
//Скорость ветра
            document.querySelector('.speed').textContent = `${data.wind.speed} м/с`;

// Иконка 
            // https://openweathermap.org/img/wn/10d@2x.png
            // document.querySelector('.features li').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
        })
        .catch(function () {
            // catch any errors
        });
        // console.log('click');
}

document.querySelector('.button-primary').addEventListener('click', functionFetch);