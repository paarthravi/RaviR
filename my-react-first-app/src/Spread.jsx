// Used to spread the elements in Array. And the syntax is(...)

function Spread(){
    const data1=[1,2,3];
    const data2=[...data1,10,20,30];

    const result = data2.map((data,index)=>(<li key = {index}>{data}</li>))

    return(
        <>
        <h1>Numbers</h1>
        <li>{result}</li>
        </>
    );
}
export default Spread;