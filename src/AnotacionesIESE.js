import React from "react";
import "./styles.css";

export default function AnotacionesIESE () {
  return (
    <div className="AnotacionesIESE">
      <h1>PROYECTO PPI AnotacionesIESE</h1>
      <h2>DATOS DE LOS INTEGRANTES</h2>
    
    <table border="1" className="tabla">
        <tr className="fila1">
         
            <td className="columna">
              NOMBRES
            </td>
            <td className="columna">APELLIDOS</td> 
            <td className="columna">
              CORREO ELECTRÓNICO</td>
            <td className="columna">N° DE CELULAR</td>
       
        </tr>
        <tr>
            <td className="columna1">Jimena</td>
            <td className="columna1">
                Giraldo García
            </td>
            <td className="columna1">
             jimenagarciagiraldo.8@gmail.com
            </td >
            <td className="columna1"> 3043401098 </td>

        </tr>
        <tr>
            <td className="columna1"> Juan Manuel</td>
            <td className="columna1">
                Quiroz Gallego
            </td>
            <td className="columna1">
             jquirozgallego@gmail.com
            </td>
            <td className="columna1"> 3007614865 </td>

        </tr>
    </table>

    </div>
  );
}
