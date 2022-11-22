
const btn =(myfuncion, text, width)=>{
    return(
    <button
    onClick={() => myfuncion}
    width={width}
    >{text}
    </button>
            )
}

export default btn