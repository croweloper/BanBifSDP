using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BanBif.SDP.BE.MatrizDolar
{
    public class MatrizDolar_Obj
    {
        public int id { get; set; }
        public Nullable<int> plazo { get; set; }
        public Nullable<decimal> r1 { get; set; }
        public Nullable<decimal> r2 { get; set; }
        public Nullable<decimal> r3 { get; set; }
        public Nullable<decimal> r4 { get; set; }
        public Nullable<int> estado { get; set; }
    }
}
