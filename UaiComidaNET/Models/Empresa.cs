using System;
using System.Collections.Generic;

namespace UaiComidaNET.Models
{
    public class Empresa
    {
        public string Key { get; set; }
        public string CNPJ { get; set; }
        public string IE { get; set; }
        public string RazaoSocial { get; set; }
        public string NomeFantasia { get; set; }

        public DateTime DataCriacao { get; set; }
        public DateTime DataAtualizacao { get; set; }
        public bool Ativo { get; set; }

        public List<Contato> Contatos { get; set; }
        public List<Endereco> Enderecos { get; set; }
    }
}