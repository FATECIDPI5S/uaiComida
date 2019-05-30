namespace UaiComidaNET.Models
{
    public class Mesa
    {
        public string Nome { get; set; }
        public bool EmUso { get; set; }
        public bool Ativo { get; set; }

        public Ambiente Ambiente { get; set; }
    }
}