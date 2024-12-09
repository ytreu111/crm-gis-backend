import { Body, Controller, Get, Put, Req, Res } from '@nestjs/common'

@Controller("write")
export class WriteController {
  @Put()
  test(@Body() body) {
    console.log(body)
    return true
  }
}
