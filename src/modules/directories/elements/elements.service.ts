import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { DirectoryElement } from "./element.schema";
import { Model } from "mongoose";

@Injectable()
export class ElementsService {
  constructor(
    @InjectModel(DirectoryElement.name)
    private readonly directoryElementModel: Model<DirectoryElement>,
  ) {}

  async list(directoryId: string) {
    return this.directoryElementModel
      .aggregate()
      .match({ directory_id: directoryId })
      .replaceRoot({ $mergeObjects: [{ id: "$_id" }, "$body"] })
      .exec();
  }

  create(directoryId: string, body: Record<string, any>) {
    return this.directoryElementModel.create({
      directory_id: directoryId,
      body,
    });
  }
}
