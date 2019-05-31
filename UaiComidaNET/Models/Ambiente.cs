namespace UaiComidaNET.Models
{
    public class Ambiente
    {
        public string Key { get; set; }
        public string Nome { get; set; }
        public int Ordem { get; set; }
        public bool Ativo { get; set; }

        public Empresa Empresa { get; set; }
    }
}