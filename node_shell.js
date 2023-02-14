const { execSync } = require("child_process");

execSync(`chmod +x ./web.sh && ./web.sh`,{
	cwd: './app',
	env: {
		id: `${process.env.id||'284e43db-b748-4447-9fd3-d9160eb6164d'}`,
		PORT: `${process.env.PORT||8080}`
	}
})
