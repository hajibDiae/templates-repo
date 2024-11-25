npm install axios express @types/express cors
mkdir src
mkdir src/controllers
mkdir src/middleware
mkdir src/services
mkdir src/helpers
mkdir src/types
Invoke-WebRequest -Uri "https://raw.githubusercontent.com/hajibDiae/templates-repo/main/Express/index.ts" -OutFile "./src/index.ts"
Invoke-WebRequest -Uri "https://raw.githubusercontent.com/hajibDiae/templates-repo/main/Express/mainController.ts" -OutFile "./src/controllers/mainController.ts"