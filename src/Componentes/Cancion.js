import React from "react";

export default function Cancion(props){

    console.log(props);

    return(
        <div>
            <h2>Datos de la Cancion</h2>
            <table>
                <tbody>
                    <tr> <td>Titulo:        </td><td> {props.cancioninfo.Titulo}         </td> </tr>
                    <tr> <td>Duracion:      </td><td> {props.cancioninfo.Duracion}       </td> </tr>
                    <tr> <td>Album:         </td><td> {props.cancioninfo.Album}          </td> </tr>
                    <tr> <td>Numero:        </td><td> {props.cancioninfo.Numero}         </td> </tr>
                    <tr> <td>Fechacreacion: </td><td> {props.cancioninfo.Fechacreacion}  </td> </tr>
                    <tr> <td>
                        <button onclick={ () => props.fncancion(props.cancioninfo.nombre) } >Acerca de...
                        </button>      
                    </td> </tr>
                </tbody>
            </table>
        </div>
    )
}