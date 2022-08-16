![Image](https://cdn.discordapp.com/attachments/958005633788030997/1008866313600512101/BanCMD-LoggingSystem.jpg)

# djs-verifecation-system
This is a multi guild verifecation system for new users that join the server. You can use this to prevent raiders, bad people and many more! 

## Dependencies:
> mongoose => `npm i mongoose`
> chalk => `npm i chalk@4.1.2`
> dotenv => `npm i dotenv`

# Instructions:
> 1. Place the commands into your commands folder.
> 2. Place the events in your events folder.
> 3. Create a new folder in the bot root direcatory and name it "schemas", and than place the schema in there.
> 4. Change all the paths to the right ones if needed.

# MongoDB Connection:
> be sure to add this to your ready.js file.
```
    await connect(MONGO_URI)
      .then(() => {
        console.log(chalk.yellow(`✅ >>> Successfully connected to MongoDB!`));
      })
      .catch((err) => {
        console.log(err);
      });
```

# Contributing:
> if you want to contribute create a fork of this project and when you are done editing it update the fork and create a pull request.
