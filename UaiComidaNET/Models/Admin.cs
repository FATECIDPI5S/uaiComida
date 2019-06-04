using Google.Cloud.Firestore;

namespace UaiComidaNET.Models
{
    [FirestoreData]
    public class Admin
    {
        public string Key { get; set; }

        [FirestoreProperty("nome")]
        public string nome { get; set; }
        
        [FirestoreProperty("email")]
        public string Email { get; set; }

        [FirestoreProperty("tipo")]
        public string Tipo { get; set; }
    }
}