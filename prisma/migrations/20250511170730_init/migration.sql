-- DropForeignKey
ALTER TABLE "DateTimeFieldContraint" DROP CONSTRAINT "DateTimeFieldContraint_constraint_id_fkey";

-- AddForeignKey
ALTER TABLE "DateTimeFieldContraint" ADD CONSTRAINT "DateTimeFieldContraint_constraint_id_fkey" FOREIGN KEY ("constraint_id") REFERENCES "DirectoryFieldConstraint"("_id") ON DELETE CASCADE ON UPDATE CASCADE;
