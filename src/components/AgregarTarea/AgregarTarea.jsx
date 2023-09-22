import "./agregarTarea.css"
export const AgregarTarea = ({ handleInputChange, handleSubmit, descripcion }) => {

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="card text-center shadow p-3 mb-5 bg-body-tertiary rounded border-0 rounded-3 TipoDeLetra">
              <div className="card-body">
                <h3>Agregar Tarea</h3>
                <hr />
                <div className="mb-3">
                  <form onSubmit={(e) => handleSubmit(e)}>
                    <label
                      htmlFor="tareaInput"
                      className="form-label"
                      aria-describedby="descripcionText"
                    >
                      Descripcion
                    </label>

                    <input
                      type="text"
                      onChange={(e) => handleInputChange(e)}
                      value={descripcion}
                      className="form-control shadow-sm  bg-body-tertiary rounded"
                      id="tareaInput"
                      aria-describedby="descripcionText"
                    />
                    <div className="d-grid gap-2 col-6 mx-auto">
                      <button

                        className="btn btn-primary mt-3"
                      >
                        Agregar
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );


}
