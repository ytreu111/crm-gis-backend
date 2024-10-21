import { Injectable } from "@nestjs/common";
import { CreateDirectoryFieldDto } from "./dto/create-directory-field.dto";
import { PgPrismaService } from '@services'

@Injectable()
export class FieldsService {
  constructor(private readonly prisma: PgPrismaService) {}

  async manyCreate(fieldsDto: CreateDirectoryFieldDto[], directoryId: string) {
    const fields = fieldsDto.map((el) => ({
      ...el,
      directory_id: directoryId,
    }));

    return this.prisma.directoryField.createManyAndReturn({ data: fields });
  }

  async findByDirectory(directoryId: string) {
    return this.prisma.directoryField.findMany({
      where: { directory_id: directoryId },
      orderBy: { order: "asc" },
    });
  }

  async updateMany(fields) {
    return Promise.all(
      fields.map((el) =>
        this.prisma.directoryField.update({ data: el, where: { id: el.id } }),
      ),
    );
  }

  async deleteMany(deleteIds: string[]) {
    return this.prisma.directoryField.deleteMany({
      where: { id: { in: deleteIds } },
    });
  }
}
