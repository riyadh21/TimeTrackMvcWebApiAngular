using System.Web;
using System.Web.Optimization;

namespace TimeTrackMvcWebApiAngular
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.UseCdn = true;
            const string AngularCdn = "https://ajax.googleapis.com/ajax/libs/angularjs/1.3.2/angular.min.js";

            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Scripts/jquery.validate*"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at http://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                    "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                    "~/Scripts/bootstrap.js",
                    "~/Scripts/respond.js"));

            bundles.Add(new ScriptBundle("~/bundles/angularController").Include(
                    "~/Scripts/application/application.js",
                    "~/Scripts/application/router.js",
                    "~/Scripts/application/controllers/Test.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                    "~/Content/bootstrap.css",
                    "~/Content/site.css"));
            bundles.Add(new StyleBundle("~/Content/font-awesome").Include(
                    "~/Content/font-awesome.css", new CssRewriteUrlTransform()));

            bundles.Add(new ScriptBundle("~/bundles/angular", AngularCdn).Include(
                     "~/Scripts/angular.js"));

            bundles.Add(new ScriptBundle("~/bundles/application")
                .Include("~/Scripts/underscore.js")
                .IncludeDirectory("~/Scripts/application", "*.js", true));

            // Set EnableOptimizations to false for debugging. For more information,
            // visit http://go.microsoft.com/fwlink/?LinkId=301862
            BundleTable.EnableOptimizations = true;
        }
    }
}
