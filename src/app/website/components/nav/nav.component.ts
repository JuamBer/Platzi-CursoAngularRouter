import { Component, OnInit } from '@angular/core';

import { StoreService } from '../../../services/store.service'
import { AuthService } from '../../../services/auth.service';
import { User } from '../../../models/user.model';
import { CategoriesService } from 'src/app/services/categories.service';
import { Category } from 'src/app/models/category.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  activeMenu = false;
  counter = 0;
  profile: User | null = null;
  categories: Category[] = [];

  constructor(
    private storeService: StoreService,
    private authService: AuthService,
    private categoryService: CategoriesService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.storeService.myCart$.subscribe(products => {
      this.counter = products.length;
    });

    this.getAllCategories();
  }

  getAllCategories(){
    this.categoryService.getAll().subscribe(
      (res)=>{
        this.categories = res;
      }
    )
  }

  toggleMenu() {
    this.activeMenu = !this.activeMenu;
  }

  login() {
    this.authService.loginAndGet('john@mail.com', 'changeme')
    .subscribe(user => {
      this.profile = user;
    });
  }

  logout(){
    this.authService.logout();
    this.profile = null;
    this.router.navigate(['/home']);
  }

}
