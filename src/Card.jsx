const Card=(props)=>{

    const del=()=>{
        const arr2=props.arr.filter((e,i)=>
            i!=props.ind
        );
        console.log(arr2);
        props.setArr(arr2);
    }

    return(
        <div className="card">
            <div className = "food">
          <h1>{props.name}</h1>  
            <button onClick={del}></button>
            </div>
          
         
        </div>
        );
    }
    export default Card;