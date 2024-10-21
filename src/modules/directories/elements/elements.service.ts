import { Injectable } from "@nestjs/common";
import { MongoPrismaService } from "@services";
import { InputJsonValue } from "@mg-client/runtime/library";
import { InjectModel } from "@nestjs/mongoose";
import { DirectoryElement } from "./element.schema";
import { Model } from "mongoose";

@Injectable()
export class ElementsService {
  constructor(
    private readonly mongoPrismaService: MongoPrismaService,
    @InjectModel(DirectoryElement.name)
    private readonly directoryElementModel: Model<DirectoryElement>,
  ) {}

  async list(directoryId: string) {
    // const elements = await this.mongoPrismaService.element.findMany({})



    return (
      this.directoryElementModel
        .aggregate()
        .match({ directory_id: directoryId })
        .addFields({ id: "$_id" })
        // .
        // .aggregate([
        //   {
        //     $match: { directory_id: directoryId },
        //   },
        //   {
        //     $unwind: "$body"
        //   }
        // ])
        // .find({ directory_id: directoryId })
        // .select({ body: true, _id: true })

        // .replaceOne({ _id: "id" })
        .exec()
    );
    // const elements = await this.mongoPrismaService.element.findMany({
    //   where: { directory_id: directoryId },
    //   select: { body: true, id: true },
    // });
    //
    // return elements.map((el) => ({ id: el.id, ...el.body }));
  }

  create(directoryId: string, body: InputJsonValue) {
    return this.directoryElementModel.create({
      directory_id: directoryId,
      body,
    });

    // return this.mongoPrismaService.element.create({
    //   data: { directory_id: directoryId, body },
    // });
  }
}
