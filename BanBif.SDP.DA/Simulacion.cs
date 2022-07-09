using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using BanBif.SDP.BE;

namespace BanBif.SDP.DA
{
    public class Simulacion
    {

        public int RegistrarSimulacion(Simulacion_BE request)
        {
            int vResult = 0;
            try
            {

                var db = new panelEntities();
                vResult = db.SDP_RegistrarSimulacionCliente(request.dni, request.mail, request.monto, request.moneda, request.plazo, request.tasa,request.interes,request.Tdatos);
                return vResult;

            }
            catch (Exception ex)
            {
                return 0;
            }
        }
    }
}
