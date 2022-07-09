using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using BanBif.SDP.BE.Simulacion;

namespace BanBif.SDP.DA
{
    public class Simulacion_AD
    {

        public SimulacionRespose RegistrarSimulacion(SimulacionResult request)
        {
            using (panelEntities db = new panelEntities())
            {
                
                SimulacionRespose result =new SimulacionRespose();
                var obj = db.SDP_RegistrarSimulacionCliente(request.dni, request.mail, request.monto, request.moneda, request.plazo, request.tasa, request.interes, request.Tdatos);

                result.Data = request;

                if (obj==1)
                {
                    result.Mensaje="Guardado Correcto";
                    result.Result=true;
                }
                else {
                    result.Mensaje="Guardado Incorrecto";
                    result.Result=false;
                }

                return result;
            }

        }

    }
}
