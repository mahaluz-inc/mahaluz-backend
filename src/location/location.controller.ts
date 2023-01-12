import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LocationService } from './location.service';

@Controller('location')
export class LocationController {
  constructor(private readonly locationService: LocationService) {}

  @Get(':name')
  async getLocationMetadata(@Param('name') name: string) {
    return await this.locationService.getLocationMetadata(name);
  }
}
