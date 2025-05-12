import { Injectable } from '@nestjs/common';
import { Connection, createConnection, Schema } from 'mongoose';

@Injectable()
export class MongoDirectoriesService {
  private connection: Connection;

  constructor() {
    this.connection = createConnection('mongodb://localhost:27017/your_database', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  }

  async createCollection(name: string, fields: { name: string; type: string }[]): Promise<void> {
    const schemaDefinition = {};
    fields.forEach(field => {
      schemaDefinition[field.name] = { type: field.type };
    });

    const directorySchema = new Schema(schemaDefinition);
    this.connection.model(name, directorySchema);
  }
} 