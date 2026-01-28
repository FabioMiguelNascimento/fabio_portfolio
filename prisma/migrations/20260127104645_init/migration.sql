-- Ensure pgcrypto (gen_random_uuid) is available
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- CreateEnum (if not exists)
DO $$ BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'Types') THEN
    CREATE TYPE "Types" AS ENUM ('ICON', 'EMOJI', 'TEXT');
  END IF;
END $$;

-- CreateTable (if not exists)
DO $$ BEGIN
  IF NOT EXISTS (SELECT 1 FROM information_schema.tables WHERE table_name = 'Stamps') THEN
    CREATE TABLE "Stamps" (
        "id" UUID NOT NULL DEFAULT gen_random_uuid(),
        "x" TEXT NOT NULL,
        "y" TEXT NOT NULL,
        "content" TEXT NOT NULL,
        "type" "Types" NOT NULL,
        "scale" DOUBLE PRECISION NOT NULL,
        "rotation" DOUBLE PRECISION NOT NULL,
        "createdAt" TIMESTAMP(3) NOT NULL DEFAULT now()
    );
  END IF;
END $$;

-- CreateIndex (if not exists)
DO $$ BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_indexes WHERE tablename='Stamps' AND indexname='Stamps_id_key') THEN
    CREATE UNIQUE INDEX "Stamps_id_key" ON "Stamps"("id");
  END IF;
END $$;

-- CreateIndex (if not exists)
DO $$ BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_indexes WHERE tablename='Stamps' AND indexname='Stamps_x_key') THEN
    CREATE UNIQUE INDEX "Stamps_x_key" ON "Stamps"("x");
  END IF;
END $$;

-- CreateIndex (if not exists)
DO $$ BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_indexes WHERE tablename='Stamps' AND indexname='Stamps_y_key') THEN
    CREATE UNIQUE INDEX "Stamps_y_key" ON "Stamps"("y");
  END IF;
END $$;
