﻿namespace TimeTrackMvcWebApiAngularApi.Entities
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Web;
    using System.ComponentModel.DataAnnotations;
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
        public DateTime ProjectStartDate { get; set; }
        
        [Required]
        public DateTime ProjectEndDate { get; set; }
    }
}
