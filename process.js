// argv
console.log(process.argv);
console.log(process.argv[2]);

// process.env
console.log(process.env)
console.log(process.env.COMPUTERNAME)

// pid
console.log(process.pid)

// cwd - current working directory
console.log(process.cwd())

// memoryUsage()
console.log(process.memoryUsage())

// uptime()
console.log(process.uptime())

// exit()
process.exit(0);