import { Injectable } from "@nestjs/common";
import CyrillicToTranslit from "cyrillic-to-translit-js";
import { CreateDirectoryFieldDto } from "./dto/create-directory-field.dto";
import { PgPrismaService } from "@services";

const cyrillicToTranslit = CyrillicToTranslit({ preset: "ru" });

@Injectable()
export class FieldsService {
  constructor(private readonly pgPrismaService: PgPrismaService) {}

  async manyCreate(fieldsDto: CreateDirectoryFieldDto[], directoryId: string) {
    const fields = fieldsDto.map((el) => ({
      code: cyrillicToTranslit.transform(el.name, "_").toUpperCase(),
      ...el,
      directory_id: directoryId,
    }));

    return this.pgPrismaService.directoryField.createManyAndReturn({
      data: fields,
    });
  }

  async findByDirectory(directoryId: string) {
    return this.pgPrismaService.directoryField.findMany({
      where: { directory_id: directoryId },
      orderBy: { order: "asc" },
    });
  }

  async updateMany(fields) {
    return this.pgPrismaService.$transaction(async (prisma) => {
      const updates = fields.map((el) => {
        return prisma.directoryField.update({ data: el, where: { id: el.id } });
      });

      await Promise.all(updates);
    });
  }

  async deleteMany(deleteIds: string[]) {
    return this.pgPrismaService.directoryField.deleteMany({
      where: { id: { in: deleteIds } },
    });
  }
}
