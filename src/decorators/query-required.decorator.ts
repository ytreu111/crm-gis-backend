import {
  BadRequestException,
  createParamDecorator,
  ExecutionContext,
} from "@nestjs/common";

export const QueryRequiredDecorator = createParamDecorator(
  (key: string, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    const value = request.query[key];

    if (typeof value === "undefined") {
      throw new BadRequestException(`Missing required query param: ${key}`);
    }

    return value;
  },
);
