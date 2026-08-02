//5
use ('ITI')

//6
db.createCollection("instructors")

//6a
db.instructors.insertOne({
    firstName: "John",
    lastName: "Watson",
    age: 40,
    address: {
        city: "London",
        street: "221 Baker St."
    },
    courses: ["JS", "DB"]
})

//6b
db.instructors.insertOne({
    age: 21,
    address: {
        city: "Mansoura"
    }
}) // does not raise an error as mongodb is schema less 

//6c
db.instructors.insertMany([
    {
        id: 1,
        firstName: "noha",
        lastName: "hesham",
        age: 21,
        salary: 3500,
        address: { city: "cairo", street: 10, building: 8 },
        courses: ["js", "mvc", "signalR", "expressjs"]
    },
    {
        id: 2,
        firstName: "mona",
        lastName: "ahmed",
        age: 21,
        salary: 3600,
        address: { city: "cairo", street: 20, building: 8 },
        courses: ["es6", "mvc", "signalR", "expressjs"]
    },
    {
        id: 3,
        firstName: "mazen",
        lastName: "mohammed",
        age: 21,
        salary: 7040,
        address: { city: "Ismailia", street: 10, building: 8 },
        courses: ["asp.net", "mvc", "EF"]
    },
    {
        id: 4,
        firstName: "ebtesam",
        lastName: "hesham",
        age: 21,
        salary: 7500,
        address: { city: "mansoura", street: 14, building: 3 },
        courses: ["js", "html5", "signalR", "expressjs", "bootstrap"]
    },
    {
        id: 5,
        firstName: "ahmed",
        lastName: "ali",
        age: 30,
        salary: 5000,
        address: { city: "alexandria", street: 5, building: 12 },
        courses: ["python", "django", "flask"]
    },
    {
        id: 6,
        firstName: "sara",
        lastName: "kamal",
        age: 27,
        salary: 4200,
        address: { city: "cairo", street: 22, building: 6 },
        courses: ["angular", "typescript", "rxjs"]
    },
    {
        id: 7,
        firstName: "omar",
        lastName: "waled",
        age: 25,
        salary: 6700,
        address: { city: "giza", street: 18, building: 9 },
        courses: ["react", "redux", "nextjs"]
    },
    {
        id: 8,
        firstName: "yasmine",
        lastName: "fathy",
        age: 29,
        salary: 5800,
        address: { city: "cairo", street: 30, building: 15 },
        courses: ["java", "spring boot", "hibernate"]
    },
    {
        id: 9,
        firstName: "mohamed",
        lastName: "hosny",
        age: 35,
        salary: 8200,
        address: { city: "aswan", street: 8, building: 2 },
        courses: ["nodejs", "expressjs", "mongodb"]
    },
    {
        id: 10,
        firstName: "laila",
        lastName: "tarek",
        age: 26,
        salary: 4600,
        address: { city: "cairo", street: 12, building: 4 },
        courses: ["ui/ux", "figma", "css", "tailwind"]
    }
])

//7a
db.instructors.find()

//7b
db.instructors.find(
    {},
    {
        _id: 0,
        firstName: 1,
        lastName: 1,
        address: 1
    }
)

//7c
db.instructors.find(
    { age: 21 },
    {
        _id: 0,
        firstName: 1,
        "address.city": 1
    }
)

//7d
db.instructors.find(
    {
        "address.city": {
            $in: ["mansoura", "Mansoura"]
        }
    },
    {
        _id: 0,
        firstName: 1,
        age: 1
    }
)

//e1
db.instructors.find(
    {
        firstName:"mona"
    },
    {
        lastName:"ahmed"
    },
    {
        firstName:1,
        lastName:1
    }
)
// find will filter by first bracket, treats second bracket as the projection, and ignores the third bracket.


//e2
db.instructors.find(
    { 
        courses: "mvc" 
    },
    {
        firstName: 1,
        courses: 1
    }
)
// find will filter by courses which contains mvc inside and showing firstname and courses