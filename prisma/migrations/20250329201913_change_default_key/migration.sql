/*
  Warnings:

  - You are about to drop the column `default` on the `IntegerFieldConstraint` table. All the data in the column will be lost.
  - You are about to drop the column `default` on the `StringFieldContraint` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "IntegerFieldConstraint" DROP COLUMN "default",
ADD COLUMN     "default_value" INTEGER;

-- AlterTable
ALTER TABLE "StringFieldContraint" DROP COLUMN "default",
ADD COLUMN     "default_value" TEXT;
