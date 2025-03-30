/*
  Warnings:

  - You are about to drop the column `max` on the `IntegerFieldConstraint` table. All the data in the column will be lost.
  - You are about to drop the column `min` on the `IntegerFieldConstraint` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "IntegerFieldConstraint" DROP COLUMN "max",
DROP COLUMN "min",
ADD COLUMN     "max_value" INTEGER,
ADD COLUMN     "min_value" INTEGER;
