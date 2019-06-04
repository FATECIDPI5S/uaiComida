using Google.Cloud.Firestore;

namespace UaiComidaNET.Models
{
    [FirestoreData]
    public class Ambiente
    {
        public string Key { get; set; }

        [FirestoreProperty("nome")]
        public string Nome { get; set; }

        [FirestoreProperty("ordem")]
        public int Ordem { get; set; }

        [FirestoreProperty("ativo")]
        public bool Ativo { get; set; }

        public Empresa Empresa { get; set; }

        [FirestoreProperty("empresa")]
        public string EmpresaKey { get { return this.Empresa.Key; } }
    }
}