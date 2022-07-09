using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using BanBif.SDP.BE.Log;
using System.Threading.Tasks;

namespace BanBif.SDP.DA
{
    public class Log_AD
    {
        public LogResponse RegistrarLog(LogResult request)
        {
            using (panelEntities db = new panelEntities())
            {

                LogResponse result = new LogResponse();
                var obj = db.SDP_RegistrarLog(request.dni, request.idregistro, request.paso, request.detalle);

                result.Data = request;

                if (obj==1)
                {
                    result.Mensaje="Guardado Correcto";
                    result.Result=true;
                }
                else
                {
                    result.Mensaje="Guardado Incorrecto";
                    result.Result=false;
                }

                return result;
            }

        }
    }
}
