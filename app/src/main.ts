import express from "express"
import { publicRouter } from "./route/public-api"
import { apiRouter } from "./route/api"
import { errorMiddleware } from "./middleware/error-middleware"
import { PORT } from "./utils/env-util"

const app = express()
app.use(express.json())
app.use("/api", publicRouter)
app.use("/api", apiRouter)
app.use(errorMiddleware)

app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`)
})
