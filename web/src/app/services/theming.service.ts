import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Theme } from '../enums/themes.enum';

@Injectable({
  providedIn: 'root',
})
export class ThemingService {
  public themes: Array<Theme> = [Theme.LIGHT_MODE, Theme.DARK_MODE];
  public selectedTheme$: BehaviorSubject<Theme> = new BehaviorSubject<Theme>(
    this.preferedTheme
  );

  public get preferedTheme(): Theme {
    const darkMode: boolean =
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark').matches;
    return darkMode ? Theme.DARK_MODE : Theme.LIGHT_MODE;
  }

  public toggleTheme(): void {
    const currentTheme: Theme = this.selectedTheme$.value;
    this.selectedTheme$.next(
      currentTheme === Theme.DARK_MODE ? Theme.LIGHT_MODE : Theme.DARK_MODE
    );
  }
}
