import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test-header',
  templateUrl: './test-header.component.html',
  styleUrls: ['./test-header.component.scss']
})
export class TestHeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  handleLogoClick = () => {
    const home = this.router.url.split('/');
    this.router.navigate(home);
  }
}
