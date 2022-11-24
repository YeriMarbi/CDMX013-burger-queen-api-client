
export const Modal =({funBorrar, funCerrar})=>{

return(
    <section className="modal">
    <div className="modalUser">
        <p>¿Deseas eliminar este usuario?</p>
        <button className="agreeBtn" onClick={funBorrar}>Aceptar</button>
        <button className="cancelBtn" onClick={funCerrar}>Cancelar</button>
    </div>
    </section>
)

}


export default Modal;