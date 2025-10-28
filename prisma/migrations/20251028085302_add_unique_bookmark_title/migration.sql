/*
  Warnings:

  - A unique constraint covering the columns `[userId,title]` on the table `bookmarks` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateTable
CREATE TABLE "School" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT NOT NULL,

    CONSTRAINT "School_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "bookmarks_userId_title_key" ON "bookmarks"("userId", "title");
