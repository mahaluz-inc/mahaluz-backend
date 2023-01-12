import { Injectable } from '@nestjs/common';
import Places from 'google-places-web';

@Injectable()
export class LocationService {
  constructor() {
    Places.apiKey = 'AIzaSyBn0fWCuEHbIgDILQDtlShINgBgtGx7nVU';
  }
  
  async getLocationMetadata(locationName: string) {
    const response = await Places.textsearch({
      query: locationName
    });
    
    return (await Places.details({
      placeid: response.results[0].place_id,
    })).result;
  }
}