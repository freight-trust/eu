/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as i0 from '@angular/core';
import * as i1 from '../../../../src/app/common/as4components.module';
import * as i2 from '../authentication/login/login.component.ngfactory';
import * as i3 from '../authentication/unauthorized/unauthorized.component.ngfactory';
import * as i4 from '@angular/common';
import * as i5 from 'ngx-window-token/dist/src/ngx-window-token';
import * as i6 from 'ngx-clipboard/src/clipboard.service';
import * as i7 from '@angular/platform-browser';
import * as i8 from '@angular/forms';
import * as i9 from 'angular2-jwt/angular2-jwt';
import * as i10 from '../../../../src/app/authentication/authentication.module';
import * as i11 from '../../../../src/app/common/spinner/spinner.service';
import * as i12 from '../../../../src/app/common/modal/modal.service';
import * as i13 from '../../../../src/app/common/dialog.service';
import * as i14 from '@angular/http';
import * as i15 from '../../../../src/app/authentication/authentication.store';
import * as i16 from '../../../../src/app/authentication/logout.service';
import * as i17 from '@angular/router';
import * as i18 from '../../../../src/app/authentication/authentication.service';
import * as i19 from '../../../../src/app/setup/setup.guard';
import * as i20 from '../../../../src/app/setup/setup.service';
import * as i21 from '../../../../src/app/authentication/roles.service';
import * as i22 from '../../../../src/app/common/mustbeauthorized.guard';
import * as i23 from '../../../../src/app/common/candeactivate.guard';
import * as i24 from '../../../../src/app/common/router.service';
import * as i25 from '../../../../src/app/common/form.service';
import * as i26 from '../../../../src/app/common/spinner/customhttp';
import * as i27 from '../../../../src/app/common/error.handler';
import * as i28 from 'ngx-clipboard/src/index';
import * as i29 from 'angular2-text-mask/dist/angular2TextMask';
import * as i30 from 'ng2-select2/ng2-select2';
import * as i31 from '../../../../src/app/authentication/login/login.component';
import * as i32 from '../../../../src/app/authentication/unauthorized/unauthorized.component';
export const As4ComponentsModuleNgFactory:i0.NgModuleFactory<i1.As4ComponentsModule> = i0.ɵcmf(i1.As4ComponentsModule,
    ([] as any[]),(_l:any) => {
      return i0.ɵmod([i0.ɵmpd(512,i0.ComponentFactoryResolver,i0.ɵCodegenComponentFactoryResolver,
          [[8,[i2.LoginComponentNgFactory,i3.UnauthorizedComponentNgFactory]],[3,i0.ComponentFactoryResolver],
              i0.NgModuleRef]),i0.ɵmpd(4608,i4.NgLocalization,i4.NgLocaleLocalization,
          [i0.LOCALE_ID]),i0.ɵmpd(5120,i5.WINDOW,i5._window,([] as any[])),i0.ɵmpd(5120,
          i6.ClipboardService,i6.CLIPBOARD_SERVICE_PROVIDER_FACTORY,[i7.DOCUMENT,i5.WINDOW,
              [3,i6.ClipboardService]]),i0.ɵmpd(4608,i8.FormBuilder,i8.FormBuilder,
          ([] as any[])),i0.ɵmpd(4608,i8.ɵi,i8.ɵi,([] as any[])),i0.ɵmpd(5120,i9.JwtHelper,
          i10.jwtHelperFactory,([] as any[])),i0.ɵmpd(4608,i11.SpinnerService,i11.SpinnerService,
          ([] as any[])),i0.ɵmpd(4608,i12.ModalService,i12.ModalService,[i0.ComponentFactoryResolver,
          i0.Injector]),i0.ɵmpd(4608,i13.DialogService,i13.DialogService,[i12.ModalService]),
          i0.ɵmpd(5120,i14.Http,i11.spinnerHttpServiceFactory,[i14.XHRBackend,i14.RequestOptions,
              i11.SpinnerService,i13.DialogService,i0.Injector]),i0.ɵmpd(4608,i15.AuthenticationStore,
              i15.AuthenticationStore,[i9.JwtHelper]),i0.ɵmpd(4608,i16.LogoutService,
              i16.LogoutService,[i17.Router]),i0.ɵmpd(4608,i18.AuthenticationService,
              i18.AuthenticationService,[i14.Http,i15.AuthenticationStore,i17.Router,
                  i11.SpinnerService,i13.DialogService,i16.LogoutService]),i0.ɵmpd(4608,
              i19.SetupGuard,i19.SetupGuard,[i20.SetupService,i17.Router]),i0.ɵmpd(5120,
              i9.AuthHttp,i1.authHttpServiceFactory,[i14.RequestOptions,i14.XHRBackend,
                  i11.SpinnerService,i13.DialogService,i0.Injector]),i0.ɵmpd(4608,
              i21.RolesService,i21.RolesService,[i9.AuthHttp,i15.AuthenticationStore]),
          i0.ɵmpd(4608,i22.MustBeAuthorizedGuard,i22.MustBeAuthorizedGuard,[i17.Router,
              i21.RolesService,i13.DialogService,i18.AuthenticationService]),i0.ɵmpd(4608,
              i23.CanDeactivateGuard,i23.CanDeactivateGuard,[i13.DialogService]),i0.ɵmpd(4608,
              i24.RouterService,i24.RouterService,[i4.Location,i17.Router]),i0.ɵmpd(4608,
              i25.FormBuilderExtended,i25.FormBuilderExtended,[i8.FormBuilder,i0.Injector]),
          i0.ɵmpd(5120,i26.CustomAuthNoSpinnerHttp,i1.authHttpNoSpinnerServiceFactory,
              [i14.RequestOptions,i14.XHRBackend,i11.SpinnerService,i13.DialogService,
                  i0.Injector]),i0.ɵmpd(5120,i0.ErrorHandler,i27.errorHandlerFactory,
              [i13.DialogService,i11.SpinnerService]),i0.ɵmpd(512,i4.CommonModule,
              i4.CommonModule,([] as any[])),i0.ɵmpd(512,i5.WindowTokenModule,i5.WindowTokenModule,
              ([] as any[])),i0.ɵmpd(512,i28.ClipboardModule,i28.ClipboardModule,([] as any[])),
          i0.ɵmpd(512,i17.RouterModule,i17.RouterModule,[[2,i17.ɵa],[2,i17.Router]]),
          i0.ɵmpd(512,i8.ɵba,i8.ɵba,([] as any[])),i0.ɵmpd(512,i8.ReactiveFormsModule,
              i8.ReactiveFormsModule,([] as any[])),i0.ɵmpd(512,i8.FormsModule,i8.FormsModule,
              ([] as any[])),i0.ɵmpd(512,i29.TextMaskModule,i29.TextMaskModule,([] as any[])),
          i0.ɵmpd(512,i30.Select2Module,i30.Select2Module,([] as any[])),i0.ɵmpd(512,
              i10.AuthenticationModule,i10.AuthenticationModule,([] as any[])),i0.ɵmpd(512,
              i1.As4ComponentsModule,i1.As4ComponentsModule,([] as any[])),i0.ɵmpd(1024,
              i17.ROUTES,() => {
                return [[{path:'login',component:i31.LoginComponent,data:{isAuthCheck:false},
                    canActivate:[i19.SetupGuard]},{path:'unauthorized',component:i32.UnauthorizedComponent}]];
              },([] as any[]))]);
    });
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiQzovRGV2L2NvZGl0LnZpc3VhbHN0dWRpby5jb20vQVM0Lk5FVC9zb3VyY2UvRmUvRXUuRURlbGl2ZXJ5LkFTNC5GZS91aS9zcmMvYXBwL2NvbW1vbi9hczRjb21wb25lbnRzLm1vZHVsZS5uZ2ZhY3RvcnkudHMiLCJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuZzovLy9DOi9EZXYvY29kaXQudmlzdWFsc3R1ZGlvLmNvbS9BUzQuTkVUL3NvdXJjZS9GZS9FdS5FRGVsaXZlcnkuQVM0LkZlL3VpL3NyYy9hcHAvY29tbW9uL2FzNGNvbXBvbmVudHMubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIiAiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
