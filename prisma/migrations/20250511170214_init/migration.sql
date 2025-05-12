-- CreateEnum
CREATE TYPE "DirectoryFieldType" AS ENUM ('integer', 'string', 'date', 'datetime', 'time', 'point', 'linestring', 'polygon');

-- CreateTable
CREATE TABLE "DirectoryFieldConstraint" (
    "_id" TEXT NOT NULL,
    "field_id" TEXT NOT NULL,

    CONSTRAINT "DirectoryFieldConstraint_pkey" PRIMARY KEY ("_id")
);

-- CreateTable
CREATE TABLE "IntegerFieldConstraint" (
    "_id" TEXT NOT NULL,
    "min_value" INTEGER,
    "max_value" INTEGER,
    "default_value" INTEGER,
    "constraint_id" TEXT NOT NULL,

    CONSTRAINT "IntegerFieldConstraint_pkey" PRIMARY KEY ("_id")
);

-- CreateTable
CREATE TABLE "StringFieldContraint" (
    "_id" TEXT NOT NULL,
    "min_length" INTEGER,
    "max_length" INTEGER,
    "default_value" TEXT,
    "constraint_id" TEXT NOT NULL,

    CONSTRAINT "StringFieldContraint_pkey" PRIMARY KEY ("_id")
);

-- CreateTable
CREATE TABLE "DateFieldContraint" (
    "_id" TEXT NOT NULL,
    "min_value" TEXT,
    "max_value" TEXT,
    "default_value" TEXT,
    "constraint_id" TEXT NOT NULL,

    CONSTRAINT "DateFieldContraint_pkey" PRIMARY KEY ("_id")
);

-- CreateTable
CREATE TABLE "DateTimeFieldContraint" (
    "_id" TEXT NOT NULL,
    "min_value" TIMESTAMP(3),
    "max_value" TIMESTAMP(3),
    "default_value" TIMESTAMP(3),
    "constraint_id" TEXT NOT NULL,

    CONSTRAINT "DateTimeFieldContraint_pkey" PRIMARY KEY ("_id")
);

-- CreateTable
CREATE TABLE "TimeFieldContraint" (
    "_id" TEXT NOT NULL,
    "min_value" TEXT,
    "max_value" TEXT,
    "default_value" TEXT,
    "constraint_id" TEXT NOT NULL,

    CONSTRAINT "TimeFieldContraint_pkey" PRIMARY KEY ("_id")
);

-- CreateTable
CREATE TABLE "PointFieldContraint" (
    "_id" TEXT NOT NULL,
    "constraint_id" TEXT NOT NULL,

    CONSTRAINT "PointFieldContraint_pkey" PRIMARY KEY ("_id")
);

-- CreateTable
CREATE TABLE "LineStringFieldContraint" (
    "_id" TEXT NOT NULL,
    "constraint_id" TEXT NOT NULL,

    CONSTRAINT "LineStringFieldContraint_pkey" PRIMARY KEY ("_id")
);

-- CreateTable
CREATE TABLE "PolygonFieldContraint" (
    "_id" TEXT NOT NULL,
    "constraint_id" TEXT NOT NULL,

    CONSTRAINT "PolygonFieldContraint_pkey" PRIMARY KEY ("_id")
);

