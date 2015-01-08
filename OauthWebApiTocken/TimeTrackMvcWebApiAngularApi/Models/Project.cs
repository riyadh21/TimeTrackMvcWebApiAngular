namespace TimeTrackMvcWebApiAngularApi.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Linq;
    using System.Web;
    using System.ComponentModel.DataAnnotations;
    public class Project
    {
        [Key]
        public string Id { get; set; }

        [Required]
        [Index(IsUnique = true)]
        [MaxLength(200)]
        public string ProjectName { get; set; }

        [Required]
        [MaxLength(400)]
        public string ProjectDescription { get; set; }

        [Required]
        [DataType(DataType.Date)]
        public DateTime ProjectStartDate { get; set; }
        
        [Required]
        [DataType(DataType.Date)]
        public DateTime ProjectEndDate { get; set; }

        [Required]
        public string ProjectAddedBy { get; set; }

        [DataType(DataType.Date)]
        public DateTime CreatedAt { get; set; }
    }
}
