using System;
using System.Collections.Generic;
using Google.Cloud.Firestore;

namespace UaiComidaNET.Models
{
    public class Funcionario
    {
        public string Key { get; set; }

        [FirestoreProperty("nome")]
        public string Nome  { get; set; }

        [FirestoreProperty("apelido")]
        public string Apelido { get; set; }

        [FirestoreProperty("cpf")]
        public string CPF { get; set; }

        [FirestoreProperty("rg")]
        public string RG { get; set; }

        [FirestoreProperty("email")]
        public string Email { get; set; }

        [FirestoreProperty("dataCriacao")]
        public DateTime DataCriacao { get; set; }

        [FirestoreProperty("dataAtualizacao")]
        public DateTime DataAtualizacao { get; set; }

        [FirestoreProperty("dataExclusao")]
        public DateTime DataExclusao { get; set; }

        [FirestoreProperty("ativo")]
        public bool Ativo { get; set; }

        [FirestoreProperty("contato")]
        public List<Contato> Contatos { get; set; }

        [FirestoreProperty("endereco")]
        public List<Endereco> Enderecos { get; set; }

        public Empresa Empresa { get; set; }

        [FirestoreProperty("empresa")]
        public string EmpresaKey { get { return this.Empresa.Key; } }
    }
}