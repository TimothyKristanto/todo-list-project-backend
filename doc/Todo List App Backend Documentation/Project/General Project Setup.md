1. ⁠`⁠npx tsc --init`
2. ⁠Open tsconfig.json
3. ⁠⁠Change "module" value to "commonjs"
4. ⁠Change "moduleResolution" to "Node"
5. ⁠Add `"outDir": "./dist"`
6. Add `include": ["src/**/*"]` outside of compilerOptions
7. `npx prisma init`
8. Postgre SQL connection link setting in .env file and schema.prisma file
9. Make tables in prisma
10. Migrate tabel to database `npx prisma migrate dev`
11. Setup `database.ts`
12. Setup `logging.ts`
13. Setup `app.ts`
14. Setup `main.ts`
15. Make folder model (for model class) and service (for bussiness logic)
16. Make folder validation (for data validation) and make folder controller (for controllers)
17. Read [[Authentication Functionality Setup]]
18. Read [[Todo List Functionality Setup]]
19. Open your package.json file
20. Type in `"start": "tsc && node dist/main.js"`inside the `scripts` 