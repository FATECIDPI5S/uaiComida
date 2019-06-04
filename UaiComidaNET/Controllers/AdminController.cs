using System.Threading.Tasks;
using FirebaseAdmin;
using FirebaseAdmin.Auth;
using Google.Apis.Auth.OAuth2;
using Google.Cloud.Firestore;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using UaiComidaNET.Models;

namespace UaiComidaNET.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    public class AdminController
    {
        const string COLLECTION_DOC = "admin";
        private FirebaseApp _firebaseApp;
        private FirestoreDb _firestoreDb;
        public AdminController(FirebaseApp firebaseApp, FirestoreDb firestoreDb)
        {
            _firebaseApp = firebaseApp;
            _firestoreDb = firestoreDb;
        }

        [HttpPost]
        public async Task Criar([FromBody] Admin usuario) 
        {
            DocumentReference docRef = _firestoreDb.Collection(COLLECTION_DOC).Document();
            await docRef.SetAsync(usuario);
        }

        [HttpPut, Route("[action]/{id}")]        
        public async Task Alterar([FromRoute] string id, [FromBody] Admin usuario) 
        {
            DocumentReference docRef = _firestoreDb.Collection(COLLECTION_DOC).Document(id);
            await docRef.SetAsync(usuario);
        }

        [HttpDelete, Route("[action]/{id}")]        
        public async Task Delete([FromRoute] string id) 
        {
            DocumentReference docRef = _firestoreDb.Collection(COLLECTION_DOC).Document(id);
            await docRef.DeleteAsync();
        }

        [AllowAnonymous]
        [HttpPost, Route("[action]/{uid}")]
        public async Task<string> GerarToken([FromRoute] string uid)
        {
            return await FirebaseAuth.DefaultInstance.CreateCustomTokenAsync(uid);
        }
    }
}