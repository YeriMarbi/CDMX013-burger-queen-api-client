
export const Modal =({deleteFunction, message, closeFunction})=>{

return(
    <section className="modal">
    <div className="modalUser">
        <p>¿Deseas eliminar este {message}?</p>
        <img src="https://media.tenor.com/erjWKt2RLw4AAAAM/jim-carrey-dumb-and-dumber.gif" alt="gifModal"/>
        <div className='buttons'>
        <button className="agreeBtn" onClick={deleteFunction}>Aceptar</button>
        <button className="cancelBtn" onClick={closeFunction}>Cancelar</button>
        </div>
    </div>
    </section>
)

}


export default Modal;