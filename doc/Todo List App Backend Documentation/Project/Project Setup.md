1. ⁠`⁠npx tsc --init`
2. ⁠Open tsconfig.json
3. ⁠⁠Change "module" value to "commonjs"
4. ⁠Change "moduleResolution" to "Node"
5. ⁠Add `"outDir": "./dist"`
6. Add `include": ["src/**/*"]` outside of compilerOptions
7. `npx prisma init`
8. Postgre SQL connection link setting in .env file and schema.prisma file
9. Make tables in prisma
10. Migrate tabel to database
11. Setup `database.ts`
12. Setup `logging.ts`
13. Setup `app.ts`
14. Make folder model (for model class) and service (for bussiness logic)
15. Make folder validation (for data validation) and make folder controller (for controllers)
16. Setup models and validations
17. Setup user service
18. Setup user controller
19. Setup routers
20. Register routers to express
21. Create middleware folders
22. Create error handler middleware
23. Register error middleware to express
24. 