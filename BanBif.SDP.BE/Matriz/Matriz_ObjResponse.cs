using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BanBif.SDP.BE.Matriz
{
    public class Matriz_ObjResponse
    {
        public bool Result { get; set; }
        public Matriz_ObjResult Data { get; set; }
        public string Mensaje { get; set; }
    }
}
