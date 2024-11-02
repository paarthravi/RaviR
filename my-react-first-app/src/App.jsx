function App()
{
    const items=[
        {id:1001, name:'Chicken', category:'nonveg'},
        {id:1002, name:'Mutton', category:'nonveg'},
        {id:2002, name:'carrot', category:'veg'},
        {id:2001, name:'tomato', category:'veg'},
        {id:2009, name:'brinjal', category:'veg'},
        {id:1005, name:'prawns', category:'nonveg'},
        {id:1007, name:'fish', category:'nonveg'}

    ];
    const listItems=items.map((item=>(<li key={item.id} style={{color:item.category=='veg'?'green':'red'}} > id:{item.id} name:{item.name} category:{item.category}</li>)))
    return(
        <>
        <h1>All Items</h1>
        <ol>{listItems}</ol>
        </>
    )
}
export default App;