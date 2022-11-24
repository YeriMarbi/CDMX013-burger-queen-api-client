
export const Modal =({funBorrar, funCerrar})=>{

return(
    <section className="modal">
    <div className="modalUser">
        <p>¿Deseas eliminar este usuario?</p>
        <img src="https://media.tenor.com/erjWKt2RLw4AAAAM/jim-carrey-dumb-and-dumber.gif" alt="gifModal"/>
        <div className='botones'>
        <button className="agreeBtn" onClick={funBorrar}>Aceptar</button>
        <button className="cancelBtn" onClick={funCerrar}>Cancelar</button>
        </div>
    </div>
    </section>
)

}


export default Modal;