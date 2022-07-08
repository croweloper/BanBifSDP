using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BanBif.SDP.BE.Matriz
{
    public class Matriz_Obj
    {
        public int id { get; set; }
        public Nullable<int> plazo { get; set; }
        public Nullable<decimal> r1ka20k { get; set; }
        public Nullable<decimal> r20ka30k { get; set; }
        public Nullable<decimal> r30ka85k { get; set; }
        public Nullable<decimal> r85ka100k { get; set; }
        public Nullable<decimal> r100k { get; set; }
        public Nullable<int> estado { get; set; }
    }
}
