using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using BanBif.SDP.BL;
using BanBif.SDP.BE;
using BanBif.SDP.BE.Log;
using BanBif.SDP.BE.Matriz;
using BanBif.SDP.BE.Simulacion;
using System.Web.Http.Cors;
using System.Configuration;

namespace BanBif.SDP.API.Controllers
{

    //[EnableCors(origins: "https://localhost:44308/Simulador/Index", headers: "*", methods: "*")]
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class SDPController : ApiController
    {
        [Route("api/SDP/ObtenerPlazos")]
        [HttpPost]
        public IHttpActionResult ObtenerPlazos()
        {
            var oBL = new Plazo();
            var resultado = oBL.ObtenerPlazos();
            return Json(resultado);
        }

        [Route("api/SDP/ObtenerMatriz")]
        [HttpPost]
        public IHttpActionResult ObtenerMatriz()
        {
            var oBL = new Matriz_BL();
            var resultado = oBL.ObtenerMatriz();
            return Json(resultado);
        }

        [Route("api/SDP/ObtenerMatriz1")]
        [HttpPost]
        public IHttpActionResult ObtenerMatriz1(Matriz_ObjRequest request)
        {
            var oBL = new Matriz_BL();
            var resultado = oBL.ObtenerMatriz1();
            return Json(resultado);
        }

        //[Route("api/SDP/RegistrarSimulacion")]
        //[HttpPost]
        //public IHttpActionResult RegistrarSimulacion(Simulacion_BE request)
        //{
        //    var oBL = new Simulacion_BL();
        //    var resultado = oBL.RegistrarSimulacion(request);
        //    return Json(resultado);
        //}


        [Route("api/SDP/ObtenerMatrizDolar")]
        [HttpPost]
        public IHttpActionResult ObtenerMatrizDolar(Matriz_ObjRequest request)
        {
            var oBL = new Matriz_BL();
            var resultado = oBL.ObtenerMatrizDolar();
            return Json(resultado);
        }

        [Route("api/SDP/RegistrarSimulacion")]
        [HttpPost]
        public IHttpActionResult RegistrarSimulacion(SimulacionResult request)
        {
            var oBL = new Simulacion_BL();
            var resultado = oBL.RegistrarSimulacion(request);
            return Json(resultado);
        }

        [Route("api/SDP/RegistrarLog")]
        [HttpPost]
        public IHttpActionResult RegistrarLog(LogResult request)
        {
            var oBL = new Log_BL();
            var resultado = oBL.RegistrarSimulacion(request);
            return Json(resultado);
        }


    }

}
