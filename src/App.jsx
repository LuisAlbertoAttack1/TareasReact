import { useEffect, useReducer, useState } from "react";
import { Header } from "./components/Header/Header";
import { AgregarTarea } from "./components/AgregarTarea/AgregarTarea";
import { Tareas } from "./components/Tareas/Tareas";
import { Footer } from "./components/Footer/Footer";
import { tareaReducer } from "./reducers/tareaReducer";
export const App = () => {
  const init = () => {
    return JSON.parse(localStorage.getItem("tareas")) || []
  };
  const [state, dispatch] = useReducer(tareaReducer, [], init);

  const [descripcion, setDescripcion] = useState("")

  useEffect(() => {
    localStorage.setItem("tareas", JSON.stringify(state))
  }, [state])


  const handleInputChange = (evento) => {
    setDescripcion(evento.target.value)
    console.log(descripcion);
  }

  const handleSubmit = (evento) => {
    evento.preventDefault();
    const tareaNueva = {
      id: new Date().getTime(),
      descripcion: descripcion,
      realizado: false
    }
    const action = {
      type: "agregar",
      payload: tareaNueva
    }
    dispatch(action)
    // PARA QUE EL INPUT ESTE SIN NADA ESCRITO
    setDescripcion("")

  }


  const handleCambiar = (id) => {
    dispatch({
      //dispatch a que investigarlo
      type: "cambiar",
      payload: id
    })
  }

  const handleEliminar = (id) => {
    dispatch({
      type: "borrar",
      payload: id
    })
  }

  let terminadas = 0
  for (let i = 0; i < state.length; i++) {
    if (state[i].realizado === true) {
      terminadas++;
    }
  }

  let porcentaje = terminadas / state.length
  // console.log(porcentaje);


  return (
    <>
      <div className="container mt-4">
        <div className="row">
          <div className="col">

            <div className="card shadow-lg p-3 mb-5 bg-body-tertiary rounded border-0">

              <Header />

              <div className="card-body">
                <div className="row">
                  <div className="col-sm-6 mb-3 mb-sm-0">

                    <div>
                      <AgregarTarea descripcion={descripcion} handleInputChange={handleInputChange} handleSubmit={handleSubmit} />
                    </div>

                  </div>
                  <div className="col-sm-6">

                    <div>
                      {
                        console.log(state)
                      }
                      {state.map((tarea, index) => {
                        return (
                          <Tareas key={index} handleCambiar={handleCambiar} handleEliminar={handleEliminar} tarea={tarea} index={index} />
                          // <Tareas key={index} handleCambiar={handleCambiar} handleEliminar={handleEliminar} tarea={tarea} index={tarea.id} />
                          // con el . descripcion te dara la tarea
                        );
                      })}
                    </div>


                  </div>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>





      <Footer porcentaje={porcentaje} />
    </>
  );
};

//Tiene que llevar esto para que pueda funcion
//const App = () => <h1>Hola mundo desde react</h1> ES OTRA FORMA
//export default App; - > Como ahorrar una linea
