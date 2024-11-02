function FriendsExample(){
    const familyfriends=["Ram","Shayam","Bachhan"];
    const schoolfriends=[...familyfriends,"Mahesh","Suresh","Dinesh"];
    const friends=[...schoolfriends,"Aman","Chaman","Raman"];

    const result = friends.map((data,index)=>(<li key = {index}>{data}</li>))

    return(
        <>
        <h1>My All Friends</h1>
        <li>{result}</li>
        </>
    );
}
export default FriendsExample;