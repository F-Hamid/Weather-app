const key = "d2886eaa99d9bd4fc2bd4133a76c9d98";
let lon = 33.5731104;
let lat = -7.5898434;

// Data fetch from openweathermap.org
const weatherSearch = async () => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=alerts&units=metric&appid=${key}`
  ).then((res) => res.json().catch((err) => window.alert(err)));
  // console.log(response);

  return response;
};

export default weatherSearch;
