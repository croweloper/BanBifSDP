using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using BanBif.SDP.BE.Log;
using BanBif.SDP.DA;
using System.Threading.Tasks;

namespace BanBif.SDP.BL
{
    public class Log_BL
    {
        public LogResponse RegistrarSimulacion(LogResult request)
        {
            var response = new LogResponse();
            try
            {
                //var comisionesDA = new ComisionesxConsultaDA();
                var objAD = new Log_AD();
                var resultado = objAD.RegistrarLog(request);

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
