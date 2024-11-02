function City(){
    const cities = ['Hyd  ','Mdb   ','Chandigar   ','Culcutta   '];

    return(
        <>
        <h1>Popular Cities</h1>
        <p>{cities}</p>
        <p>FirstCity : {cities[0]}</p>
        <p>LastCity : {cities[cities.length-1]}</p>
        <p>CityLength : {cities.length}</p>
        
        </>
    );
}
export default City; 