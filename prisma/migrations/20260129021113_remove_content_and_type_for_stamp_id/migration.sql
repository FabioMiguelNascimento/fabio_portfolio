/*
  Warnings:

  - You are about to drop the column `content` on the `Stamp` table. All the data in the column will be lost.
  - You are about to drop the column `type` on the `Stamp` table. All the data in the column will be lost.
  - Added the required column `stampId` to the `Stamp` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Stamp" DROP COLUMN "content",
DROP COLUMN "type",
ADD COLUMN     "stampId" TEXT NOT NULL,
ALTER COLUMN "createdAt" SET DEFAULT now();

-- DropEnum
DROP TYPE "Types";
