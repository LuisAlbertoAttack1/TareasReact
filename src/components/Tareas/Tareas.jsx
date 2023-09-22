import { useState } from "react";
import "./tareas.css"
export const Tareas = ({tarea , index, handleCambiar, handleEliminar}) => {



  return (
    <>



      <div className="container  mt-4 mb-4">
        <div className="row">
          <div className="col">
            <div className="card card text-center shadow p-3 mb-5 bg-body-tertiary rounded border-0 rounded-3 TipoDeLetra">
            <div className={tarea.realizado ? "card bg-success" : "card bg-light"} >
              <div className="card-body">
                <h5 className="card-title">Tarea: {index +1}</h5>
                <p className="card-text">{tarea.descripcion}</p>
                <hr />
                <div className="d-grid gap-4">
                  {/* AQUI YA TIENE QUE BORRAR  */}
                  {/* <button className="btn btn-dark" onClick={ () => handleEliminar(index)}>
                    Borrar
                  </button>
                  <button onClick={ () => handleCambiar(index)} className="btn btn-info">{tarea.realizado ? "Marcar Como inconclusa" : "Marcar Como terminada"}</button> */}
                  <button className="btn btn-dark" onClick={ () => handleEliminar(tarea.id)}>
                    Borrar
                  </button>
                  <button onClick={ () => handleCambiar(tarea.id)} className="btn btn-info">{tarea.realizado ? "Marcar Como inconclusa" : "Marcar Como terminada"}</button>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
