-- AlterTable
ALTER TABLE "Stamp" ADD COLUMN     "visitorId" TEXT,
ALTER COLUMN "createdAt" SET DEFAULT now();
