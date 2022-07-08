using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using BanBif.SDP.BE;
using BanBif.SDP.DA;


namespace BanBif.SDP.BL
{
    public class Plazo
    {
        public List<SDP_ConsultaPlazos_Result> ObtenerPlazos()
        {
            var objAD = new Plazo_AD();
            return objAD.ObtenerPlazos();
        }

    }
}
