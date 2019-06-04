using System;
using System.Collections.Generic;
using Google.Cloud.Firestore;

namespace UaiComidaNET.Models
{
    [FirestoreData]
    public class Empresa
    {
        public string Key { get; set; }

        [FirestoreProperty("admin")]
        public string Admin { get; set; }

        [FirestoreProperty("cnpj")]
        public string CNPJ { get; set; }

        [FirestoreProperty("ie")]
        public string IE { get; set; }

        [FirestoreProperty("razaoSocial")]
        public string RazaoSocial { get; set; }

        [FirestoreProperty("nomeFantasia")]
        public string NomeFantasia { get; set; }

        [FirestoreProperty("dataCriacao")]
        public DateTime DataCriacao { get; set; }

        [FirestoreProperty("dataAtualizacao")]
        public DateTime DataAtualizacao { get; set; }

        [FirestoreProperty("ativo")]
        public bool Ativo { get; set; }

        [FirestoreProperty("contatos")]
        public List<Contato> Contatos { get; set; }

        [FirestoreProperty("endereco")]
        public List<Endereco> Enderecos { get; set; }
    }
}