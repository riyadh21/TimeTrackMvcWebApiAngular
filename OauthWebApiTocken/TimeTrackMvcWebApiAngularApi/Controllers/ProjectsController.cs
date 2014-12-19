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
            //IdentityResult result = await _repo.RegisterUser(projectModel);
            //IHttpActionResult errorResult = GetErrorResult(result);

            //if (errorResult != null)
            //{
            //    return errorResult;
            //}
            return Ok();
        }
    }
}