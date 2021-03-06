import { Component, OnInit } from '@angular/core';
import { HeaderButton } from '../../models/HeaderButton';
import { HeaderService } from 'src/app/services/header.service';

@Component({
  selector: 'pf-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public headerButtons: Array<HeaderButton> = [];

  constructor(private readonly headerService: HeaderService) {}

  public ngOnInit(): void {
    this.headerButtons = this.headerService.HeaderButtons;
  }
}
