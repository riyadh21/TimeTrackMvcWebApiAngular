﻿using System.Data.Entity.Migrations;

namespace TimeTrackMvcWebApiAngularApi.Controllers
{
    using System;
    using System.Collections.Generic;
    using System.Data.Entity;
    using System.Dynamic;
    using System.Linq;
    using System.Threading.Tasks;
    using System.Web;
    using System.Web.Http;

    using Microsoft.AspNet.Identity;

    using TimeTrackMvcWebApiAngularApi.Entities;
    using TimeTrackMvcWebApiAngularApi.Models;

    [System.Web.Mvc.RoutePrefix("api/ClientProject")]
    public class ClientProjectController : ApiController
    {
        private AuthContext _ctx;

        public ClientProjectController()
        {
            _ctx = new AuthContext();
        }

        // POST api/ClientProject/AddClient
        [System.Web.Http.Authorize]
        //[System.Web.Mvc.Route("AddClient")]
        public async Task<IHttpActionResult> PostClientProject(ClientProject clientProjectModel)
        {
            var clientHashId = Guid.NewGuid().ToString("n");
            clientProjectModel.Id = Helper.GetHash(clientHashId);
            clientProjectModel.CreatedAt = DateTime.UtcNow;

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _ctx.ClientProjects.Add(clientProjectModel);
            await _ctx.SaveChangesAsync();

            return Ok();
        }

        // POST api/ClientProject/EditClient
        [System.Web.Http.Authorize]
        //[System.Web.Mvc.Route("EditClient")]
        public async Task<IHttpActionResult> PutClientProject(ClientProject clientProjectModel)
        {
            var clientHashId = Guid.NewGuid().ToString("n");

            var client = _ctx.ClientProjects.Find(clientProjectModel.Id);

            if (client == null)
                throw new Exception("Invalied request");

            clientProjectModel.CreatedAt = client.CreatedAt;
            clientProjectModel.ClientAddedBy = client.ClientAddedBy;

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }



            _ctx.ClientProjects.AddOrUpdate(clientProjectModel);
            await _ctx.SaveChangesAsync();

            return Ok();
        }

        //// GET api/ClientProject/getAllClients
        //[System.Web.Http.Authorize]
        //[System.Web.Mvc.Route("GetClients")]
        //public async Task<IHttpActionResult> GetClients()
        //{
            
        //    if (!ModelState.IsValid)
        //    {
        //        return BadRequest(ModelState);
        //    }

        //    dynamic clientList = new ExpandoObject();

        //    clientList.clients = _ctx.ClientProjects.Select(
        //                    client => new
        //                    {
        //                        clientName = client.ClientName
        //                    }
        //                ).ToList();
            
        //    return Ok(clientList);
        //}

        // GET api/ClientProject/getAllClients
        [System.Web.Http.Authorize]
        [System.Web.Mvc.Route("GetAllClients")]
        public async Task<IHttpActionResult> GetAllClients()
        {

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            dynamic clientList = new ExpandoObject();

            clientList.clients = _ctx.ClientProjects.Select(
                            client => new
                            {
                                clientId = client.Id,
                                clientName = client.ClientName,
                                ClientDescription = client.ClientDescription,
                                ClientStartDate = client.ClientStartDate,
                                ClientEndDate = client.ClientEndDate,
                                ClientAddedBy = client.ClientAddedBy

                            }
                        ).ToList();

            return Ok(clientList);
        }

        // GET api/ClientProject/getClients/
        [System.Web.Http.Authorize]
        [System.Web.Mvc.Route("GetClient")]
        public async Task<IHttpActionResult> GetClient(string clientName)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            dynamic client = new ExpandoObject();

            client.clients = this._ctx.ClientProjects.FirstOrDefault(c => c.ClientName==clientName);

            return Ok(client);
        }

        // GET api/ClientProject/GetClientById/
        [System.Web.Http.Authorize]
        [Route("~/api/ClientProject/GetClientById/{id}")]
        [HttpGet]
        public async Task<IHttpActionResult> GetClientById(string id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            dynamic client = new ExpandoObject();

            client.clients = this._ctx.ClientProjects.FirstOrDefault(c => c.Id == id);

            return Ok(client);
        }

        // GET api/ClientProject/GetClientById/
        [System.Web.Http.Authorize]
        [Route("~/api/ClientProject/SearchClients/{name}")]
        [HttpGet]
        public async Task<IHttpActionResult> SearchClients(string name)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            dynamic client = new ExpandoObject();

            client.clients = this._ctx.ClientProjects.Where(c => c.ClientName.Contains(name));

            return Ok(client);
        }

        private IHttpActionResult GetErrorResult(IdentityResult result)
        {
            if (result == null)
            {
                return InternalServerError();
            }

            if (!result.Succeeded)
            {
                if (result.Errors != null)
                {
                    foreach (string error in result.Errors)
                    {
                        ModelState.AddModelError("", error);
                    }
                }

                if (ModelState.IsValid)
                {
                    // No ModelState errors are available to send, so just return an empty BadRequest.
                    return BadRequest();
                }

                return BadRequest(ModelState);
            }

            return null;
        }
    }
}
