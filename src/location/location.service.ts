import { Injectable } from '@nestjs/common';
import Places from 'google-places-web';
import {DaysInWeek, Hours} from "./dto/busy-times.dto";
import axios from "axios";

@Injectable()
export class LocationService {

  constructor() {
    Places.apiKey = process.env.API_KEY;
  }
  
  async getLocationMetadata(placeid: string) {
    return (await Places.details({
      placeid
    })).result;
  }

  async autocompletePlaces(text: string) {
    return (await Places.autocomplete({input: text})).predictions;
  }

  async getLocationBusyHours(placeid: string): Promise<any>{
    const url = process.env.POPULAR_TIMES_ROUTE;
    const {data} = await axios.get(
      `${url}/populartimes?api_key=${process.env.API_KEY}&place_id=${placeid}`
    );
    return data;
  }
}