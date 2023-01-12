import { Controller, Get, Post, Body, Patch, Param, Delete, Query, ParseIntPipe } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { DaysInWeek, Hours } from './dto/busy-times.dto';
import { LocationService } from './location.service';

@Controller('location')
@ApiTags("Location")
export class LocationController {
  constructor(private readonly locationService: LocationService) {}

  @Get(':name')
  async getLocationMetadata(@Param('name') name: string) {
    return await this.locationService.getLocationMetadata(name);
  }

  @Get('autocomplete/:text')
  async getLocationAutocompletePredictions(@Param('text') text: string) {
    return await this.locationService.autocompletePlaces(text);
  }

  @Get('busy-level/:name')
  async getLocationLevelOfBusy(
    @Param('name') name: string,
    @Query('day_in_week') dayInWeek: DaysInWeek,
    @Query('hour', ParseIntPipe) hour: Hours
  ) {
    return (await this.locationService.getLocationBusyHours(name, dayInWeek, hour)) ?? -1;
  }
}
