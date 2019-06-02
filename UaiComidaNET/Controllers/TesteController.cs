using Microsoft.AspNetCore.Mvc;

namespace UaiComidaNET.Controllers
{
    public class TesteController : Controller
    {
        public IActionResult Index()
        {
            return View();
        } 
    }
}