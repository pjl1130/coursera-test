mainApp.controller("studentController", function($scope) {
    $scope.student1 = {
       firstName: "Molly",
       lastName: "Ame",
       strand: "STEM",
       school:"Informatics College",
       level:"12",
    
       subject:[
          {name:'Physics',marks:80},
          {name:'Chemistry',marks:80},
          {name:'Math',marks:85},
          {name:'English',marks:90},
          {name:'History',marks:85}
       ],
       fullName: function() {
          var Student1;
          Student1 = $scope.student1;
          return Student1.firstName + " " + Student1.lastName;
       },

       EdInfo: function(){
        var Student1;
        Student1 = $scope.student1;
        return Student1.strand + " " + Student1.school + " " + Student1.level;
       }
     
    }

    $scope.student2 = {
      firstName: "Jack",
      lastName: "Rogers",
      strand: "ABM",
      school:"San Beda Alabang",
      level:"11",
   
      subject:[
         {name:'Physics',marks:82},
          {name:'Chemistry',marks:84},
          {name:'Math',marks:86},
          {name:'English',marks:88},
          {name:'History',marks:90}
      ],
      fullName: function() {
         var Student2;
         Student2 = $scope.student2;
         return Student2.firstName + " " + Student2.lastName;
      },

      EdInfo: function(){
       var Student2;
       Student2 = $scope.student2;
       return Student2.strand + " " + Student2.school + " " + Student2.level;
      }
    
   }

   $scope.student3 = {
      firstName: "Koko",
      lastName: "Bop",
      strand: "HUMMS",
      school:"FEU Alabang",
      level:"11",
   
      subject:[
         {name:'Physics',marks:90},
          {name:'Chemistry',marks:91},
          {name:'Math',marks:93},
          {name:'English',marks:94},
          {name:'History',marks:95}
      ],
      fullName: function() {
         var Student3;
         Student3 = $scope.student3;
         return Student3.firstName + " " + Student3.lastName;
      },

      EdInfo: function(){
       var Student3;
       Student3 = $scope.student3;
       return Student3.strand + " " + Student3.school + " " + Student3.level;
      }
    
   };
 });