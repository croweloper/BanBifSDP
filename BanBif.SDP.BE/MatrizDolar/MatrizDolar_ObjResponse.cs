using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BanBif.SDP.BE.MatrizDolar
{
    public class MatrizDolar_ObjResponse
    {
        public bool Result { get; set; }
        public MatrizDolar_ObjResult Data { get; set; }
        public string Mensaje { get; set; }
    }
}
