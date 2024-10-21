import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

@Schema()
export class DirectoryField {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true, type: Boolean })
  required: boolean;

  @Prop({ required: true, type: Boolean })
  multiple: boolean;

  @Prop({ required: true, type: Number })
  order: number;

  @Prop({ required: true, type: Boolean })
  show_in_list: boolean;
}

export type DirectoryFieldDocument = HydratedDocument<DirectoryField>;
export const DirectoryFieldSchema =
  SchemaFactory.createForClass(DirectoryField);
