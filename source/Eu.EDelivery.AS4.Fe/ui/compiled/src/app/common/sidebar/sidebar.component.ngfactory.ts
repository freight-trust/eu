/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as i0 from './sidebar.component.scss.ngstyle';
import * as i1 from '@angular/core';
import * as i2 from '@angular/router';
import * as i3 from '@angular/common';
import * as i4 from '../../../../../src/app/common/sidebar/sidebar.component';
import * as i5 from '../../../../../src/app/authentication/roles.service';
const styles_SidebarComponent:any[] = [i0.styles];
export const RenderType_SidebarComponent:i1.RendererType2 = i1.ɵcrt({encapsulation:2,
    styles:styles_SidebarComponent,data:{}});
function View_SidebarComponent_2(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,0,(null as any),(null as any),13,'li',[['routerLinkActive',
      'active']],(null as any),(null as any),(null as any),(null as any),(null as any))),
      i1.ɵdid(1,1720320,(null as any),2,i2.RouterLinkActive,[i2.Router,i1.ElementRef,
          i1.Renderer2,i1.ChangeDetectorRef],{routerLinkActive:[0,'routerLinkActive']},
          (null as any)),i1.ɵqud(603979776,1,{links:1}),i1.ɵqud(603979776,2,{linksWithHrefs:1}),
      (_l()(),i1.ɵted(-1,(null as any),['\n                    '])),(_l()(),i1.ɵeld(5,
          0,(null as any),(null as any),7,'a',([] as any[]),[[1,'data-cy',0],[1,'target',
              0],[8,'href',4]],[[(null as any),'click']],(_v,en,$event) => {
            var ad:boolean = true;
            if (('click' === en)) {
              const pd_0:any = ((<any>i1.ɵnov(_v,6).onClick($event.button,$event.ctrlKey,
                  $event.metaKey,$event.shiftKey)) !== false);
              ad = (pd_0 && ad);
            }
            return ad;
          },(null as any),(null as any))),i1.ɵdid(6,671744,[[2,4]],0,i2.RouterLinkWithHref,
          [i2.Router,i2.ActivatedRoute,i3.LocationStrategy],{routerLink:[0,'routerLink']},
          (null as any)),(_l()(),i1.ɵted(-1,(null as any),['\n                        '])),
      (_l()(),i1.ɵeld(8,0,(null as any),(null as any),0,'i',([] as any[]),[[8,'className',
          0]],(null as any),(null as any),(null as any),(null as any))),(_l()(),i1.ɵted(-1,
          (null as any),['\n                        '])),(_l()(),i1.ɵeld(10,0,(null as any),
          (null as any),1,'span',([] as any[]),(null as any),(null as any),(null as any),
          (null as any),(null as any))),(_l()(),i1.ɵted(11,(null as any),['',''])),
      (_l()(),i1.ɵted(-1,(null as any),['\n                    '])),(_l()(),i1.ɵted(-1,
          (null as any),['\n                ']))],(_ck,_v) => {
    const currVal_0:any = 'active';
    _ck(_v,1,0,currVal_0);
    const currVal_4:any = i1.ɵinlineInterpolate(1,'/',(<any>_v.parent).context.$implicit.path,
        '');
    _ck(_v,6,0,currVal_4);
  },(_ck,_v) => {
    const currVal_1:any = (<any>_v.parent).context.$implicit.data.title;
    const currVal_2:any = i1.ɵnov(_v,6).target;
    const currVal_3:any = i1.ɵnov(_v,6).href;
    _ck(_v,5,0,currVal_1,currVal_2,currVal_3);
    const currVal_5:any = i1.ɵinlineInterpolate(1,'fa fa-fw ',(!!(<any>_v.parent).context.$implicit.data.icon? (<any>_v.parent).context.$implicit.data.icon: 'fa-book'),
        '');
    _ck(_v,8,0,currVal_5);
    const currVal_6:any = (<any>_v.parent).context.$implicit.data.title;
    _ck(_v,11,0,currVal_6);
  });
}
function View_SidebarComponent_6(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,0,(null as any),(null as any),10,'li',[['routerLinkActive',
      'active']],(null as any),(null as any),(null as any),(null as any),(null as any))),
      i1.ɵdid(1,1720320,(null as any),2,i2.RouterLinkActive,[i2.Router,i1.ElementRef,
          i1.Renderer2,i1.ChangeDetectorRef],{routerLinkActive:[0,'routerLinkActive']},
          (null as any)),i1.ɵqud(603979776,5,{links:1}),i1.ɵqud(603979776,6,{linksWithHrefs:1}),
      (_l()(),i1.ɵted(-1,(null as any),['\n                                    '])),
      (_l()(),i1.ɵeld(5,0,(null as any),(null as any),4,'a',([] as any[]),[[1,'data-cy',
          0],[1,'target',0],[8,'href',4]],[[(null as any),'click']],(_v,en,$event) => {
        var ad:boolean = true;
        if (('click' === en)) {
          const pd_0:any = ((<any>i1.ɵnov(_v,6).onClick($event.button,$event.ctrlKey,
              $event.metaKey,$event.shiftKey)) !== false);
          ad = (pd_0 && ad);
        }
        return ad;
      },(null as any),(null as any))),i1.ɵdid(6,671744,[[6,4],[4,4]],0,i2.RouterLinkWithHref,
          [i2.Router,i2.ActivatedRoute,i3.LocationStrategy],{routerLink:[0,'routerLink']},
          (null as any)),(_l()(),i1.ɵted(-1,(null as any),['\n                                        '])),
      (_l()(),i1.ɵeld(8,0,(null as any),(null as any),0,'i',([] as any[]),[[8,'className',
          0]],(null as any),(null as any),(null as any),(null as any))),(_l()(),i1.ɵted(9,
          (null as any),[' ','\n                                    '])),(_l()(),i1.ɵted(-1,
          (null as any),['\n                                ']))],(_ck,_v) => {
    const currVal_0:any = 'active';
    _ck(_v,1,0,currVal_0);
    const currVal_4:any = i1.ɵinlineInterpolate(2,'/',(<any>(<any>(<any>(<any>_v.parent).parent).parent).parent).context.$implicit.path,
        '/',(<any>_v.parent).context.$implicit.path,'');
    _ck(_v,6,0,currVal_4);
  },(_ck,_v) => {
    const currVal_1:any = (<any>_v.parent).context.$implicit.data.title;
    const currVal_2:any = i1.ɵnov(_v,6).target;
    const currVal_3:any = i1.ɵnov(_v,6).href;
    _ck(_v,5,0,currVal_1,currVal_2,currVal_3);
    const currVal_5:any = i1.ɵinlineInterpolate(1,'fa fa-fw ',((<any>_v.parent).context.$implicit.data.icon? (<any>_v.parent).context.$implicit.data.icon: 'fa-adjust'),
        '');
    _ck(_v,8,0,currVal_5);
    const currVal_6:any = (<any>_v.parent).context.$implicit.data.title;
    _ck(_v,9,0,currVal_6);
  });
}
function View_SidebarComponent_9(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,0,(null as any),(null as any),10,'li',[['routerLinkActive',
      'active']],(null as any),(null as any),(null as any),(null as any),(null as any))),
      i1.ɵdid(1,1720320,(null as any),2,i2.RouterLinkActive,[i2.Router,i1.ElementRef,
          i1.Renderer2,i1.ChangeDetectorRef],{routerLinkActive:[0,'routerLinkActive']},
          (null as any)),i1.ɵqud(603979776,9,{links:1}),i1.ɵqud(603979776,10,{linksWithHrefs:1}),
      (_l()(),i1.ɵted(-1,(null as any),['\n                                                '])),
      (_l()(),i1.ɵeld(5,0,(null as any),(null as any),4,'a',([] as any[]),[[1,'data-cy',
          0],[1,'target',0],[8,'href',4]],[[(null as any),'click']],(_v,en,$event) => {
        var ad:boolean = true;
        if (('click' === en)) {
          const pd_0:any = ((<any>i1.ɵnov(_v,6).onClick($event.button,$event.ctrlKey,
              $event.metaKey,$event.shiftKey)) !== false);
          ad = (pd_0 && ad);
        }
        return ad;
      },(null as any),(null as any))),i1.ɵdid(6,671744,[[10,4],[8,4],[4,4]],0,i2.RouterLinkWithHref,
          [i2.Router,i2.ActivatedRoute,i3.LocationStrategy],{routerLink:[0,'routerLink']},
          (null as any)),(_l()(),i1.ɵted(-1,(null as any),['\n                                                    '])),
      (_l()(),i1.ɵeld(8,0,(null as any),(null as any),0,'i',([] as any[]),[[8,'className',
          0]],(null as any),(null as any),(null as any),(null as any))),(_l()(),i1.ɵted(9,
          (null as any),[' ','\n                                                '])),
      (_l()(),i1.ɵted(-1,(null as any),['\n                                            ']))],
      (_ck,_v) => {
        const currVal_0:any = 'active';
        _ck(_v,1,0,currVal_0);
        const currVal_4:any = i1.ɵinlineInterpolate(3,'/',(<any>(<any>(<any>(<any>(<any>(<any>_v.parent).parent).parent).parent).parent).parent).context.$implicit.path,
            '/',(<any>(<any>(<any>_v.parent).parent).parent).context.$implicit.path,
            '/',(<any>_v.parent).context.$implicit.path,'');
        _ck(_v,6,0,currVal_4);
      },(_ck,_v) => {
        const currVal_1:any = (<any>_v.parent).context.$implicit.data.title;
        const currVal_2:any = i1.ɵnov(_v,6).target;
        const currVal_3:any = i1.ɵnov(_v,6).href;
        _ck(_v,5,0,currVal_1,currVal_2,currVal_3);
        const currVal_5:any = i1.ɵinlineInterpolate(1,'fa fa-fw ',((<any>_v.parent).context.$implicit.data.icon? (<any>_v.parent).context.$implicit.data.icon: 'fa-adjust'),
            '');
        _ck(_v,8,0,currVal_5);
        const currVal_6:any = (<any>_v.parent).context.$implicit.data.title;
        _ck(_v,9,0,currVal_6);
      });
}
function View_SidebarComponent_8(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,0,(null as any),(null as any),4,(null as any),
      (null as any),(null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i1.ɵted(-1,(null as any),['\n                                            '])),
      (_l()(),i1.ɵand(16777216,(null as any),(null as any),1,(null as any),View_SidebarComponent_9)),
      i1.ɵdid(3,16384,(null as any),0,i3.NgIf,[i1.ViewContainerRef,i1.TemplateRef],
          {ngIf:[0,'ngIf']},(null as any)),(_l()(),i1.ɵted(-1,(null as any),['\n                                        ']))],
      (_ck,_v) => {
        const currVal_0:any = ((_v.context.$implicit.data && (_v.context.$implicit.data.title !== (undefined as any))) && !!!_v.context.$implicit.data.nomenu);
        _ck(_v,3,0,currVal_0);
      },(null as any));
}
function View_SidebarComponent_7(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,0,(null as any),(null as any),23,'li',[['routerLinkActive',
      'active']],(null as any),(null as any),(null as any),(null as any),(null as any))),
      i1.ɵdid(1,1720320,(null as any),2,i2.RouterLinkActive,[i2.Router,i1.ElementRef,
          i1.Renderer2,i1.ChangeDetectorRef],{routerLinkActive:[0,'routerLinkActive']},
          (null as any)),i1.ɵqud(603979776,7,{links:1}),i1.ɵqud(603979776,8,{linksWithHrefs:1}),
      (_l()(),i1.ɵted(-1,(null as any),['\n                                    '])),
      (_l()(),i1.ɵeld(5,0,(null as any),(null as any),11,'a',[['href','#']],[[1,'data-cy',
          0]],(null as any),(null as any),(null as any),(null as any))),(_l()(),i1.ɵted(-1,
          (null as any),['\n                                        '])),(_l()(),i1.ɵeld(7,
          0,(null as any),(null as any),0,'i',([] as any[]),[[8,'className',0]],(null as any),
          (null as any),(null as any),(null as any))),(_l()(),i1.ɵted(-1,(null as any),
          ['\n                                        '])),(_l()(),i1.ɵeld(9,0,(null as any),
          (null as any),1,'span',([] as any[]),(null as any),(null as any),(null as any),
          (null as any),(null as any))),(_l()(),i1.ɵted(10,(null as any),['',''])),
      (_l()(),i1.ɵted(-1,(null as any),['\n                                        '])),
      (_l()(),i1.ɵeld(12,0,(null as any),(null as any),3,'span',[['class','pull-right-container']],
          (null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i1.ɵted(-1,(null as any),['\n                                            '])),
      (_l()(),i1.ɵeld(14,0,(null as any),(null as any),0,'i',[['class','fa fa-fw fa-angle-left pull-right']],
          (null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i1.ɵted(-1,(null as any),['\n                                        '])),
      (_l()(),i1.ɵted(-1,(null as any),['\n                                    '])),
      (_l()(),i1.ɵted(-1,(null as any),['\n                                    '])),
      (_l()(),i1.ɵeld(18,0,(null as any),(null as any),4,'ul',[['class','treeview-menu']],
          (null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i1.ɵted(-1,(null as any),['\n                                        '])),
      (_l()(),i1.ɵand(16777216,(null as any),(null as any),1,(null as any),View_SidebarComponent_8)),
      i1.ɵdid(21,802816,(null as any),0,i3.NgForOf,[i1.ViewContainerRef,i1.TemplateRef,
          i1.IterableDiffers],{ngForOf:[0,'ngForOf']},(null as any)),(_l()(),i1.ɵted(-1,
          (null as any),['\n                                    '])),(_l()(),i1.ɵted(-1,
          (null as any),['\n                                ']))],(_ck,_v) => {
    const currVal_0:any = 'active';
    _ck(_v,1,0,currVal_0);
    const currVal_4:any = (<any>_v.parent).context.$implicit.children;
    _ck(_v,21,0,currVal_4);
  },(_ck,_v) => {
    const currVal_1:any = (<any>_v.parent).context.$implicit.data.title;
    _ck(_v,5,0,currVal_1);
    const currVal_2:any = i1.ɵinlineInterpolate(1,'fa fa-fw ',(!!(<any>_v.parent).context.$implicit.data.icon? (<any>_v.parent).context.$implicit.data.icon: 'fa-book'),
        '');
    _ck(_v,7,0,currVal_2);
    const currVal_3:any = (<any>_v.parent).context.$implicit.data.title;
    _ck(_v,10,0,currVal_3);
  });
}
function View_SidebarComponent_5(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,0,(null as any),(null as any),7,(null as any),
      (null as any),(null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i1.ɵted(-1,(null as any),['\n                                '])),(_l()(),
          i1.ɵand(16777216,(null as any),(null as any),1,(null as any),View_SidebarComponent_6)),
      i1.ɵdid(3,16384,(null as any),0,i3.NgIf,[i1.ViewContainerRef,i1.TemplateRef],
          {ngIf:[0,'ngIf']},(null as any)),(_l()(),i1.ɵted(-1,(null as any),['\n                                '])),
      (_l()(),i1.ɵand(16777216,(null as any),(null as any),1,(null as any),View_SidebarComponent_7)),
      i1.ɵdid(6,16384,(null as any),0,i3.NgIf,[i1.ViewContainerRef,i1.TemplateRef],
          {ngIf:[0,'ngIf']},(null as any)),(_l()(),i1.ɵted(-1,(null as any),['\n                            ']))],
      (_ck,_v) => {
        const currVal_0:any = ((((((_v.context.$implicit.children == null)? (null as any): _v.context.$implicit.children.length) === (null as any)) && _v.context.$implicit.data) && (_v.context.$implicit.data.title !== (undefined as any))) && !!!_v.context.$implicit.data.nomenu);
        _ck(_v,3,0,currVal_0);
        const currVal_1:any = (((_v.context.$implicit.children == null)? (null as any): _v.context.$implicit.children.length) !== (null as any));
        _ck(_v,6,0,currVal_1);
      },(null as any));
}
function View_SidebarComponent_4(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,0,(null as any),(null as any),7,(null as any),
      (null as any),(null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i1.ɵted(-1,(null as any),['\n                        '])),(_l()(),i1.ɵeld(2,
          0,(null as any),(null as any),4,'ul',[['class','treeview-menu']],(null as any),
          (null as any),(null as any),(null as any),(null as any))),(_l()(),i1.ɵted(-1,
          (null as any),['\n                            '])),(_l()(),i1.ɵand(16777216,
          (null as any),(null as any),1,(null as any),View_SidebarComponent_5)),i1.ɵdid(5,
          802816,(null as any),0,i3.NgForOf,[i1.ViewContainerRef,i1.TemplateRef,i1.IterableDiffers],
          {ngForOf:[0,'ngForOf']},(null as any)),(_l()(),i1.ɵted(-1,(null as any),
          ['\n                        '])),(_l()(),i1.ɵted(-1,(null as any),['\n                    ']))],
      (_ck,_v) => {
        const currVal_0:any = (<any>(<any>_v.parent).parent).context.$implicit.children;
        _ck(_v,5,0,currVal_0);
      },(null as any));
}
function View_SidebarComponent_3(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,0,(null as any),(null as any),20,'li',[['class',
      'treeview'],['routerLinkActive','active']],(null as any),(null as any),(null as any),
      (null as any),(null as any))),i1.ɵdid(1,1720320,(null as any),2,i2.RouterLinkActive,
      [i2.Router,i1.ElementRef,i1.Renderer2,i1.ChangeDetectorRef],{routerLinkActive:[0,
          'routerLinkActive']},(null as any)),i1.ɵqud(603979776,3,{links:1}),i1.ɵqud(603979776,
      4,{linksWithHrefs:1}),(_l()(),i1.ɵted(-1,(null as any),['\n                    '])),
      (_l()(),i1.ɵeld(5,0,(null as any),(null as any),11,'a',[['href','#']],[[1,'data-cy',
          0]],(null as any),(null as any),(null as any),(null as any))),(_l()(),i1.ɵted(-1,
          (null as any),['\n                        '])),(_l()(),i1.ɵeld(7,0,(null as any),
          (null as any),0,'i',([] as any[]),[[8,'className',0]],(null as any),(null as any),
          (null as any),(null as any))),(_l()(),i1.ɵted(-1,(null as any),['\n                        '])),
      (_l()(),i1.ɵeld(9,0,(null as any),(null as any),1,'span',([] as any[]),(null as any),
          (null as any),(null as any),(null as any),(null as any))),(_l()(),i1.ɵted(10,
          (null as any),['',''])),(_l()(),i1.ɵted(-1,(null as any),['\n                        '])),
      (_l()(),i1.ɵeld(12,0,(null as any),(null as any),3,'span',[['class','pull-right-container']],
          (null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i1.ɵted(-1,(null as any),['\n                            '])),(_l()(),
          i1.ɵeld(14,0,(null as any),(null as any),0,'i',[['class','fa fa-angle-left pull-right']],
              (null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i1.ɵted(-1,(null as any),['\n                        '])),(_l()(),i1.ɵted(-1,
          (null as any),['\n                    '])),(_l()(),i1.ɵted(-1,(null as any),
          ['\n                    '])),(_l()(),i1.ɵand(16777216,(null as any),(null as any),
          1,(null as any),View_SidebarComponent_4)),i1.ɵdid(19,16384,(null as any),
          0,i3.NgIf,[i1.ViewContainerRef,i1.TemplateRef],{ngIf:[0,'ngIf']},(null as any)),
      (_l()(),i1.ɵted(-1,(null as any),['\n                ']))],(_ck,_v) => {
    const currVal_0:any = 'active';
    _ck(_v,1,0,currVal_0);
    const currVal_4:boolean = !!(<any>_v.parent).context.$implicit.children;
    _ck(_v,19,0,currVal_4);
  },(_ck,_v) => {
    const currVal_1:any = (<any>_v.parent).context.$implicit.data.title;
    _ck(_v,5,0,currVal_1);
    const currVal_2:any = i1.ɵinlineInterpolate(1,'fa ',(!!(<any>_v.parent).context.$implicit.data.icon? (<any>_v.parent).context.$implicit.data.icon: 'fa-table'),
        '');
    _ck(_v,7,0,currVal_2);
    const currVal_3:any = (<any>_v.parent).context.$implicit.data.title;
    _ck(_v,10,0,currVal_3);
  });
}
function View_SidebarComponent_1(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,0,(null as any),(null as any),7,(null as any),
      (null as any),(null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i1.ɵted(-1,(null as any),['\n                '])),(_l()(),i1.ɵand(16777216,
          (null as any),(null as any),1,(null as any),View_SidebarComponent_2)),i1.ɵdid(3,
          16384,(null as any),0,i3.NgIf,[i1.ViewContainerRef,i1.TemplateRef],{ngIf:[0,
              'ngIf']},(null as any)),(_l()(),i1.ɵted(-1,(null as any),['\n                '])),
      (_l()(),i1.ɵand(16777216,(null as any),(null as any),1,(null as any),View_SidebarComponent_3)),
      i1.ɵdid(6,16384,(null as any),0,i3.NgIf,[i1.ViewContainerRef,i1.TemplateRef],
          {ngIf:[0,'ngIf']},(null as any)),(_l()(),i1.ɵted(-1,(null as any),['\n            ']))],
      (_ck,_v) => {
        const currVal_0:boolean = !!!_v.context.$implicit.children;
        _ck(_v,3,0,currVal_0);
        const currVal_1:boolean = !!((_v.context.$implicit && _v.context.$implicit.children) && (_v.context.$implicit.children.length > 0));
        _ck(_v,6,0,currVal_1);
      },(null as any));
}
export function View_SidebarComponent_0(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(2,[(_l()(),i1.ɵeld(0,0,(null as any),(null as any),16,'aside',[['class',
      'main-sidebar']],(null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i1.ɵted(-1,(null as any),['\n    '])),(_l()(),i1.ɵeld(2,0,(null as any),
          (null as any),13,'section',[['class','sidebar']],(null as any),(null as any),
          (null as any),(null as any),(null as any))),(_l()(),i1.ɵted(-1,(null as any),
          ['\n        '])),(_l()(),i1.ɵeld(4,0,(null as any),(null as any),4,'div',
          [['class','user-panel']],(null as any),(null as any),(null as any),(null as any),
          (null as any))),(_l()(),i1.ɵted(-1,(null as any),['\n            '])),(_l()(),
          i1.ɵeld(6,0,(null as any),(null as any),1,'div',[['class','pull-left image']],
              (null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i1.ɵted(-1,(null as any),['\n            '])),(_l()(),i1.ɵted(-1,(null as any),
          ['\n        '])),(_l()(),i1.ɵted(-1,(null as any),['\n        '])),(_l()(),
          i1.ɵeld(10,0,(null as any),(null as any),4,'ul',[['class','sidebar-menu']],
              (null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i1.ɵted(-1,(null as any),['\n            '])),(_l()(),i1.ɵand(16777216,
          (null as any),(null as any),1,(null as any),View_SidebarComponent_1)),i1.ɵdid(13,
          802816,(null as any),0,i3.NgForOf,[i1.ViewContainerRef,i1.TemplateRef,i1.IterableDiffers],
          {ngForOf:[0,'ngForOf']},(null as any)),(_l()(),i1.ɵted(-1,(null as any),
          ['\n        '])),(_l()(),i1.ɵted(-1,(null as any),['\n    '])),(_l()(),i1.ɵted(-1,
          (null as any),['\n']))],(_ck,_v) => {
    var _co:i4.SidebarComponent = _v.component;
    const currVal_0:any = _co.routes;
    _ck(_v,13,0,currVal_0);
  },(null as any));
}
export function View_SidebarComponent_Host_0(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,0,(null as any),(null as any),1,'as4-sidebar',
      ([] as any[]),(null as any),(null as any),(null as any),View_SidebarComponent_0,
      RenderType_SidebarComponent)),i1.ɵdid(1,49152,(null as any),0,i4.SidebarComponent,
      [i2.Router,i5.RolesService],(null as any),(null as any))],(null as any),(null as any));
}
export const SidebarComponentNgFactory:i1.ComponentFactory<i4.SidebarComponent> = i1.ɵccf('as4-sidebar',
    i4.SidebarComponent,View_SidebarComponent_Host_0,{},{},([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiQzovRGV2L2NvZGl0LnZpc3VhbHN0dWRpby5jb20vQVM0Lk5FVC9zb3VyY2UvRmUvRXUuRURlbGl2ZXJ5LkFTNC5GZS91aS9zcmMvYXBwL2NvbW1vbi9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50Lm5nZmFjdG9yeS50cyIsInZlcnNpb24iOjMsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5nOi8vL0M6L0Rldi9jb2RpdC52aXN1YWxzdHVkaW8uY29tL0FTNC5ORVQvc291cmNlL0ZlL0V1LkVEZWxpdmVyeS5BUzQuRmUvdWkvc3JjL2FwcC9jb21tb24vc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC50cyIsIm5nOi8vL0M6L0Rldi9jb2RpdC52aXN1YWxzdHVkaW8uY29tL0FTNC5ORVQvc291cmNlL0ZlL0V1LkVEZWxpdmVyeS5BUzQuRmUvdWkvc3JjL2FwcC9jb21tb24vc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5odG1sIiwibmc6Ly8vQzovRGV2L2NvZGl0LnZpc3VhbHN0dWRpby5jb20vQVM0Lk5FVC9zb3VyY2UvRmUvRXUuRURlbGl2ZXJ5LkFTNC5GZS91aS9zcmMvYXBwL2NvbW1vbi9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LnRzLlNpZGViYXJDb21wb25lbnRfSG9zdC5odG1sIl0sInNvdXJjZXNDb250ZW50IjpbIiAiLCI8YXNpZGUgY2xhc3M9XCJtYWluLXNpZGViYXJcIj5cclxuICAgIDxzZWN0aW9uIGNsYXNzPVwic2lkZWJhclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ1c2VyLXBhbmVsXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwdWxsLWxlZnQgaW1hZ2VcIj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHVsIGNsYXNzPVwic2lkZWJhci1tZW51XCI+XHJcbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IHJvdXRlIG9mIHJvdXRlc1wiPlxyXG4gICAgICAgICAgICAgICAgPGxpICpuZ0lmPVwiISEhcm91dGUuY2hpbGRyZW5cIiByb3V0ZXJMaW5rQWN0aXZlPVwiYWN0aXZlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgW2F0dHIuZGF0YS1jeV09XCJyb3V0ZS5kYXRhLnRpdGxlXCIgcm91dGVyTGluaz1cIi97e3JvdXRlLnBhdGh9fVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLWZ3IHt7ISFyb3V0ZS5kYXRhLmljb24gPyByb3V0ZS5kYXRhLmljb24gOiAnZmEtYm9vayd9fVwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3tyb3V0ZS5kYXRhLnRpdGxlfX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cInRyZWV2aWV3XCIgKm5nSWY9XCIhIShyb3V0ZSAmJiByb3V0ZS5jaGlsZHJlbiAmJiAocm91dGUuY2hpbGRyZW4ubGVuZ3RoID4gMCkpXCIgcm91dGVyTGlua0FjdGl2ZT1cImFjdGl2ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIFthdHRyLmRhdGEtY3ldPVwicm91dGUuZGF0YS50aXRsZVwiIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEge3shIXJvdXRlLmRhdGEuaWNvbiA/IHJvdXRlLmRhdGEuaWNvbiA6ICdmYS10YWJsZSd9fVwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3tyb3V0ZS5kYXRhLnRpdGxlfX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicHVsbC1yaWdodC1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtYW5nbGUtbGVmdCBwdWxsLXJpZ2h0XCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhIXJvdXRlLmNoaWxkcmVuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cInRyZWV2aWV3LW1lbnVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGNoaWxkUm91dGUgb2Ygcm91dGUuY2hpbGRyZW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgKm5nSWY9XCJjaGlsZFJvdXRlLmNoaWxkcmVuPy5sZW5ndGggPT09IG51bGwgJiYgY2hpbGRSb3V0ZS5kYXRhICYmIGNoaWxkUm91dGUuZGF0YS50aXRsZSAhPT0gdW5kZWZpbmVkICYmICEhIWNoaWxkUm91dGUuZGF0YS5ub21lbnVcIiByb3V0ZXJMaW5rQWN0aXZlPVwiYWN0aXZlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIFthdHRyLmRhdGEtY3ldPVwiY2hpbGRSb3V0ZS5kYXRhLnRpdGxlXCIgcm91dGVyTGluaz1cIi97e3JvdXRlLnBhdGh9fS97e2NoaWxkUm91dGUucGF0aH19XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLWZ3IHt7Y2hpbGRSb3V0ZS5kYXRhLmljb24gPyBjaGlsZFJvdXRlLmRhdGEuaWNvbiA6ICdmYS1hZGp1c3QnfX1cIj48L2k+IHt7Y2hpbGRSb3V0ZS5kYXRhLnRpdGxlfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpICpuZ0lmPVwiY2hpbGRSb3V0ZS5jaGlsZHJlbj8ubGVuZ3RoICE9PSBudWxsXCIgcm91dGVyTGlua0FjdGl2ZT1cImFjdGl2ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBbYXR0ci5kYXRhLWN5XT1cImNoaWxkUm91dGUuZGF0YS50aXRsZVwiIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLWZ3IHt7ISFjaGlsZFJvdXRlLmRhdGEuaWNvbiA/IGNoaWxkUm91dGUuZGF0YS5pY29uIDogJ2ZhLWJvb2snfX1cIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57e2NoaWxkUm91dGUuZGF0YS50aXRsZX19PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwdWxsLXJpZ2h0LWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtZncgZmEtYW5nbGUtbGVmdCBwdWxsLXJpZ2h0XCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cInRyZWV2aWV3LW1lbnVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IHN1YlJvdXRlIG9mIGNoaWxkUm91dGUuY2hpbGRyZW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgKm5nSWY9XCJzdWJSb3V0ZS5kYXRhICYmIHN1YlJvdXRlLmRhdGEudGl0bGUgIT09IHVuZGVmaW5lZCAmJiAhISFzdWJSb3V0ZS5kYXRhLm5vbWVudVwiIHJvdXRlckxpbmtBY3RpdmU9XCJhY3RpdmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgW2F0dHIuZGF0YS1jeV09XCJzdWJSb3V0ZS5kYXRhLnRpdGxlXCIgcm91dGVyTGluaz1cIi97e3JvdXRlLnBhdGh9fS97e2NoaWxkUm91dGUucGF0aH19L3t7c3ViUm91dGUucGF0aH19XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLWZ3IHt7c3ViUm91dGUuZGF0YS5pY29uID8gc3ViUm91dGUuZGF0YS5pY29uIDogJ2ZhLWFkanVzdCd9fVwiPjwvaT4ge3tzdWJSb3V0ZS5kYXRhLnRpdGxlfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICA8L3VsPlxyXG4gICAgPC9zZWN0aW9uPlxyXG48L2FzaWRlPiIsIjxh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
