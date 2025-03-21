import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Req,
  Res,
} from '@nestjs/common';
import { AppService } from './app.service';
import { Request, Response } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  async createLink(@Body() link: { url: string }, @Req() request: Request) {
    const linkUrl = await this.appService.createLink(link.url);

    if (linkUrl instanceof HttpException) {
      throw new HttpException(
        linkUrl.message,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }

    if (linkUrl.shorten && typeof linkUrl.shorten === 'string') {
      const resultUrl = this.appService.getFullLink(linkUrl.shorten);

      return {
        original: link.url,
        shorten: resultUrl,
      };
    }
  }

  @Get('/:shortCode')
  async getLink(
    @Param('shortCode') shortCode: string,
    @Res() response: Response,
  ) {
    const link = await this.appService.getLink(shortCode);

    if (link instanceof HttpException) {
      throw new HttpException('Not found', 404);
    }

    return response.redirect(link.original);
  }
}
