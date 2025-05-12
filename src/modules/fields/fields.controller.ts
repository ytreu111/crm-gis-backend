import {
  Controller,
  Get,
  NotFoundException,
  Param,
  Query,
} from '@nestjs/common'
import { ApiQuery, ApiOkResponse } from '@nestjs/swagger'
import { FieldsService } from './fields.service'
import { FieldResponseApiExtraModels, FieldResponseSchemaPath } from './lib/field-help'

@Controller()
@FieldResponseApiExtraModels()
export class FieldsController {
  constructor(
    private fieldsService: FieldsService,
  ) {}

  @Get()
  @ApiQuery({ name: 'directory_id', required: true })
  @ApiOkResponse({
    schema: {
      items: {
        anyOf: FieldResponseSchemaPath(),
      },
    },
  })
  list(
    @Query('directory_id') directoryId: string,
  ) {
    return this.fieldsService.findAll({ directoryId })
  }

  @Get(':id')
  @ApiOkResponse({
    schema: {
      oneOf: FieldResponseSchemaPath(),
    },
  })
  async retrieve(
    @Param('id') id: string,
  ) {
    const field = await this.fieldsService.findById(id)

    if (!field) throw new NotFoundException()

    return field
  }

  // @Post()
  // @ApiBody({
  //   schema: {
  //     oneOf: [
  //       { $ref: getSchemaPath(CreateIntegerFieldDto) },
  //       { $ref: getSchemaPath(CreateStringFieldDto) },
  //       { $ref: getSchemaPath(CreateDateFieldDto) },
  //       { $ref: getSchemaPath(CreateDatetimeFieldDto) },
  //       { $ref: getSchemaPath(CreateTimeFieldDto) },
  //     ],
  //   },
  // })
  // @ApiCreatedResponse({
  //   schema: {
  //     oneOf: [
  //       { $ref: getSchemaPath(StringFieldResponseDto) },
  //       { $ref: getSchemaPath(IntegerFieldResponseDto) },
  //       { $ref: getSchemaPath(DateFieldResponseDto) },
  //       { $ref: getSchemaPath(DatetimeFieldResponseDto) },
  //       { $ref: getSchemaPath(TimeFieldResponseDto) },
  //     ],
  //   },
  // })
  // @UsePipes(ValidateCreateFieldBodyPipe)
  // create(
  //   @Body() body: CreateFieldType,
  // ) {
  //   console.log(body)
  //   // return this.fieldsService.create(body.directory_id, body.field)
  // }

  // @Put(':id')
  // @ApiBody({
  //   schema: {
  //     oneOf: [
  //       { $ref: getSchemaPath(UpdateStringFieldDto) },
  //       { $ref: getSchemaPath(UpdateIntegerFieldDto) },
  //       { $ref: getSchemaPath(UpdateDateFieldDto) },
  //       { $ref: getSchemaPath(UpdateDatetimeFieldDto) },
  //       { $ref: getSchemaPath(UpdateTimeFieldDto) },
  //     ],
  //   },
  // })
  // @ApiOkResponse({
  //   schema: {
  //     oneOf: [
  //       { $ref: getSchemaPath(StringFieldResponseDto) },
  //       { $ref: getSchemaPath(IntegerFieldResponseDto) },
  //       { $ref: getSchemaPath(DateFieldResponseDto) },
  //       { $ref: getSchemaPath(DatetimeFieldResponseDto) },
  //       { $ref: getSchemaPath(TimeFieldResponseDto) },
  //     ],
  //   },
  // })
  // async update(
  //   @Param('id') id: string,
  //   @Body() body,
  // ) {
  //   const field = await this.fieldsService.update(id, body)
  //
  //   if (!field) throw new NotFoundException()
  //
  //   return field
  // }

  // @Delete(':id')
  // async delete(
  //   @Param('id') id: string,
  // ) {
  //   this.fieldsService.delete(id)
  // }
}