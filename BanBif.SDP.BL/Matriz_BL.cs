using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using BanBif.SDP.BE;
using BanBif.SDP.BE.Matriz;
using BanBif.SDP.BE.MatrizDolar;
using BanBif.SDP.DA;

namespace BanBif.SDP.BL
{
    public class Matriz_BL
    {
        public List<SDP_ConsultaMatrizTarifas_Result> ObtenerMatriz()
        {
            var objAD = new Matriz_AD();
            return objAD.ObtenerMatriz();

        }

        public Matriz_ObjResponse ObtenerMatriz1()
        {
            var response = new Matriz_ObjResponse();
            try
            {
                //var comisionesDA = new ComisionesxConsultaDA();
                var objAD = new Matriz_AD();
                var resultado = objAD.ObtenerMatriz1();
                if (resultado.Matriz.Count > 0)
                {
                    response.Result = true;
                    response.Data = resultado;
                }
                else
                {
                    response.Result = false;
                    response.Mensaje = "No se encontraron registros.";
                }
            }
            catch (Exception ex)
            {
                response.Result = false;
                response.Mensaje = ex.InnerException.ToString();
            }
            return response;
        }

        public MatrizDolar_ObjResponse ObtenerMatrizDolar()
        {
            var response = new MatrizDolar_ObjResponse();
            try
            {
                //var comisionesDA = new ComisionesxConsultaDA();
                var objAD = new Matriz_AD();
                var resultado = objAD.ObtenerMatrizDolar();
                if (resultado.Matriz.Count > 0)
                {
                    response.Result = true;
                    response.Data = resultado;
                }
                else
                {
                    response.Result = false;
                    response.Mensaje = "No se encontraron registros.";
                }
            }
            catch (Exception ex)
            {
                response.Result = false;
                response.Mensaje = ex.InnerException.ToString();
            }
            return response;
        }

    }
}
