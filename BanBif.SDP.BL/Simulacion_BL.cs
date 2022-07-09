using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using BanBif.SDP.BE;
using BanBif.SDP.BE.Simulacion;
using BanBif.SDP.DA;


namespace BanBif.SDP.BL
{
    public class Simulacion_BL
    {

        public string RegistrarSimulacion(Simulacion_BE request)
        {
            var objAD = new Simulacion();

            if (objAD.RegistrarSimulacion(request)==1)
            {
                return "Registro Exitoso";
            }
            else {
                return "Ocurrio un error durante el registro";
            }

        }

        public SimulacionRespose RegistrarSimulacion(SimulacionResult request)
        {
            var response = new SimulacionRespose();
            try
            {
                //var comisionesDA = new ComisionesxConsultaDA();
                var objAD = new Simulacion_AD();
                var resultado = objAD.RegistrarSimulacion(request);

                if (resultado.Data != null)
                {
                    response.Result = true;
                    response.Data = request;
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
