import { Injectable } from '@angular/core';
import { createClient, Entry } from 'contentful';

const CONFIG = {
  space: 'frcrswpczkba',
  accessToken: 'PUgVRGAtmPNDm2wdTox4LjzeFgMGDEyzK65eo_BmIHE',
  contentTypeIds: {
    committeeMember: 'committeeMember'
  }
}

@Injectable({
  providedIn: 'root'
})
export class ContentfulService {

  private client = createClient({
    space: CONFIG.space,
    accessToken: CONFIG.accessToken
  });

  constructor() { }

  public getCommitteeMembers(query?: object): Promise<Entry<any>[]> {
    return this.client.getEntries(Object.assign({ content_type: CONFIG.contentTypeIds.committeeMember}, query)).then(res => res.items);
  }
}
