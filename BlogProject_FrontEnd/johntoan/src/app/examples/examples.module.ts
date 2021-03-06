import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { LandingComponent } from './landing/landing.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { RegisterComponent } from './register/register.component';
import {RouterModule} from '@angular/router';
import { ShowblogComponent } from './showblog/showblog.component';
import { IndexUserComponent } from './index-user/index-user.component';
import { AboutmeComponent } from './aboutme/aboutme.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
        RouterModule,
    ],
    declarations: [
        LandingComponent,
        SignupComponent,
        ProfileComponent,
        RegisterComponent,
        ShowblogComponent,
        IndexUserComponent,
        AboutmeComponent
    ]
})
export class ExamplesModule { }
