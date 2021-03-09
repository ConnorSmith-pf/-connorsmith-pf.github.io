import { Injectable, ApplicationRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Theme } from '../enums/themes.enum';
import localForage from 'localforage';

@Injectable({
  providedIn: 'root',
})
export class ThemingService {
  public selectedTheme$: BehaviorSubject<Theme> = new BehaviorSubject<Theme>(this.preferedTheme);
  public useSystemTheme$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);

  private themeListenerEvent = (e: MediaQueryListEvent) => {
    const turnOn: boolean = e.matches;

    this.setTheme(turnOn ? Theme.DARK_MODE : Theme.LIGHT_MODE);
    this.ref.tick();
  };

  constructor(private readonly ref: ApplicationRef) {
    localForage.getItem('use-system-theme', (err: any, value: boolean) => {
      this.setUseSystemTheme(value ?? true);
    });
  }

  public toggleTheme(): void {
    const currentTheme: Theme = this.selectedTheme$.value;
    this.setTheme(currentTheme === Theme.DARK_MODE ? Theme.LIGHT_MODE : Theme.DARK_MODE);
  }

  public toggleUseSystemTheme(): void {
    this.setUseSystemTheme(!this.useSystemTheme$.value);
  }

  public get preferedTheme(): Theme {
    const darkMode: boolean = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    return darkMode ? Theme.DARK_MODE : Theme.LIGHT_MODE;
  }

  private setUseSystemTheme(shouldUse: boolean): void {
    localForage.setItem('use-system-theme', shouldUse);

    this.useSystemTheme$.next(shouldUse);
    if (shouldUse) {
      this.setTheme(this.preferedTheme);
      this.setupSystemThemeListener();
    } else {
      this.removeSystemThemeListener();
    }
  }

  private setupSystemThemeListener(): void {
    console.log('Start Event Listener');
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', this.themeListenerEvent);
  }

  private removeSystemThemeListener(): void {
    console.log('Remove Event Listener');
    window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', this.themeListenerEvent);
  }

  private setTheme(themeToSet: Theme) {
    localForage.setItem('theme', themeToSet);

    this.selectedTheme$.next(themeToSet);
  }
}
