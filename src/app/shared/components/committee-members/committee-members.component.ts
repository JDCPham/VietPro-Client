import { Component, OnInit } from '@angular/core';
import { ContentfulService } from '../../services/contentful.service';

@Component({
  selector: 'committee-members',
  templateUrl: './committee-members.component.html',
  styleUrls: ['./committee-members.component.scss']
})
export class CommitteeMembersComponent implements OnInit {

  // Members
  public members: Array<any>;

  constructor(private contentfulService: ContentfulService) { }

  ngOnInit(): void {
    this.contentfulService.getCommitteeMembers().then(res => {
      this.members = res?.map(item => item?.fields)
      console.log(res)
    })
  }

}
