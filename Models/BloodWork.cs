using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace CoreAndReact.Models
{
    public class BloodWork
    {
        public int BloodWorkID { get; set; }
        [Required]
        [DataType(DataType.Date)]
        public string DateCreated { get; set; }

        [Required]
        [DataType(DataType.Date)]
        public string ExamDate { get; set; }

        [Required]
        [DataType(DataType.Date)]
        public string ResultDate { get; set; }

        [Required]
        [Column(TypeName = "nvarchar(max)")]
        public string Description { get; set; }

        [Required]
        [Column(TypeName = "varchar(10)")]
        [RegularExpression(@"^[0-9.-]*$", ErrorMessage = "Please enter numbers only.")]
        public string Hemoglobin { get; set; }

        [Required]
        [Column(TypeName = "varchar(10)")]
        [RegularExpression(@"^[0-9.-]*$", ErrorMessage = "Please enter numbers only.")]
        public string Hematocrit { get; set; }

        [Required]
        [Column(TypeName = "varchar(10)")]
        [RegularExpression(@"^[0-9.-]*$", ErrorMessage = "Please enter numbers only.")]
        public string WhiteBloodCellCount { get; set; }

        [Required]
        [Column(TypeName = "varchar(10)")]
        [RegularExpression(@"^[0-9.-]*$", ErrorMessage = "Please enter numbers only.")]
        public string RedBloodCellCount { get; set; }
    }
}
