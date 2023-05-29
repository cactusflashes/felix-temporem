const url = `https://api.openweathermap.org/data/2.5/weather?lat=35.1987522&lon=-111.6518229&appid=e28dc6acd1bfed7577b41d518f0151b5&units=imperial`;
const buttonOne = document.querySelector('#button-one');
const tempDisplay = document.querySelector('#main-temp');
const conditionsDisplay = document.querySelector('#conditions');
const locationDisplay = document.querySelector('#local');
const colorOutputDisplay = document.querySelector('#color-output');
const againButton = document.querySelector('#again');

const colors = [
  "#5A96EF",
  "#91AA9D",
  "#3E606F",
  "#193441",
  "#9C4905",
  "#03588C",
  "#6CAFD9",
  "#3E768C",
  "#051326",
  "#A66D05",
  "#5ABFA3",
  "#59551B",
  "#8C470B",
  "#05AFF2",
  "#0597F2",
  "#3A5953",
  "#6F8C7A",
  "#364F59",
  "#6D808C",
  "#EB6424",
  "#E99E75",
  "#292643",
  "#9B461F",
  "#6A1D2F",
  "#354C3C",
  "#42354C"
]

let previousIndex = -1;

function getRandomColor() {
  let colorIndex; 

  do {
    colorIndex = Math.floor(Math.random() * colors.length);
  } while (colorIndex === previousIndex);

  previousIndex = colorIndex;
  const randomColor = colors[colorIndex];

  return randomColor;
}

const randomColor = getRandomColor();

fetch(url)
  .then(response => response.json())
  .then(data => {
    // Parse the JSON response and extract the required data
    console.log(data);

    const currentTemp = data.main.temp;
    const currentConditions = data.weather[0].description;

    tempDisplay.innerHTML = `${currentTemp.toFixed(0)}º`;
    conditionsDisplay.innerHTML = `${currentConditions}`;

  })
  .catch(error => {
    console.error("Error:", error);
  });

  colorOutputDisplay.innerHTML = `${randomColor}`;

const backgroundColorProp = document.querySelector('#container');
const containerTwo = document.querySelector('#container-2');

function revealData() {
  buttonOne.classList.remove('animate__infinite', 'animate__pulse');
  buttonOne.classList.add('animate__animated', 'animate__rotateOut');

    setTimeout(function() {
      tempDisplay.classList.add('animate__animated', 'animate__fadeInUp');
      tempDisplay.classList.remove('hidden');
    }, 1000);

      setTimeout(function() {
        conditionsDisplay.classList.add('animate__animated', 'animate__fadeInUp');
        conditionsDisplay.classList.remove('hidden');
      }, 1800);

        setTimeout(function() {
          locationDisplay.classList.add('animate__animated', 'animate__fadeInUp');
          locationDisplay.classList.remove('hidden');
        }, 2200);

          setTimeout(function() {
            containerTwo.style.backgroundColor = getRandomColor();
          }, 2850);

            setTimeout(function() {
              colorOutputDisplay.classList.add('animate__animated', 'animate__fadeInUp');
              colorOutputDisplay.classList.remove('hidden');
            }, 2900);

              setTimeout(function() {
                againButton.classList.add('animate__animated', 'animate__fadeInUp');
                againButton.classList.remove('hidden');
              }, 3600);

}

function rC2() {

  function getRandomColorAgain() {
      let colorIndex; 
      do {
        colorIndex = Math.floor(Math.random() * colors.length);
      } while (colorIndex === previousIndex);

      previousIndex = colorIndex;
      const randomColor = colors[colorIndex];

      return randomColor;
  }

  const getRC = getRandomColorAgain();
  
    againButton.classList.remove('animate__fadeInUp');
    againButton.classList.add('animate__headShake');
    containerTwo.style.backgroundColor = getRC;
    colorOutputDisplay.innerHTML = getRC;

    setTimeout(function() {
      againButton.classList.remove('animate__headShake');
    }, 700);

}


