-- CreateEnum
CREATE TYPE "Category" AS ENUM ('FILM', 'PROMO', 'PHOTO', 'ESCORT', 'OTHER');

-- CreateTable
CREATE TABLE "Task" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "description" TEXT NOT NULL,
    "telegramLink" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "category" "Category" NOT NULL,
    "price" TEXT NOT NULL,

    CONSTRAINT "Task_pkey" PRIMARY KEY ("id")
);
