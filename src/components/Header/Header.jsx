import "./header.css"
import miImagen from './img/ITMA II.png'
export const Header = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">

          <div className="text-center">

            <div className="row row-cols-1 row-cols-md-2 g-4 TipoDeLetra  ">

              <div className="col">

                    <div>
                    <img src={miImagen} className="TamañoDeImagen" alt="Mi Imagen" />

                    </div>

              </div>
              <div className="col">

                <div>
                <h1 className="">LISTAS DE TAREAS POR <br /> REALIZAR</h1>
                <h5 className="mt-4">Esta Aplicacion Te Ayudara A Llevar Un Control De Tus Tareas A Realizar.</h5>
                </div>

              </div>

            </div>

          </div>

        </div>
      </div>
    </div>
  )

}

