import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {Meta, Title} from "@angular/platform-browser";

@Component({
  selector: 'about',
  standalone: true,
  imports: [],
  templateUrl: './about-page.component.html',
  styleUrl: './about-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class AboutPageComponent {
  private title: Title = inject(Title);
  private meta: Meta = inject(Meta);
  ngOnInit() {
    this.title.setTitle("About Page");
    this.meta.updateTag({name: 'description', content: 'About Page'});
    this.meta.updateTag({name: 'keywords', content: 'About Page, Angular, Pro, Dangelo, Aguilar'});
    this.meta.updateTag({name: 'op:title', content: 'About Page'});
  }
}
