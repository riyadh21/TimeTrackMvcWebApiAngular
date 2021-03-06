﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http.Formatting;
using System.Web.Http;
using Newtonsoft.Json.Serialization;

namespace TimeTrackMvcWebApiAngularApi
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            // Web API configuration and services

            // Web API routes
            config.MapHttpAttributeRoutes();

            config.Routes.MapHttpRoute(
                name: "GetClient",
                routeTemplate: "api/ClientProject/{getClient}/{clientName}",
                defaults: new { controller = "ClientProject", clientName = RouteParameter.Optional }
            );

            //config.Routes.MapHttpRoute(
            //    name: "AddClient",
            //    routeTemplate: "api/ClientProject/AddClient/{clientProjectModel}",
            //    defaults: new { controller = "ClientProject", clientProjectModel = RouteParameter.Optional }
            //);

            //config.Routes.MapHttpRoute(
            //    name: "EditClient",
            //    routeTemplate: "api/ClientProject/EditClient/{clientProjectModel}",
            //    defaults: new { controller = "ClientProject", clientProjectModel = RouteParameter.Optional }
            //);

            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );


            var jsonFormatter = config.Formatters.OfType<JsonMediaTypeFormatter>().First();
            jsonFormatter.SerializerSettings.ContractResolver = new CamelCasePropertyNamesContractResolver();
        }
    }
}
