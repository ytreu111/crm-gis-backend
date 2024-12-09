import { Injectable } from "@nestjs/common";
import { CreateDirectoryDto } from "./dto/create-directory.dto";
import { FieldsService } from "./fields/fields.service";
import { PgPrismaService } from "@services";

@Injectable()
export class DirectoriesService {
  constructor(
    private readonly pgPrismaService: PgPrismaService,
    private readonly directoryFieldsService: FieldsService,
  ) {}

  async findById(id: string) {
    return this.pgPrismaService.directory.findFirst({ where: { id } });
  }

  async getWithFieldsById(id: string) {
    return this.pgPrismaService.directory.findFirst({
      where: { id },
      include: { fields: { orderBy: { order: "asc" } } },
    });
  }

  async getAll() {
    return this.pgPrismaService.directory.findMany();
  }

  async getAllWithFields() {
    return this.pgPrismaService.directory.findMany({
      include: { fields: { orderBy: { order: "asc" } } },
    });
  }

  async create(directoryDto: CreateDirectoryDto) {
    const { fields, ...directory } = directoryDto;

    const createdDirectory = await this.pgPrismaService.directory.create({
      data: directory,
    });

    const createdFields = await this.directoryFieldsService.manyCreate(
      fields,
      createdDirectory.id,
    );

    return { ...createdDirectory, fields: createdFields };
  }

  async update(id: string, directoryDto: CreateDirectoryDto) {
    const { fields, ...directory } = directoryDto;
    await this.pgPrismaService.directory.update({
      data: directory,
      where: { id: id },
    });

    const directoryFields =
      await this.directoryFieldsService.findByDirectory(id);

    const createFields = fields.filter((el) => !el.id);
    const updateFields = fields.filter((el) => !!el.id);
    const deleteFields = directoryFields
      .filter((el) => !updateFields.find((_el) => el.id === _el.id))
      .map((el) => el.id);

    if (updateFields.length) {
      await this.directoryFieldsService.updateMany(updateFields);
    }
    if (createFields.length) {
      await this.directoryFieldsService.manyCreate(createFields, id);
    }
    if (deleteFields.length) {
      await this.directoryFieldsService.deleteMany(deleteFields);
    }

    return this.getWithFieldsById(id);
  }
}
