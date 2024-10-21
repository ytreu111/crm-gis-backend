import {
  BadRequestException,
  createParamDecorator,
  ExecutionContext,
} from "@nestjs/common";

export const IntParam = createParamDecorator(
  (key: string, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    const value = parseInt(request.params[key], 10);

    if (Number.isNaN(value)) {
      throw new BadRequestException(`Param ${key} is not a integer`);
    }

    return value;
  },
);
