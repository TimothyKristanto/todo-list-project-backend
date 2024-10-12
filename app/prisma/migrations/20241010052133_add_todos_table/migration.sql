-- CreateTable
CREATE TABLE "todos" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(100) NOT NULL,
    "description" TEXT NOT NULL,
    "priority" VARCHAR(10) NOT NULL,
    "due_date" VARCHAR(100) NOT NULL,
    "status" VARCHAR(20) NOT NULL,

    CONSTRAINT "todos_pkey" PRIMARY KEY ("id")
);
