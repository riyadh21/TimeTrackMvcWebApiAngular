using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TimeTrackMvcWebApiAngularApi.Models
{
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;

    public class ClientProject
    {
        [Key]
        public string Id { get; set; }

        [Required]
        [Index(IsUnique = true)]
        [MaxLength(200)]
        public string ClientName { get; set; }

        [Required]
        [MaxLength(400)]
        public string ClientDescription { get; set; }

        [Required]
        [DataType(DataType.Date)]
        public DateTime ClientStartDate { get; set; }

        [DataType(DataType.Date)]
        public DateTime ClientEndDate { get; set; }

        [Required]
        public string ClientAddedBy { get; set; }

        [DataType(DataType.Date)]
        public DateTime CreatedAt { get; set; }

        public ICollection<Project> Projects { get; set; } 
    }
}