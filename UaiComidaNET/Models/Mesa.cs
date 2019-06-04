using Google.Cloud.Firestore;

namespace UaiComidaNET.Models
{
    [FirestoreData]
    public class Mesa
    {
        public string Key { get; set; }

        [FirestoreProperty("nome")]
        public string Nome { get; set; }

        [FirestoreProperty("emUso")]
        public bool EmUso { get; set; }

        [FirestoreProperty("ativo")]
        public bool Ativo { get; set; }

        public Ambiente Ambiente { get; set; }

        [FirestoreProperty("ambiente")]
        public string AmbienteKey { get { return this.Ambiente.Key; } }
    }
}