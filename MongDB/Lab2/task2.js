use('ITI')

//a
db.instructors.find()

//b
db.instructors.find(
    { salary: { $gt: 4000 } },
    {
        _id: 0,
        firstName: 1,
        salary: 1
    }
)

//c
db.instructors.find({
    age: { $lte: 25 }
})

//d
db.instructors.find(
    {
        "address.city": "mansoura",
        "address.street": { $in: [10, 14] }
    },
    {
        _id: 0,
        firstName: 1,
        address: 1,
        salary: 1
    }
)

//e
db.instructors.find({
    courses: {
        $all: ["js", "jquery"]
    }
})

//f
db.instructors.find(
    {},
    {
        _id: 0,
        firstName: 1,
        courses: 1
    }
).forEach(function(x) {
    print(
        x.firstName + " " + x.courses.length
    );
});

//g and bonus 
db.createCollection("instructorsData")

db.instructors.find(
    {
        firstName: { $exists: true },
        lastName: { $exists: true }
    },
    {
        _id: 0,
        firstName: 1,
        lastName: 1,
        age: 1
    }
).sort({
    firstName: 1,
    lastName: -1
}).forEach(
    (x)=>{
   db.instructorsData.insertOne({ "firstName" : x.firstName,"lastName": x.lastName, "age": x.age}
   )
});

// h
db.instructorsData.find({
  fullName: /mohammed/i
})

// i 
db.instructors.deleteOne({
  firstName: "ebtesam",
  courses: { $size: 5 }
})

// j
db.instructors.updateMany(
  {},
  {
    $set: {
      active: true
    }
  }
)

// k
db.instructors.updateOne(
  {
    firstName: "mazen",
    lastName: "mohammed",
    courses: "EF"
  },
  {
    $set: {
      "courses.$": "jquery"
    }
  }
)

// l 
db.instructors.updateOne(
  {
    firstName: "noha",
    lastName: "hesham"
  },
  {
    $push: {
      courses: "jquery"
    }
  }
)

// m
db.instructors.updateOne(
  {
    firstName: "ahmed",
    lastName: "mohammed"
  },
  {
    $unset: {
      courses: ""
    }
  }
)

// n
db.instructors.updateMany(
  {
    courses: { $size: 3 }
  },
  {
    $inc: {
      salary: -500
    }
  }
)

//o 
db.instructors.updateMany(
  {},
  {
    $rename: {
      "address": "fullAddress"
    }
  }
)

//p
db.instructors.updateOne(
  {
    firstName: "noha",
    lastName: "hesham"
  },
  {
    $set: {
      "fullAddress.street": 20
    }
  }
)