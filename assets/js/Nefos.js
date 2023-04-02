Parse.initialize('Kt4hXP806lDT0rqg4AFJEj0SHCjqByOyG1KdT8GJ','uXmLRM96xvuyXLLmizKaA57uNr68SRt1BZidnv17');
Parse.serverURL = 'https://parseapi.back4app.com/';
var Pet = Parse.Object.extend("UserData");
const ourdiv = document.getElementById("Render");

async function render(CName,CCode){
    var CardRender = `<div class="col-lg-4 col-md-6">
                        <div class="card card-chart">
                            <div class="card-header">
                                <h5 class="card-category">${CName}</h5>
                                <h4 class="card-title">Grades: ${CCode}</h4>
                            </div>
                            <div class="card-body">
                                <div class="card-footer">
                                    <div class="stats">
                                        <i class="now-ui-icons ui-2_time-alarm"></i> Last 7 days
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>`;
    ourdiv.innerHTML += CardRender;
}

async function readCourses(Coursekey) {
    query = new Parse.Query("Course");
    query.equalTo("objectId", Coursekey);
    query.first().then(function(pet1){
        if(pet1){
            var CName = pet1.get("CourseName");
            var CCode = pet1.get("CourseCode");
            var credits = pet1.get("Credits");
            var CPointer = pet1.get("CoursePointer");
           console.log('Pet found successful with name: ' + CName+ " " + CCode + " " + credits);
           render(CName,CCode)
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
                readCourses(courses[i])
            }
        } else {
           console.log("Nothing found, please try again");
        }
    }).catch(function(error){
        console.log("Error: " + error.code + " " + error.message);       
    });
}

read();