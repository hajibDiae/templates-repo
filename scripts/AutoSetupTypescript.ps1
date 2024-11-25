Invoke-WebRequest -Uri "https://raw.githubusercontent.com/hajibDiae/templates-repo/main/Typescript/package.json" -OutFile "package.json"
npm install
Invoke-WebRequest -Uri "https://raw.githubusercontent.com/hajibDiae/templates-repo/main/Typescript/tsconfig.json" -OutFile "tsconfig.json"