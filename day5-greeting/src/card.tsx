function Card(props:any) {
    return (
      <div>
       <h1>Hello{props.name}</h1>
        <p>{props.message}</p>
      </div>
    )
  }
  
  export default Card