using Google.Cloud.Firestore;

namespace UaiComidaNET.Models
{
    public class Endereco
    {
        [FirestoreProperty("logradouro")]
        public string Logradouro { get; set; }

        [FirestoreProperty("numero")]
        public string Numero { get; set; }

        [FirestoreProperty("bairro")]
        public string Bairro { get; set; }

        [FirestoreProperty("cidade")]
        public string Cidade { get; set; }

        [FirestoreProperty("uf")]
        public string UF { get; set; }
        
    }
}