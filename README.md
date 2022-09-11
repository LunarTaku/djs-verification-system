![Image](https://cdn.discordapp.com/attachments/958005633788030997/1009120998106345554/Verification_System.png)

# djs-verification-system
This is a multi guild verification system for new users that join the server. You can use this to prevent raiders, bad people and many more! 

# MAJOR UPDATE!
- Fixed interaction errors.
- Added Modals.
- Added random verification codes in modals.

## Dependencies:
> mongoose => `npm i mongoose`

> chalk => `npm i chalk@4.1.2`

> dotenv => `npm i dotenv`
> randomized-string > `npm i randomized-string`

> randomized-string => `npm i randomized-string`

# Instructions:
> 1. Place the commands into your commands folder.
> 2. Place the events in your events folder.
> 3. Create a new folder in the bot root direcatory and name it "schemas", and than place the schema in there.
> 4. Change all the paths to the right ones if needed.

# MongoDB Connection:
> be sure to add this to your ready.js file.
```
    // Add this to the top of the file
    const { connect } = require('mongoose')
    const chalk = require("chalk")
    
    // Add this to your ready.js file
    await connect(MONGO_URI)
      .then(() => {
        console.log(chalk.yellow(`✅ >>> Successfully connected to MongoDB!`));
      })
      .catch((err) => {
        console.log(err);
      });
```

# Preview
https://user-images.githubusercontent.com/91988772/185209732-74970fdc-c872-4a68-b0fb-8e538d83924e.mov


# Contributing:
> if you want to contribute create a fork of this project and when you are done editing it update the fork and create a pull request.
