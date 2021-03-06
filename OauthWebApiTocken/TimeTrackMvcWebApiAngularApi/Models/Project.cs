﻿namespace TimeTrackMvcWebApiAngularApi.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Linq;
    using System.Web;
    using System.ComponentModel.DataAnnotations;

    using TimeTrackMvcWebApiAngularApi.Entities;

    public class Project
    {
        [Key]
        public string Id { get; set; }

        [Required]
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

        //foreign key for Client
        public string ClientProjectRefId { get; set; }

        [ForeignKey("ClientProjectRefId")]
        public ClientProject ClientProject { get; set; }
    }
}
