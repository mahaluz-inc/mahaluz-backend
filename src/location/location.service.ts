import { Injectable } from '@nestjs/common';
import Places from 'google-places-web';
import {DaysInWeek, Hours} from "./dto/busy-times.dto";
import axios from "axios";

@Injectable()
export class LocationService {

  constructor() {
    Places.apiKey = process.env.API_KEY;
  }

  private async getLocationId(locationName: string): Promise<string> {
    const response = await Places.textsearch({
      query: locationName
    });

    return response.results[0].place_id;
  }
  
  async getLocationMetadata(locationName: string) {
    return (await Places.details({
      placeid: await this.getLocationId(locationName)
    })).result;
  }

  async getLocationBusyHours(locationName: string, dayInWeek: DaysInWeek, hour: Hours): Promise<number>{
    const url = process.env.POPULAR_TIMES_ROUTE;
    const locationId = await this.getLocationId(locationName);
    const {data} = await axios.get(
      `${url}/populartimes?api_key=${process.env.API_KEY}&place_id=${locationId}`
    );
    return data.populartimes.find(dayPopularity => dayPopularity.name === dayInWeek).data[hour];
  }
}