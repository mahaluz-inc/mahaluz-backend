import { Controller, Get, Post, Body, Patch, Param, Delete, Query, ParseIntPipe } from '@nestjs/common';
import { DaysInWeek, Hours } from './dto/busy-times.dto';
import { LocationService } from './location.service';

@Controller('location')
export class LocationController {
  constructor(private readonly locationService: LocationService) {}

  @Get(':name')
  async getLocationMetadata(@Param('name') name: string) {
    return await this.locationService.getLocationMetadata(name);
  }

  @Get('busy-level/:name')
  async getLocationLevelOfBusy(
    @Param('name') name: string,
    @Query('day_in_week') dayInWeek: DaysInWeek,
    @Query('hour', ParseIntPipe) hour: Hours
  ) {
    return await this.locationService.getLocationBusyHours(name, dayInWeek, hour);
  }
}
