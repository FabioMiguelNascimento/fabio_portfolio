/*
  Warnings:

  - You are about to drop the `Stamps` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Stamps";

-- CreateTable
CREATE TABLE "Stamp" (
    "id" UUID NOT NULL,
    "x" TEXT NOT NULL,
    "y" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "type" "Types" NOT NULL,
    "scale" DOUBLE PRECISION NOT NULL,
    "rotation" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT now(),

    CONSTRAINT "Stamp_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Stamp_x_key" ON "Stamp"("x");

-- CreateIndex
CREATE UNIQUE INDEX "Stamp_y_key" ON "Stamp"("y");
