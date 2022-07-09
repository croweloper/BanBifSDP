using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BanBif.SDP.BE.Log
{
    public class LogResult
    {
        public int id { get; set; }
        public Nullable<int> idregistro { get; set; }
        public string dni { get; set; }
        public Nullable<int> paso { get; set; }
        public string detalle { get; set; }
        public Nullable<System.DateTime> fecha { get; set; }
    }
}
