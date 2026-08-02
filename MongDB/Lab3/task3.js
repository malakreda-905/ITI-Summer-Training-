// 1
use("FacultySystemV2");

db.createCollection("students");
db.createCollection("faculties");
db.createCollection("courses");

db.faculties.insertMany([
{
    facultyName: "Engineering",
    address: "Cairo"
},
{
    facultyName: "Computer Science",
    address: "Giza"
},
{
    facultyName: "Business",
    address: "Alexandria"
}
]);

db.courses.insertMany([
{
    courseName: "Database",
    finalMark: 100
},
{
    courseName: "JavaScript",
    finalMark: 80
},
{
    courseName: "Operating Systems",
    finalMark: 90
}
]);

const engFaculty = db.faculties.findOne({ facultyName: "Engineering" });
const csFaculty = db.faculties.findOne({ facultyName: "Computer Science" });

const dbCourse = db.courses.findOne({ courseName: "Database" });

db.students.insertMany([
{
    firstName: "Ahmed",
    lastName: "Ali",
    isFired: false,

    // relation with faculty 
    facultyId: engFaculty._id,

    // make array of objects
    grades: [
        { courseId: dbCourse._id, grade: 85 },
        { courseId: jsCourse._id, grade: 90 }
    ],

    // one to many relation 
    courseIds: [dbCourse._id, jsCourse._id]
},
{
    firstName: "Mona",
    lastName: "Hassan",
    isFired: false,

    facultyId: csFaculty._id,

    grades: [
        { courseId: dbCourse._id, grade: 95 },
        { courseId: jsCourse._id, grade: 88 },
        { courseId: osCourse._id, grade: 92 }
    ],

    courseIds: [dbCourse._id, jsCourse._id, osCourse._id]
}
]);

// 2

db.students.aggregate([
{
    $project: {
        _id: 0,
        fullName: {
            $concat: ["$firstName", " ", "$lastName"]
        },
        averageGrade: {
            $avg: "$grades.grade"
        }
    }
}]);

// 3
db.courses.aggregate([
{
    $group: {
        _id: null,
        totalFinalMarks: {
            $sum: "$finalMark"
        }
    }
}]);

// 4 (select Ahmed)

db.students.aggregate([
{
    $match: {
        firstName: "Ahmed"
    }
},
{
    $lookup: {
        from: "courses",
        localField: "courseIds",
        foreignField: "_id",
        as: "courses"
    }
},
{
    $project: {
        _id: 0,
        studentName: {
            $concat: ["$firstName", " ", "$lastName"]
        },
        courses: "$courses.courseName"
    }
}]);

// 5

db.students.aggregate([
{
    $match: {
        firstName: "Ahmed"
    }
},
{
    $lookup: {
        from: "faculties",
        localField: "facultyId",
        foreignField: "_id",
        as: "faculty"
    }
},
{
    $unwind: "$faculty"
},
{
    $project: {
        _id: 0,
        studentName: {
            $concat: ["$firstName", " ", "$lastName"]
        },
        facultyName: "$faculty.facultyName",
        facultyAddress: "$faculty.address"
    }
}]);