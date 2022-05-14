import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './website/pages/category/category.component';
import { HomeComponent } from './website/pages/home/home.component';
import { LoginComponent } from './website/pages/login/login.component';
import { MyCartComponent } from './website/pages/mycart/mycart.component';
import { NotFoundComponent } from './website/pages/not-found/not-found.component';
import { ProfileComponent } from './website/pages/profile/profile.component';
import { RecoveryComponent } from './website/pages/recovery/recovery.component';
import { RegisterComponent } from './website/pages/register/register.component';
import { ProductDetailComponent } from './website/pages/product-detail/product-detail.component';
import { LayoutComponent } from './website/components/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'category/:id',
        component: CategoryComponent
      },
      {
        path: 'product/:id',
        component: ProductDetailComponent
      },
      {
        path: 'my-cart',
        component: MyCartComponent,
      },
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'register',
        component: RegisterComponent,
      },
      {
        path: 'recovery',
        component: RecoveryComponent,
      },
      {
        path: 'profile',
        component: ProfileComponent,
      },
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      },
    ]
  },
  {
    path: 'cms',
    loadChildren: () => import('./cms/cms.module').then(m => m.CmsModule)
  },
  {
    path: '**',
    component: NotFoundComponent,
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
