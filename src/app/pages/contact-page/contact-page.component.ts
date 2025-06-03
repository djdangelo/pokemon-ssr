import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {Meta, Title} from "@angular/platform-browser";

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [],
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class ContactPageComponent {
  private title: Title = inject(Title);
  private meta: Meta = inject(Meta);
  ngOnInit() {
    this.title.setTitle("Contact Page");
    this.meta.updateTag({name: 'description', content: 'Contact Page'});
    this.meta.updateTag({name: 'keywords', content: 'Contact Page, Angular, Pro, Dangelo, Aguilar'});
    this.meta.updateTag({name: 'op:title', content: 'Contact Page'});
  }
}
