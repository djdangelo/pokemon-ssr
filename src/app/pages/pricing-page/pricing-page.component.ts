import {ChangeDetectionStrategy, Component, inject, PLATFORM_ID} from '@angular/core';
import {Meta, Title} from "@angular/platform-browser";
import {isPlatformBrowser} from "@angular/common";

@Component({
  selector: 'app-pricing-page',
  standalone: true,
  imports: [],
  templateUrl: './pricing-page.component.html',
  styleUrl: './pricing-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class PricingPageComponent {
  private title: Title = inject(Title);
  private meta: Meta = inject(Meta);
  private platform = inject(PLATFORM_ID);
  ngOnInit() {
    // if (isPlatformBrowser(this.platform)) { ---> no used
    //   document.title = 'Pricing Page';
    // }
    this.title.setTitle("Pricing Page");
    this.meta.updateTag({name: 'description', content: 'Pricing Page'});
    this.meta.updateTag({name: 'keywords', content: 'Pricing Page, Angular, Pro, Dangelo, Aguilar'});
    this.meta.updateTag({name: 'op:title', content: 'Pricing Page'});
  }
}