-- CreateTable
CREATE TABLE "DirectoryField" (
    "_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "type" "DirectoryFieldType" NOT NULL,
    "required" BOOLEAN NOT NULL DEFAULT false,
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

-- CreateTable
CREATE TABLE "Elements" (
    "_id" TEXT NOT NULL,
    "data" JSONB NOT NULL,
    "is_valid" BOOLEAN NOT NULL DEFAULT true,
    "directory_id" TEXT NOT NULL,

    CONSTRAINT "Elements_pkey" PRIMARY KEY ("_id")
);

-- CreateTable
CREATE TABLE "Layer" (
    "_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "directory_id" TEXT NOT NULL,
    "field_id" TEXT NOT NULL,

    CONSTRAINT "Layer_pkey" PRIMARY KEY ("_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "DirectoryFieldConstraint_field_id_key" ON "DirectoryFieldConstraint"("field_id");

-- CreateIndex
CREATE UNIQUE INDEX "IntegerFieldConstraint_constraint_id_key" ON "IntegerFieldConstraint"("constraint_id");

-- CreateIndex
CREATE UNIQUE INDEX "StringFieldContraint_constraint_id_key" ON "StringFieldContraint"("constraint_id");

-- CreateIndex
CREATE UNIQUE INDEX "DateFieldContraint_constraint_id_key" ON "DateFieldContraint"("constraint_id");

-- CreateIndex
CREATE UNIQUE INDEX "DateTimeFieldContraint_constraint_id_key" ON "DateTimeFieldContraint"("constraint_id");

-- CreateIndex
CREATE UNIQUE INDEX "TimeFieldContraint_constraint_id_key" ON "TimeFieldContraint"("constraint_id");

-- CreateIndex
CREATE UNIQUE INDEX "PointFieldContraint_constraint_id_key" ON "PointFieldContraint"("constraint_id");

-- CreateIndex
CREATE UNIQUE INDEX "LineStringFieldContraint_constraint_id_key" ON "LineStringFieldContraint"("constraint_id");

-- CreateIndex
CREATE UNIQUE INDEX "PolygonFieldContraint_constraint_id_key" ON "PolygonFieldContraint"("constraint_id");

-- CreateIndex
CREATE INDEX "DirectoryField_directory_id_idx" ON "DirectoryField"("directory_id");

-- CreateIndex
CREATE UNIQUE INDEX "DirectoryField_directory_id_code_key" ON "DirectoryField"("directory_id", "code");

-- AddForeignKey
ALTER TABLE "DirectoryFieldConstraint" ADD CONSTRAINT "DirectoryFieldConstraint_field_id_fkey" FOREIGN KEY ("field_id") REFERENCES "DirectoryField"("_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "IntegerFieldConstraint" ADD CONSTRAINT "IntegerFieldConstraint_constraint_id_fkey" FOREIGN KEY ("constraint_id") REFERENCES "DirectoryFieldConstraint"("_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StringFieldContraint" ADD CONSTRAINT "StringFieldContraint_constraint_id_fkey" FOREIGN KEY ("constraint_id") REFERENCES "DirectoryFieldConstraint"("_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DateFieldContraint" ADD CONSTRAINT "DateFieldContraint_constraint_id_fkey" FOREIGN KEY ("constraint_id") REFERENCES "DirectoryFieldConstraint"("_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DateTimeFieldContraint" ADD CONSTRAINT "DateTimeFieldContraint_constraint_id_fkey" FOREIGN KEY ("constraint_id") REFERENCES "DirectoryFieldConstraint"("_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TimeFieldContraint" ADD CONSTRAINT "TimeFieldContraint_constraint_id_fkey" FOREIGN KEY ("constraint_id") REFERENCES "DirectoryFieldConstraint"("_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PointFieldContraint" ADD CONSTRAINT "PointFieldContraint_constraint_id_fkey" FOREIGN KEY ("constraint_id") REFERENCES "DirectoryFieldConstraint"("_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LineStringFieldContraint" ADD CONSTRAINT "LineStringFieldContraint_constraint_id_fkey" FOREIGN KEY ("constraint_id") REFERENCES "DirectoryFieldConstraint"("_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PolygonFieldContraint" ADD CONSTRAINT "PolygonFieldContraint_constraint_id_fkey" FOREIGN KEY ("constraint_id") REFERENCES "DirectoryFieldConstraint"("_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DirectoryField" ADD CONSTRAINT "DirectoryField_directory_id_fkey" FOREIGN KEY ("directory_id") REFERENCES "Directory"("_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Elements" ADD CONSTRAINT "Elements_directory_id_fkey" FOREIGN KEY ("directory_id") REFERENCES "Directory"("_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Layer" ADD CONSTRAINT "Layer_directory_id_fkey" FOREIGN KEY ("directory_id") REFERENCES "Directory"("_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Layer" ADD CONSTRAINT "Layer_field_id_fkey" FOREIGN KEY ("field_id") REFERENCES "DirectoryField"("_id") ON DELETE CASCADE ON UPDATE CASCADE;
