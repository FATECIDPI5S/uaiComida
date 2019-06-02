using System.Threading.Tasks;
using FirebaseAdmin;
using FirebaseAdmin.Auth;
using Google.Apis.Auth.OAuth2;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace UaiComidaNET.Controllers
{
    [Route("api/[controller]")]
    public class UsuarioController
    {
        private FirebaseApp _firebaseApp;
        public UsuarioController(FirebaseApp firebaseApp)
        {
            _firebaseApp = firebaseApp;
        }

        [HttpPost, Route("[action]/{uid}")]
        public async Task<string> GerarToken([FromRoute] string uid)
        {
            return await FirebaseAuth.DefaultInstance.CreateCustomTokenAsync(uid);
        }
    }
}