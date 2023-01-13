import { Controller, Get, Post, Body, Patch, Param, Delete, Query, ParseIntPipe } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { DaysInWeek, Hours } from './dto/busy-times.dto';
import { LocationService } from './location.service';

@Controller('location')
@ApiTags("Location")
export class LocationController {
  constructor(private readonly locationService: LocationService) {}

  @Get(':placeid')
  async getLocationMetadata(@Param('placeid') placeid: string) {
    return await this.locationService.getLocationMetadata(placeid);
  }

  @Get('autocomplete/:text')
  async getLocationAutocompletePredictions(@Param('text') text: string) {
    return await this.locationService.autocompletePlaces(text);
  }

  @Get('busy-level/:placeid')
  async getLocationLevelOfBusy(
    @Param('placeid') placeid: string,
    @Query('day_in_week') dayInWeek: DaysInWeek,
    @Query('hour', ParseIntPipe) hour: Hours
  ) {
    return (await this.locationService.getLocationBusyHours(placeid, dayInWeek, hour)) ?? -1;
  }
}
