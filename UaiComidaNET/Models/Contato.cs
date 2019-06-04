using Google.Cloud.Firestore;

namespace UaiComidaNET.Models
{
    public class Contato
    {
        [FirestoreProperty("nome")]
        public string Nome { get; set; }

        [FirestoreProperty("valor")]
        public string Valor { get; set; }
    }
}