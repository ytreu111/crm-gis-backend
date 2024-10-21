import { Prop, raw, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

@Schema()
export class DirectoryElement {
  @Prop({ required: true })
  directory_id: string;
  @Prop(raw({}))
  body: Record<string, any>;
}

export type DirectoryElementDocument = HydratedDocument<DirectoryElement>;
export const DirectoryElementSchema =
  SchemaFactory.createForClass(DirectoryElement);
