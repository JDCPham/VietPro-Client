import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'banner-slide',
  templateUrl: './banner-slide.component.html',
  styleUrls: ['./banner-slide.component.scss']
})
export class BannerSlideComponent implements OnInit {

  @Input()
  public image: string;

  @Input()
  public title: string;

  @Input()
  public subtitle: string;

  @Input()
  public description: string;

  @Input()
  public button: string;

  @Input()
  public link: string;

  constructor(private sanitiser: DomSanitizer) { }

  ngOnInit(): void {
  }

  // Getters & Setters
  get background(): any {
    return this.sanitiser.bypassSecurityTrustStyle(`url(${this.image})`);
  }

}
