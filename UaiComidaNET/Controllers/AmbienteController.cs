using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Google.Cloud.Firestore;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using UaiComidaNET.Models;

namespace UaiComidaNET.Controllers
{
    [Route("api/[controller]")]
    public class AmbienteController: Controller
    {
        private const string COLDOC = "ambiente";
        private readonly IConfiguration _configuration;
        private FirestoreDb _firestoreDb;
        
        public AmbienteController(IConfiguration configuration, FirestoreDb firestoreDb)
        {
            _configuration = configuration;
            _firestoreDb = firestoreDb;
        }

        [HttpGet("[action]")]
        public async Task<IActionResult> RetornarAmbientes()
        {
            List<Ambiente> ambientes = new List<Ambiente>();

            Query todosAmbientes = _firestoreDb.Collection(COLDOC);
            QuerySnapshot todosAmbientesSnap = await todosAmbientes.GetSnapshotAsync();

            foreach (DocumentSnapshot documentSnapshot in todosAmbientesSnap.Documents)
            {
                if (documentSnapshot.Exists)
                {
                    Ambiente ambiente = documentSnapshot.ConvertTo<Ambiente>();
                    ambiente.Key = documentSnapshot.Id;
                    ambientes.Add(ambiente);
                }
            }
            return Json(ambientes);
        }

        [HttpPost("[action]")]
        public async Task AddToCompany([FromBody] Ambiente ambiente)
        {
            //FirestoreDb db = FirestoreDb.Create(_configuration["project-key"]);
            DocumentReference docRef = _firestoreDb.Collection(COLDOC).Document();
            await docRef.SetAsync(ambiente);
        }
    }
}