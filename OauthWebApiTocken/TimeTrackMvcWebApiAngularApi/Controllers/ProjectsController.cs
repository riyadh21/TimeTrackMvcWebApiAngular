﻿namespace TimeTrackMvcWebApiAngularApi.Controllers
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using System.Web;
    using System.Web.Mvc;
    using System.Web.Http;

    using Microsoft.AspNet.Identity;

    using TimeTrackMvcWebApiAngularApi.Entities;
    using TimeTrackMvcWebApiAngularApi.Models;

    [System.Web.Mvc.RoutePrefix("api/Projects")]
    public class ProjectsController : ApiController
    {
        private AuthContext _ctx;

        public ProjectsController()
        {
            _ctx = new AuthContext();
        }

        // POST api/Account/AddProject
        [System.Web.Mvc.Route("AddProject")]
        public async Task<IHttpActionResult> AddProject(Project projectModel)
        {

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _ctx.Projects.Add(projectModel);
            await _ctx.SaveChangesAsync();

            //IdentityResult result = await _repo.RegisterUser(projectModel);
            //IHttpActionResult errorResult = GetErrorResult(result);

            //if (errorResult != null)
            //{
            //    return errorResult;
            //}
            return Ok();
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