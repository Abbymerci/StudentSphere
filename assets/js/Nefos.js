Parse.initialize('Kt4hXP806lDT0rqg4AFJEj0SHCjqByOyG1KdT8GJ','uXmLRM96xvuyXLLmizKaA57uNr68SRt1BZidnv17');
Parse.serverURL = 'https://parseapi.back4app.com/';
var Pet = Parse.Object.extend("UserData");
const ourdiv = document.getElementById("Render");

async function render(CName,CCode,credits,grade, SemYr){
    var CardRender = `<div class="col-lg-4 col-md-6">
                        <div class="card card-chart">
                            <div class="card-header">
                                <h5 class="card-category">${CName}</h5>
                                <h4 class="card-title">Course: ${CCode}</h4>
                            </div>
                            <div class="card-body">
                                <div class="card-footer">
                                    <div class="stats">
                                        Credits: ${credits}
                                    </div>
                                    <div class="stats">
                                        Overall Grade: ${grade}
                                    </div>
                                    <div class="stats">
                                        Semester: ${SemYr}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>`;
    ourdiv.innerHTML += CardRender;
}

function gradesfunc(grades,GWeight){
    var grade = 0;
    for (var i = 0; i < grades.length; i++) {
        grade += (( parseInt(grades[i]))/(parseInt(GWeight[i]))) * 100
        console.log(grade, parseInt(grades[i]), parseInt(GWeight[i]))
    }
    return (grade);

}

async function courseinfo(CName,CCode,credits,CPointer,grades){
    query = new Parse.Query("CourseInfo");
    query.equalTo("Name", CName);
    query.first().then(function(pet2){
        if(pet2){
            var Warray = pet2.get("WorkName");
            var GWeight = pet2.get("GradeWeight");
            var SemYr = pet2.get("SemesterYr");
           console.log('Pet found successful with name: ' + CName+ " " + CCode + " " + credits + " " + SemYr);
           var g = gradesfunc(grades,GWeight)
           console.log(g + "IS THE PRICE")
           render(CName,CCode,credits,g, SemYr)
        } else {
           console.log("Nothing found, please try again");
        }
    }).catch(function(error){
        console.log("Error: " + error.code + " " + error.message);       
    });
}


async function readCourses(Coursekey,grades) {
    query = new Parse.Query("Course");
    query.equalTo("objectId", Coursekey);
    query.first().then(function(pet1){
        if(pet1){
            var CName = pet1.get("CourseName");
            var CCode = pet1.get("CourseCode");
            var credits = pet1.get("Credits");
            var CPointer = pet1.get("CoursePointer");
            const point = CPointer.objectId
            console.log("RIGHT HERE" + CName)
           console.log('Pet found successful with name: ' + CName+ " " + CCode + " " + credits);
           courseinfo(CName,CCode,credits,CPointer,grades)
        } else {
           console.log("Nothing found, please try again");
        }
    }).catch(function(error){
        console.log("Error: " + error.code + " " + error.message);       
    });
}

async function read() {
    query = new Parse.Query("UserData");
    query.equalTo("objectId", "ZpQhUInRTP");
    query.first().then(function(pet){
        if(pet){
            var lenght = pet.get("CurrEnrCourses").length;
            var courses =  pet.get("CurrEnrCourses")
            var coursesgrade =  pet.get("CurrCourseGrade")
           console.log('Pet found successful with name: ' + pet.get("Name") + " " + pet.get("CurrEnrCourses"));
           console.log(lenght)
           console.log(courses)
            console.log(coursesgrade)
            for (var i = 0; i < lenght; i++) {
                readCourses(courses[i],coursesgrade[i])
            }
        } else {
           console.log("Nothing found, please try again");
        }
    }).catch(function(error){
        console.log("Error: " + error.code + " " + error.message);       
    });
}

read();