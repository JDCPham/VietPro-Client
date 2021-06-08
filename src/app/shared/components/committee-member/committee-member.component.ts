import { Component, Input, OnInit } from '@angular/core';
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'committee-member',
  templateUrl: './committee-member.component.html',
  styleUrls: ['./committee-member.component.scss']
})
export class CommitteeMemberComponent implements OnInit {

  // Inputs
  @Input()
  public image: string;

  @Input()
  public name: string;

  @Input()
  public occupation: string;

  @Input()
  public company: string;

  @Input()
  public facebookLink: string;

  @Input()
  public instagramLink: string;

  @Input()
  public linkedinLink: string;

  // Icons
  public facebook: any = faFacebook;
  public instagram: any = faInstagram;
  public linkedin: any = faLinkedin;

  constructor() { }

  ngOnInit(): void {
  }

}
