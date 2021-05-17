let searchButton = document.querySelector("#search");


//Add an event listener to the button that runs the function sendApiRequest when it is clicked
searchButton.addEventListener("click", ()=>{
    console.log("button pressed");
    sendApiRequest()
    
})


//An asynchronous function to fetch data from the API
async function sendApiRequest(){ //this function is calling to request data from API, it runs when the button is pressed
    let API_KEY = "Mjtf2IZyDfFJleCpNwqKhsaMKlxhswWHB13c0qsV"
    let response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`); //interpilated api key.. then made a variable that waits for the fetch result to go out and come back.
    console.log(response);
    let data = await response.json(); //data retrieval, without "await", we are making a promise that the data is coming back. With "await", the data will come back
    console.log(data);
    useApiData(data) //now that the data is retrieved, we want to do something with it- we are passing the data to function
}


//function that does something with the data received from the API. The name of the function should be customized to whatever you are doing with 
function useApiData(data){
    document.querySelector("#content").innerHTML = `<img src="${data.url}" class="img-fluid" style="height: 580px; width: 420px;">`
    document.querySelector("#title").innerHTML = data.title
    document.querySelector("#caption").innerHTML = data.explanation 
    document.querySelector("#copywrite").innerHTML = data.copyright
    
}


