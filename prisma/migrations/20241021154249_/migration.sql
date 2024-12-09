-- CreateEnum
CREATE TYPE "DirectoryFieldType" AS ENUM ('integer', 'float', 'string', 'date', 'datetime', 'time');

-- CreateTable
CREATE TABLE "DirectoryField" (
    "_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "type" "DirectoryFieldType" NOT NULL,
    "required" BOOLEAN NOT NULL DEFAULT false,
    "multiple" BOOLEAN NOT NULL DEFAULT false,
    "order" INTEGER NOT NULL,
    "show_in_list" BOOLEAN NOT NULL DEFAULT true,
    "directory_id" TEXT NOT NULL,

    CONSTRAINT "DirectoryField_pkey" PRIMARY KEY ("_id")
);

-- CreateTable
CREATE TABLE "Directory" (
    "_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "Directory_pkey" PRIMARY KEY ("_id")
);

-- AddForeignKey
ALTER TABLE "DirectoryField" ADD CONSTRAINT "DirectoryField_directory_id_fkey" FOREIGN KEY ("directory_id") REFERENCES "Directory"("_id") ON DELETE RESTRICT ON UPDATE CASCADE;
