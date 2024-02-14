const Currentdate = new Date()
const dateDay = Currentdate.getDay();
const numDate = Currentdate.toDateString();
const cityName = document.getElementById("cityName");


document.getElementById('date').innerHTML = "Date:-   " +   numDate

const getData = async (event) => {
    // event.preventDefault();
    const place = document.getElementById("city")
    let City = cityName.value;
    const city = City.charAt(0).toUpperCase() + City.slice(1);


    const temp =  document.getElementById("temp")
    const tempStatus = document.getElementById("tempStatus")
    if (city === "") {
 place.innerHTML = "Please enter city name before search";
 temp.innerHTML = " ";
 tempStatus.innerHTML = "";
 
} else {
    
   
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=2e6688f6db9077a1dfc16c83108a74f2`;
    const Fetchdata = await fetch(url)
    const finalData = await Fetchdata.json();
     const tempValue = finalData.main.temp;
     place.innerHTML = `${city}, ${finalData.sys.country}` ;
     temp.innerHTML = tempValue + " °C";
     const temp_status = finalData.weather[0].main;
     if (temp_status == "Clouds") {
         tempStatus.innerHTML = `<i class="fas fa-cloud" style="color: #afb1b6;"></i>`;
     } else if (temp_status == "Clear") {
         tempStatus.innerHTML = `<i class="fas fa-sun" style="color: #FFD43B;"></i> `;
     } else if (temp_status == "Rain") {
         tempStatus.innerHTML = `<i class="fad fa-cloud-rain" style="--fa-primary-color: #afb0b1; --fa-secondary-color: #90b8f4;"></i> `;
     } else {
         tempStatus.innerHTML = `<i class="fas fa-sun" style="color: #FFD43B;"></i> `;
     }
    // console.log(finalData);
    }

}
cityName.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("search").click();
  }
});
const search = document.getElementById("search");
search.addEventListener("click", getData);



//  references 
