/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as i0 from '../../../../src/app/authentication/authentication.module';
import * as i1 from '../../../../src/app/authentication/login/login.component';
import * as i2 from './login/login.component.ngfactory';
import * as i3 from '../../../../src/app/authentication/unauthorized/unauthorized.component';
import * as i4 from './unauthorized/unauthorized.component.ngfactory';
import * as i5 from '@angular/forms';
import * as i6 from '@angular/router';
import * as i7 from '../../../../src/app/setup/setup.guard';
import * as i8 from 'angular2-jwt/angular2-jwt';
import * as i9 from '../../../../src/app/authentication/authentication.service';
import * as i10 from '@angular/http';
import * as i11 from '../../../../src/app/authentication/authentication.store';
import * as i12 from '../../../../src/app/common/spinner/spinner.service';
import * as i13 from '../../../../src/app/common/dialog.service';
import * as i14 from '../../../../src/app/authentication/logout.service';
import * as i15 from '../../../../src/app/setup/setup.service';
import * as i16 from '../../../../src/app/authentication/hasauth/hasauth.directive';
import * as i17 from './login/login.component.ngsummary';
import * as i18 from './unauthorized/unauthorized.component.ngsummary';
import * as i19 from './hasauth/hasauth.directive.ngsummary';
import * as i20 from '../../../node_modules/@angular/router/router.ngsummary';
import * as i21 from '../../../node_modules/@angular/forms/forms.ngsummary';
export function AuthenticationModuleNgSummary():any[] {
  return [{summaryKind:2,type:{reference:i0.AuthenticationModule,diDeps:([] as any[]),
      lifecycleHooks:([] as any[])},entryComponents:[{componentType:i1.LoginComponent,
      componentFactory:i2.LoginComponentNgFactory},{componentType:i3.UnauthorizedComponent,
      componentFactory:i4.UnauthorizedComponentNgFactory}],providers:[{provider:{token:{identifier:{reference:i5.ɵi,
      diDeps:([] as any[]),lifecycleHooks:([] as any[])}},useClass:{reference:i5.ɵi,
      diDeps:([] as any[]),lifecycleHooks:([] as any[])},useValue:(undefined as any),
      useFactory:(null as any),useExisting:(undefined as any),deps:([] as any[]),multi:false},
      module:{reference:i5.FormsModule,diDeps:([] as any[]),lifecycleHooks:([] as any[])}},
      {provider:{token:{identifier:{reference:i5.FormBuilder,diDeps:([] as any[]),
          lifecycleHooks:([] as any[])}},useClass:{reference:i5.FormBuilder,diDeps:([] as any[]),
          lifecycleHooks:([] as any[])},useValue:(undefined as any),useFactory:(null as any),
          useExisting:(undefined as any),deps:([] as any[]),multi:false},module:{reference:i5.ReactiveFormsModule,
          diDeps:([] as any[]),lifecycleHooks:([] as any[])}},{provider:{token:{identifier:{reference:i5.ɵi,
          diDeps:([] as any[]),lifecycleHooks:([] as any[])}},useClass:{reference:i5.ɵi,
          diDeps:([] as any[]),lifecycleHooks:([] as any[])},useValue:(undefined as any),
          useFactory:(null as any),useExisting:(undefined as any),deps:([] as any[]),
          multi:false},module:{reference:i5.ReactiveFormsModule,diDeps:([] as any[]),
          lifecycleHooks:([] as any[])}},{provider:{token:{identifier:{reference:i6.ROUTES}},
          useClass:(null as any),useValue:[{path:'login',component:i1.LoginComponent,
              data:{isAuthCheck:false},canActivate:[i7.SetupGuard]},{path:'unauthorized',
              component:i3.UnauthorizedComponent}],useFactory:(null as any),useExisting:(undefined as any),
          deps:(undefined as any),multi:true},module:{reference:i0.AuthenticationModule,
          diDeps:([] as any[]),lifecycleHooks:([] as any[])}},{provider:{token:{identifier:{reference:i8.JwtHelper}},
          useClass:(null as any),useValue:(undefined as any),useFactory:{reference:i0.jwtHelperFactory,
              diDeps:([] as any[])},useExisting:(undefined as any),deps:([] as any[]),
          multi:false},module:{reference:i0.AuthenticationModule,diDeps:([] as any[]),
          lifecycleHooks:([] as any[])}},{provider:{token:{identifier:{reference:i9.AuthenticationService,
          diDeps:[{isAttribute:false,isHost:false,isSelf:false,isSkipSelf:false,isOptional:false,
              token:{identifier:{reference:i10.Http}}},{isAttribute:false,isHost:false,
              isSelf:false,isSkipSelf:false,isOptional:false,token:{identifier:{reference:i11.AuthenticationStore}}},
              {isAttribute:false,isHost:false,isSelf:false,isSkipSelf:false,isOptional:false,
                  token:{identifier:{reference:i6.Router}}},{isAttribute:false,isHost:false,
                  isSelf:false,isSkipSelf:false,isOptional:false,token:{identifier:{reference:i12.SpinnerService}}},
              {isAttribute:false,isHost:false,isSelf:false,isSkipSelf:false,isOptional:false,
                  token:{identifier:{reference:i13.DialogService}}},{isAttribute:false,
                  isHost:false,isSelf:false,isSkipSelf:false,isOptional:false,token:{identifier:{reference:i14.LogoutService}}}],
          lifecycleHooks:([] as any[])}},useClass:{reference:i9.AuthenticationService,
          diDeps:[{isAttribute:false,isHost:false,isSelf:false,isSkipSelf:false,isOptional:false,
              token:{identifier:{reference:i10.Http}}},{isAttribute:false,isHost:false,
              isSelf:false,isSkipSelf:false,isOptional:false,token:{identifier:{reference:i11.AuthenticationStore}}},
              {isAttribute:false,isHost:false,isSelf:false,isSkipSelf:false,isOptional:false,
                  token:{identifier:{reference:i6.Router}}},{isAttribute:false,isHost:false,
                  isSelf:false,isSkipSelf:false,isOptional:false,token:{identifier:{reference:i12.SpinnerService}}},
              {isAttribute:false,isHost:false,isSelf:false,isSkipSelf:false,isOptional:false,
                  token:{identifier:{reference:i13.DialogService}}},{isAttribute:false,
                  isHost:false,isSelf:false,isSkipSelf:false,isOptional:false,token:{identifier:{reference:i14.LogoutService}}}],
          lifecycleHooks:([] as any[])},useValue:(undefined as any),useFactory:(null as any),
          useExisting:(undefined as any),deps:[{isAttribute:false,isHost:false,isSelf:false,
              isSkipSelf:false,isOptional:false,token:{identifier:{reference:i10.Http}}},
              {isAttribute:false,isHost:false,isSelf:false,isSkipSelf:false,isOptional:false,
                  token:{identifier:{reference:i11.AuthenticationStore}}},{isAttribute:false,
                  isHost:false,isSelf:false,isSkipSelf:false,isOptional:false,token:{identifier:{reference:i6.Router}}},
              {isAttribute:false,isHost:false,isSelf:false,isSkipSelf:false,isOptional:false,
                  token:{identifier:{reference:i12.SpinnerService}}},{isAttribute:false,
                  isHost:false,isSelf:false,isSkipSelf:false,isOptional:false,token:{identifier:{reference:i13.DialogService}}},
              {isAttribute:false,isHost:false,isSelf:false,isSkipSelf:false,isOptional:false,
                  token:{identifier:{reference:i14.LogoutService}}}],multi:false},
          module:{reference:i0.AuthenticationModule,diDeps:([] as any[]),lifecycleHooks:([] as any[])}},
      {provider:{token:{identifier:{reference:i11.AuthenticationStore,diDeps:[{isAttribute:false,
          isHost:false,isSelf:false,isSkipSelf:false,isOptional:false,token:{identifier:{reference:i8.JwtHelper}}}],
          lifecycleHooks:([] as any[])}},useClass:{reference:i11.AuthenticationStore,
          diDeps:[{isAttribute:false,isHost:false,isSelf:false,isSkipSelf:false,isOptional:false,
              token:{identifier:{reference:i8.JwtHelper}}}],lifecycleHooks:([] as any[])},
          useValue:(undefined as any),useFactory:(null as any),useExisting:(undefined as any),
          deps:[{isAttribute:false,isHost:false,isSelf:false,isSkipSelf:false,isOptional:false,
              token:{identifier:{reference:i8.JwtHelper}}}],multi:false},module:{reference:i0.AuthenticationModule,
          diDeps:([] as any[]),lifecycleHooks:([] as any[])}},{provider:{token:{identifier:{reference:i14.LogoutService,
          diDeps:[{isAttribute:false,isHost:false,isSelf:false,isSkipSelf:false,isOptional:false,
              token:{identifier:{reference:i6.Router}}}],lifecycleHooks:([] as any[])}},
          useClass:{reference:i14.LogoutService,diDeps:[{isAttribute:false,isHost:false,
              isSelf:false,isSkipSelf:false,isOptional:false,token:{identifier:{reference:i6.Router}}}],
              lifecycleHooks:([] as any[])},useValue:(undefined as any),useFactory:(null as any),
          useExisting:(undefined as any),deps:[{isAttribute:false,isHost:false,isSelf:false,
              isSkipSelf:false,isOptional:false,token:{identifier:{reference:i6.Router}}}],
          multi:false},module:{reference:i0.AuthenticationModule,diDeps:([] as any[]),
          lifecycleHooks:([] as any[])}},{provider:{token:{identifier:{reference:i7.SetupGuard,
          diDeps:[{isAttribute:false,isHost:false,isSelf:false,isSkipSelf:false,isOptional:false,
              token:{identifier:{reference:i15.SetupService}}},{isAttribute:false,
              isHost:false,isSelf:false,isSkipSelf:false,isOptional:false,token:{identifier:{reference:i6.Router}}}],
          lifecycleHooks:([] as any[])}},useClass:{reference:i7.SetupGuard,diDeps:[{isAttribute:false,
          isHost:false,isSelf:false,isSkipSelf:false,isOptional:false,token:{identifier:{reference:i15.SetupService}}},
          {isAttribute:false,isHost:false,isSelf:false,isSkipSelf:false,isOptional:false,
              token:{identifier:{reference:i6.Router}}}],lifecycleHooks:([] as any[])},
          useValue:(undefined as any),useFactory:(null as any),useExisting:(undefined as any),
          deps:[{isAttribute:false,isHost:false,isSelf:false,isSkipSelf:false,isOptional:false,
              token:{identifier:{reference:i15.SetupService}}},{isAttribute:false,
              isHost:false,isSelf:false,isSkipSelf:false,isOptional:false,token:{identifier:{reference:i6.Router}}}],
          multi:false},module:{reference:i0.AuthenticationModule,diDeps:([] as any[]),
          lifecycleHooks:([] as any[])}}],modules:[{reference:i6.RouterModule,diDeps:[{isAttribute:false,
      isHost:false,isSelf:false,isSkipSelf:false,isOptional:true,token:{identifier:{reference:i6.ɵa}}},
      {isAttribute:false,isHost:false,isSelf:false,isSkipSelf:false,isOptional:true,
          token:{identifier:{reference:i6.Router}}}],lifecycleHooks:([] as any[])},
      {reference:i5.ɵba,diDeps:([] as any[]),lifecycleHooks:([] as any[])},{reference:i5.FormsModule,
          diDeps:([] as any[]),lifecycleHooks:([] as any[])},{reference:i5.ReactiveFormsModule,
          diDeps:([] as any[]),lifecycleHooks:([] as any[])},{reference:i0.AuthenticationModule,
          diDeps:([] as any[]),lifecycleHooks:([] as any[])}],exportedDirectives:[{reference:i1.LoginComponent},
      {reference:i16.HasAuthDirective}],exportedPipes:([] as any[])},i17.LoginComponentNgSummary,
      i18.UnauthorizedComponentNgSummary,i19.HasAuthDirectiveNgSummary,i20.RouterModuleNgSummary,
      i21.ɵbaNgSummary,i21.FormsModuleNgSummary,i21.ReactiveFormsModuleNgSummary,{summaryKind:3,
          type:{reference:i9.AuthenticationService,diDeps:[{isAttribute:false,isHost:false,
              isSelf:false,isSkipSelf:false,isOptional:false,token:{identifier:{reference:i10.Http}}},
              {isAttribute:false,isHost:false,isSelf:false,isSkipSelf:false,isOptional:false,
                  token:{identifier:{reference:i11.AuthenticationStore}}},{isAttribute:false,
                  isHost:false,isSelf:false,isSkipSelf:false,isOptional:false,token:{identifier:{reference:i6.Router}}},
              {isAttribute:false,isHost:false,isSelf:false,isSkipSelf:false,isOptional:false,
                  token:{identifier:{reference:i12.SpinnerService}}},{isAttribute:false,
                  isHost:false,isSelf:false,isSkipSelf:false,isOptional:false,token:{identifier:{reference:i13.DialogService}}},
              {isAttribute:false,isHost:false,isSelf:false,isSkipSelf:false,isOptional:false,
                  token:{identifier:{reference:i14.LogoutService}}}],lifecycleHooks:([] as any[])}},
      {summaryKind:3,type:{reference:i11.AuthenticationStore,diDeps:[{isAttribute:false,
          isHost:false,isSelf:false,isSkipSelf:false,isOptional:false,token:{identifier:{reference:i8.JwtHelper}}}],
          lifecycleHooks:([] as any[])}},{summaryKind:3,type:{reference:i14.LogoutService,
          diDeps:[{isAttribute:false,isHost:false,isSelf:false,isSkipSelf:false,isOptional:false,
              token:{identifier:{reference:i6.Router}}}],lifecycleHooks:([] as any[])}},
      {summaryKind:3,type:{reference:i7.SetupGuard,diDeps:[{isAttribute:false,isHost:false,
          isSelf:false,isSkipSelf:false,isOptional:false,token:{identifier:{reference:i15.SetupService}}},
          {isAttribute:false,isHost:false,isSelf:false,isSkipSelf:false,isOptional:false,
              token:{identifier:{reference:i6.Router}}}],lifecycleHooks:([] as any[])}}];
}
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiQzovRGV2L2NvZGl0LnZpc3VhbHN0dWRpby5jb20vQVM0Lk5FVC9zb3VyY2UvRmUvRXUuRURlbGl2ZXJ5LkFTNC5GZS91aS9zcmMvYXBwL2F1dGhlbnRpY2F0aW9uL2F1dGhlbnRpY2F0aW9uLm1vZHVsZS5uZ3N1bW1hcnkudHMiLCJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuZzovLy9DOi9EZXYvY29kaXQudmlzdWFsc3R1ZGlvLmNvbS9BUzQuTkVUL3NvdXJjZS9GZS9FdS5FRGVsaXZlcnkuQVM0LkZlL3VpL3NyYy9hcHAvYXV0aGVudGljYXRpb24vYXV0aGVudGljYXRpb24ubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIiAiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
