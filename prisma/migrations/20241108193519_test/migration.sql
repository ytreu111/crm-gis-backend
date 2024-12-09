-- CreateTable
CREATE TABLE "nodes" (
    "id" BIGINT NOT NULL,
    "lat" DOUBLE PRECISION NOT NULL,
    "lon" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "nodes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ways" (
    "id" BIGINT NOT NULL,
    "nodes" BIGINT NOT NULL,

    CONSTRAINT "ways_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "relations" (
    "id" BIGINT NOT NULL,
    "members" JSONB NOT NULL,

    CONSTRAINT "relations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "node_tags" (
    "id" BIGSERIAL NOT NULL,
    "node_id" BIGINT NOT NULL,
    "key" TEXT NOT NULL,
    "value" TEXT NOT NULL,

    CONSTRAINT "node_tags_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "way_tags" (
    "id" BIGSERIAL NOT NULL,
    "way_id" BIGINT NOT NULL,
    "key" TEXT NOT NULL,
    "value" TEXT NOT NULL,

    CONSTRAINT "way_tags_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "relation_tags" (
    "id" BIGSERIAL NOT NULL,
    "relation_id" BIGINT NOT NULL,
    "key" TEXT NOT NULL,
    "value" TEXT NOT NULL,

    CONSTRAINT "relation_tags_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "node_tags" ADD CONSTRAINT "node_tags_node_id_fkey" FOREIGN KEY ("node_id") REFERENCES "nodes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "way_tags" ADD CONSTRAINT "way_tags_way_id_fkey" FOREIGN KEY ("way_id") REFERENCES "ways"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "relation_tags" ADD CONSTRAINT "relation_tags_relation_id_fkey" FOREIGN KEY ("relation_id") REFERENCES "relations"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
