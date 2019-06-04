using System.Threading.Tasks;
using FirebaseAdmin;
using FirebaseAdmin.Auth;
using Google.Cloud.Firestore;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using UaiComidaNET.Models;

namespace UaiComidaNET.Controllers
{
    public class EmpresaController : Controller
    {
        private const string COLLECTION_DOC = "empresa";
        private readonly IConfiguration _configuration;
        private FirestoreDb _firestoreDb;
        private FirebaseApp _firebaseApp;
        
        public EmpresaController(IConfiguration configuration, FirestoreDb firestoreDb, FirebaseApp firebaseApp)
        {
            _configuration = configuration;
            _firestoreDb = firestoreDb;
            _firebaseApp = firebaseApp;
        }
        
        [HttpPost]
        public async Task Criar([FromBody] Empresa empresa) 
        {
            DocumentReference docRef = _firestoreDb.Collection(COLLECTION_DOC).Document();
            await docRef.SetAsync(empresa);
        }

        [HttpPut, Route("[action]/{id}")]        
        public async Task Alterar([FromRoute] string id, [FromBody] Empresa empresa) 
        {
            DocumentReference docRef = _firestoreDb.Collection(COLLECTION_DOC).Document(id);
            await docRef.SetAsync(empresa);
        }

        [HttpDelete, Route("[action]/{id}")]        
        public async Task Delete([FromRoute] string id) 
        {
            DocumentReference docRef = _firestoreDb.Collection(COLLECTION_DOC).Document(id);
            await docRef.DeleteAsync();
        }
    }
}