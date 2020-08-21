var db = require("../db/models/db");

async function public_force(){
    console.log("Public force executed");

    college = await db.models.colleges.create({
        name: "College 1"
    })

    firstUser = await db.models.users.create({
        name: "user1",
        email: "abc@gmail.com",
        passwordHash: "123456"
    })


    task1 = await db.models.tasks.create({
        title: 'Task 1',
        location: 'Goa',
        userId: 1,
    })

    await db.models.tasks.create({
        title: 'Task 2',
        userId: 1,
    })
    
    firstUser.addTask(task1, {through: {selfGranted: false}})
    task1.addUser(user2, {through: {selfGranted: false}})

}

async function main(){

    var schema = ['sequelize', true, public_force];
    
    console.log("Creating the tables");

    console.log(schema);
    public_ret = await db[schema[0]].sequelize.sync({ force: schema[1] });

    console.log( schema[0] +  " created");
    if(schema[1]){
        force_ret = await schema[2]();
        console.log(schema[0] + " force param executed " + force_ret);
    }
    console.log("\n\n\n\n\n");
    process.exit()
}

if(require.main == module){
    main();
}
