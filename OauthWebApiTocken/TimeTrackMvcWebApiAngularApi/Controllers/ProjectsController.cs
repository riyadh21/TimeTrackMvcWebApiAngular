using System.Data.Entity.Validation;

namespace TimeTrackMvcWebApiAngularApi.Controllers
{
    using System;
    using System.Collections.Generic;
    using System.Dynamic;
    using System.Linq;
    using System.Threading.Tasks;
    using System.Web;
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

        // POST api/Projects/AddProject
        [Authorize]
        [System.Web.Mvc.Route("AddProject")]
        public async Task<IHttpActionResult> AddProject(Project projectModel)
        {
            var projectHashId = Guid.NewGuid().ToString("n");
            projectModel.Id = Helper.GetHash(projectHashId);
            projectModel.CreatedAt = DateTime.UtcNow;
            
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            projectModel.ClientProjectRefId = this.GetClient(projectModel.ClientProjectRefId);
            _ctx.Projects.Add(projectModel);
            await _ctx.SaveChangesAsync();

            return Ok();
       }

        private string GetClient(string clientName)
        {
            var client = new ClientProject();

            client = this._ctx.ClientProjects.FirstOrDefault(c => c.ClientName == clientName);
            return client.Id;
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