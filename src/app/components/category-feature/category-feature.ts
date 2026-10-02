import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-category-feature',
  templateUrl: './category-feature.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoryFeature {
  readonly titleId = input.required<string>();
  readonly eyebrow = input.required<string>();
  readonly title = input.required<string>();
  readonly image = input.required<string>();
  readonly imageAlt = input.required<string>();
  readonly categories = input.required<readonly string[]>();
  readonly reverse = input(false);
  readonly lowerContent = input(false);
  readonly lowerContentMore = input(false);
}
