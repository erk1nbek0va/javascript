'use strict';
const nameCountry = document.getElementById('text');
const show = document.getElementById('show');
const getInfo = function(){
    reqest({
        method: 'GET',
        url: `https://restcountries.com/v3.1/name/${nameCountry.value}`,
        success: responce =>{
            const res = JSON.parse(responce);
            const CountryName = document.getElementById('name');
            const CountryRegion = document.getElementById('region');
            const CountrySubregion = document.getElementById('subregion');
            const CountryCapital = document.getElementById('capital');
            const CountryFlag = document.getElementById('flag');
            const img = document.createElement('img')

            CountryName.innerHTML = res[0].name.official;
            CountryRegion.innerHTML =  res[0].region;
            CountrySubregion.innerHTML = res[0].subregion;
            CountryCapital.innerHTML =  res[0].capital;
            img.setAttribute('src', res[0].flags.svg);

            img.style.width = '70px'
            CountryFlag.append(img);
            
        },
        error: massage => {
            console.log(`error ${massage}`);
        }       
    })
    
}
show.addEventListener('click', () =>{
    getInfo();
})




