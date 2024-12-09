/*
  Warnings:

  - Added the required column `code` to the `DirectoryField` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "DirectoryField" ADD COLUMN     "code" TEXT NOT NULL;
