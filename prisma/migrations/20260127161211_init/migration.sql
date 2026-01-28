-- AlterTable
ALTER TABLE "Stamps" ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "createdAt" SET DEFAULT now(),
ADD CONSTRAINT "Stamps_pkey" PRIMARY KEY ("id");

-- DropIndex
DROP INDEX "Stamps_id_key";
