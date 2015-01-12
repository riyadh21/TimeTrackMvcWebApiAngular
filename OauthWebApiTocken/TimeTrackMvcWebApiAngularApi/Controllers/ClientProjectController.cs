

namespace TimeTrackMvcWebApiAngularApi.Controllers
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using System.Web;
    using System.Web.Mvc;
    using System.Web.Http;

    using Microsoft.AspNet.Identity;

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
        [System.Web.Mvc.Route("AddClient")]
        public async Task<IHttpActionResult> AddClient(ClientProject clientProjectModel)
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