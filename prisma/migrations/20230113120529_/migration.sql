-- CreateTable
CREATE TABLE "Users" (
    "fname" TEXT,
    "id" SERIAL NOT NULL,
    "lname" TEXT,
    "email" TEXT NOT NULL,
    "password" TEXT,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);
