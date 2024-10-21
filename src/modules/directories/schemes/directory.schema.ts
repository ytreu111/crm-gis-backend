import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";
import { DirectoryField } from "../fields/schemes/directory-field.schema";

@Schema()
export class Directory {
  @Prop({ required: true })
  name: string;

  @Prop()
  description?: string;

  @Prop({
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: DirectoryField.name }],
  })
  fields: DirectoryField[];
}

export type DirectoryDocument = HydratedDocument<Directory>;
export const DirectorySchema = SchemaFactory.createForClass(Directory);