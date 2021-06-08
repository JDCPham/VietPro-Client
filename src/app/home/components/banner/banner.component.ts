import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  // Carousel config.
  public isAnimated: boolean = true;

  // Slides.
  public slides: Array<any> = [{
    image: "https://cdn2.civitatis.com/reino-unido/londres/guia/hyde-park.jpg",
    title: "VietPro Picnic 2021",
    subtitle: "Happening Saturday 10 July",
    description: "Lorem ipsum",
    link: "facebook.com",
    button: "View event"
  }, {
    image: "https://i1.wp.com/childrenswalkforhope.org/wp-content/uploads/2021/03/cropped-cropped-Untitled-design1.png?resize=1536%2C922&ssl=1",
    title: "Children's Walk for Hope",
    subtitle: "Thank you for joining us",
    description: "We walked in Hyde Park to raise money for Christina Noble's Children's Foundation",
    link: "facebook.com",
    button: "View event"
  }]

  // Test
  public testImage = "https://content.thriveglobal.com/wp-content/uploads/2020/06/summer.jpg"
  public testImage2 = this.sanitizer.bypassSecurityTrustStyle('url(https://www.incimages.com/uploaded_files/image/1920x1080/getty_598789974_2000133320009280368_367564.jpg)');
  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  }

}
