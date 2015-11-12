




function employee(name, empNum, sal, rating) {

    this.name = name;
    this.empNum = empNum;
    this.sal = parseInt(sal);
    this.rating = rating;


    this.evalData = function() {
    var bonus = 0;

    if(this.rating <= 2) {
      bonus = 0;
    }
    else if(this.rating === 3) {
      bonus = 4;
    }
    else if(this.rating === 4) {
      bonus = 6;
    }
    else if(this.rating === 5)
    bonus = 10;

    if (this.empNum.length === 4) {
      bonus +=5;
    }
    if (this.sal > 65000) {
      bonus -= 1;
    }
    if(bonus >= 13) {
      bonus = 13;
    }
    return bonus;

    };

    this.sti = function(sal, bonus) {
      var dec = bonus / 100;

      return sal *= (1 + dec);
    };

    this.roundedBonus = function(sal, bonus) {
      var total = sal * (bonus / 100);

      return Math.round(total);
    }

    function calc(employee) {
      var data = {
        name: employee.name,
        STIpercentage: employee.evalData(),
        Compensations: employee.sti(employee.sal, employee.evalData()),
        TotalBonus: employee.roundedBonus(employee.sal, employee.evalData())


      }

      return data;
    };
}

var employee1 = new employee ('Atticus', '2405', '47000', 3);
var employee2 = new employee ('Jem', '62347', '63500', 4);
var employee3 = new employee ('Boo', '11435', '54000', 3);
var employee4 = new employee ('Scout', '6243', '74750', 5);

var employees = [employee1, employee2, employee3, employee4]

for(var i = 0; i < employees.length; i++) {
  console.log(calc(employees[i]));
}
