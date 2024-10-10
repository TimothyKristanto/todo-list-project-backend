
1.⁠ ⁠Install Node JS
2.⁠ ⁠Create a project folder
3.⁠ ⁠⁠ `npm init -y`
4.⁠ `⁠⁠npm i bcrypt express uuid winston zod`
5.⁠ `⁠npm i --save-dev @types/bcrypt @types/express @types/uuid prisma typescript` ⁠
6.⁠ `⁠npx tsc --init`
7.⁠ ⁠Open tsconfig.json
8.⁠ ⁠Change "module" value to "commonjs"
9.⁠ ⁠Change "moduleResolution" to "Node"
10.⁠ ⁠Add "outDir": "./dist"
11.⁠ ⁠Add "include": ["src/**/\*"] outside of compilerOptions
12.⁠ ⁠Create src folder
13.⁠ ⁠Add index.js inside of it