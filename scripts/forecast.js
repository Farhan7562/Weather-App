const key='A4BY0RUk0vSHy8srGlyKtqSinFiITDNU';

const getWeather=async(id)=>{
    const base='http://dataservice.accuweather.com/currentconditions/v1/'
    const query=`${id}?apikey=${key}`;

    const response=await fetch(base+query);
   
    const data=await response.json();
    console.log(data[0]);
    return data[0];
};

const getCity=async(city)=>{
    const base='http://dataservice.accuweather.com/locations/v1/cities/search';
    const query=`?apikey=${key}&q=${city}`;

    const response=await fetch(base+query);
    const data=await response.json();
    console.log(data[0]);
    return data[0];
};
 
// getCity('manchester').then(data=>{
//     return getWeather(data.Key);
// }).then(data=>{
//     console.log(data);
// }).catch(err=>console.log(err));

// getWeather()