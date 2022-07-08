using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BanBif.SDP.BE
{
    public class Simulacion_BE
    {

        public int registroid { get; set; }
        public string dni { get; set; }
        public Nullable<decimal> monto { get; set; }
        public string moneda { get; set; }
        public Nullable<int> plazo { get; set; }
        public Nullable<decimal> tasa { get; set; }
        public Nullable<decimal> interes { get; set; }
        public Nullable<System.DateTime> fecha { get; set; }
        public Nullable<int> Tdatos { get; set; }
        public string mail { get; set; }

    }
}
