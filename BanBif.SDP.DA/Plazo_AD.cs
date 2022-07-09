using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
//using System.Data.Entity.Core.Objects;

namespace BanBif.SDP.DA
{
    public class Plazo_AD
    {
        public List<SDP_ConsultaPlazos_Result> ObtenerPlazos()
        {
            
            try
            {

                var db = new panelEntities();

                return db.SDP_ConsultaPlazos().ToList();


            }
            catch (Exception ex)
            {
                return null;
            }
        }

    }
}
