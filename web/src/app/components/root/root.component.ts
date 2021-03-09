import { Component, HostBinding, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Theme } from 'src/app/enums/themes.enum';
import { ThemingService } from 'src/app/services/theming.service';

@Component({
  selector: 'pf-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss'],
})
export class RootComponent implements OnInit {
  @HostBinding('class')
  public cssClass: string = this.themingService.preferedTheme;
  public title = 'pf';

  private themeSubscription: Subscription;
  private useSystemThemeSubscription: Subscription;

  constructor(public readonly themingService: ThemingService) {}

  public ngOnInit(): void {
    this.themeSubscription = this.themingService.selectedTheme$.subscribe((themeToApply: Theme) => {
      this.cssClass = themeToApply;
    });
    this.useSystemThemeSubscription = this.themingService.useSystemTheme$.subscribe((useSystemTheme: boolean) => {});
  }

  public ngOnDestroy(): void {
    this.themeSubscription?.unsubscribe;
    this.useSystemThemeSubscription?.unsubscribe();
  }
}
