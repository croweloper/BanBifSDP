using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Configuration;
using System.Net.Http;
using System.Net.Security;
using System.Security.Cryptography.X509Certificates;
using System.Text;
using BanBif.SDP.BE;
using BanBif.SDP.BE.Simulacion;
using BanBif.SDP.BE.Matriz;
using BanBif.SDP.BE.MatrizDolar;
using BanBif.SDP.BL;
using BanBif.SDP.DA;
using Newtonsoft.Json;
using BanBif.SDP.APP.Util;
using System.Web.Http;


namespace BanBif.SDP.APP.Controllers
{
    public class SimuladorController : Controller
    {
        // GET: Simulador
        public ActionResult Index()
        {
            ViewBag.App = ConfigurationManager.AppSettings.Get("UrlApp").ToString();
            return View();
        }

        [System.Web.Http.Route ("Simulador/ObtenerMatriz1")]
        [System.Web.Http.HttpPost]
        public ActionResult ObtenerMatriz1(Matriz_ObjRequest request)
        {

            Matriz_ObjResponse contenidoResponse = new Matriz_ObjResponse();

            try
            {
                Matriz_ObjResult oListarRazaResult = new Matriz_ObjResult();
                string strURL = ConfigurationManager.AppSettings["UrlAPI"] + "api/SDP/ObtenerMatriz1";
                string response = WebApi<Matriz_ObjRequest>.RequestWebApi(request, strURL);
                contenidoResponse = JsonConvert.DeserializeObject<Matriz_ObjResponse>(response);
            }
            catch (Exception ex)
            {
                contenidoResponse.Result = false;
            }
            //return Json(contenidoResponse);
            return Json(contenidoResponse);

        }


        [System.Web.Http.Route("Simulador/ObtenerMatrizDolar")]
        [System.Web.Http.HttpPost]
        public ActionResult ObtenerMatrizDolar(MatrizDolar_ObjRequest request)
        {

            MatrizDolar_ObjResponse contenidoResponse = new MatrizDolar_ObjResponse();

            try
            {
                MatrizDolar_ObjResult oListarRazaResult = new MatrizDolar_ObjResult();
                string strURL = ConfigurationManager.AppSettings["UrlAPI"] + "api/SDP/ObtenerMatrizDolar";
                string response = WebApi<MatrizDolar_ObjRequest>.RequestWebApi(request, strURL);
                contenidoResponse = JsonConvert.DeserializeObject<MatrizDolar_ObjResponse>(response);
            }
            catch (Exception ex)
            {
                contenidoResponse.Result = false;
            }
            //return Json(contenidoResponse);
            return Json(contenidoResponse);

        }

       
        [System.Web.Http.Route("Simulador/RegistrarSimulacion")]
        [System.Web.Http.HttpPost]
        public ActionResult RegistrarSimulacion(SimulacionResult request)
        {

            SimulacionRespose contenidoResponse = new SimulacionRespose();

            try
            {
                SimulacionResult oListarRazaResult = new SimulacionResult();
                string strURL = ConfigurationManager.AppSettings["UrlAPI"] + "api/SDP/RegistrarSimulacion";
                string response = WebApi<SimulacionResult>.RequestWebApi(request, strURL);
                contenidoResponse = JsonConvert.DeserializeObject<SimulacionRespose>(response);
            }
            catch (Exception ex)
            {
                contenidoResponse.Result = false;
            }
            //return Json(contenidoResponse);
            return Json(contenidoResponse);

        }

    }
}
