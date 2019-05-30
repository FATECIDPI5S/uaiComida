using System;
using System.Collections.Generic;

namespace UaiComidaNET.Models
{
    public class Funcionario
    {
        public string Key { get; set; }
        public string Nome  { get; set; }
        public string Apelido { get; set; }
        public string CPF { get; set; }
        public string RG { get; set; }
        public string Email { get; set; }
        public DateTime DataCriacao { get; set; }
        public DateTime DataAtualizacao { get; set; }
        public DateTime DataExclusao { get; set; }
        public bool Ativo { get; set; }

        public List<Contato> Contatos { get; set; }
        public List<Endereco> Enderecos { get; set; }

        public Empresa Empresa { get; set; }
    }
}