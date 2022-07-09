using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using BanBif.SDP.BE.Matriz;
using BanBif.SDP.BE.MatrizDolar;

namespace BanBif.SDP.DA
{
    public  class Matriz_AD
    {
        public List<SDP_ConsultaMatrizTarifas_Result> ObtenerMatriz()
        {
            try
            {
                var db = new panelEntities();

                return db.SDP_ConsultaMatrizTarifas().ToList();
            }
            catch (Exception ex)
            {
                return null;
            }
        }

        public Matriz_ObjResult ObtenerMatriz1()
        {
            using (panelEntities db = new panelEntities())
            {
                Matriz_ObjResult result = new Matriz_ObjResult();
                var listaMatriz = db.SDP_ConsultaMatrizTarifas().ToList();

                var listaResult = new List<Matriz_Obj>();
                foreach (var item in listaMatriz)
                {
                    listaResult.Add(new Matriz_Obj
                    {
                        id = item.id,
                        plazo = item.plazo,
                        r1ka20k = item.r1ka20k,
                        r20ka30k = item.r20ka30k,
                        r30ka85k = item.r30ka85k,
                        r85ka100k = item.r85ka100k,
                        r100k = item.r100k,
                        estado = item.estado,

                    });
                }
                result.Matriz = listaResult;
                return result;
            }

        }


        public MatrizDolar_ObjResult ObtenerMatrizDolar()
        {
            using (panelEntities db = new panelEntities())
            {
                MatrizDolar_ObjResult result = new MatrizDolar_ObjResult();
                var listaMatriz = db.SDP_ConsultaMatrizTarifasDolares().ToList();

                var listaResult = new List<MatrizDolar_Obj>();
                foreach (var item in listaMatriz)
                {
                    listaResult.Add(new MatrizDolar_Obj
                    {
                        id = item.id,
                        plazo = item.plazo,
                        r1 = item.r1,
                        r2 = item.r2,
                        r3 = item.r3,
                        r4 = item.r4,
                        estado = item.estado,

                    });
                }
                result.Matriz = listaResult;
                return result;
            }

        }

    }
}
