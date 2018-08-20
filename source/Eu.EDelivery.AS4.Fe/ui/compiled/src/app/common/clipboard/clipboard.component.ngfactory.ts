/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as i0 from '@angular/core';
import * as i1 from '../../../../../src/app/common/tooltip.directive';
import * as i2 from 'ngx-clipboard/src/clipboard.directive';
import * as i3 from 'ngx-clipboard/src/clipboard.service';
import * as i4 from '@angular/common';
import * as i5 from '../../../../../src/app/common/clipboard/clipboard.component';
const styles_ClipboardComponent:any[] = ['.clipboard-container[_ngcontent-%COMP%] {\n            display: inline;\n        }\n        .fa-clipboard[_ngcontent-%COMP%] {\n            color: #CCC;\n        }'];
export const RenderType_ClipboardComponent:i0.RendererType2 = i0.ɵcrt({encapsulation:0,
    styles:styles_ClipboardComponent,data:{}});
function View_ClipboardComponent_1(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,0,(null as any),(null as any),6,'div',[['as4-tooltip',
      'Copy to clipboard'],['class','clipboard-container']],(null as any),[[(null as any),
      'click'],['document','keydown']],(_v,en,$event) => {
    var ad:boolean = true;
    if (('click' === en)) {
      const pd_0:any = ((<any>i0.ɵnov(_v,1).onClick($event)) !== false);
      ad = (pd_0 && ad);
    }
    if (('document:keydown' === en)) {
      const pd_1:any = ((<any>i0.ɵnov(_v,1).onKeyDown()) !== false);
      ad = (pd_1 && ad);
    }
    return ad;
  },(null as any),(null as any))),i0.ɵdid(1,212992,[[2,4],['outerTooltip',4]],0,i1.TooltipDirective,
      [i0.Renderer,i0.ElementRef,[3,i1.TooltipDirective]],{input:[0,'input']},(null as any)),
      (_l()(),i0.ɵted(-1,(null as any),['\n            '])),(_l()(),i0.ɵeld(3,0,(null as any),
          (null as any),2,'i',[['as4-tooltip-manual','true'],['class','fa fa-clipboard clickable'],
              ['ngxClipboard','']],(null as any),[[(null as any),'cbOnSuccess'],[(null as any),
              'click'],['document','keydown']],(_v,en,$event) => {
            var ad:boolean = true;
            var _co:any = _v.component;
            if (('click' === en)) {
              const pd_0:any = ((<any>i0.ɵnov(_v,4).onClick($event.target)) !== false);
              ad = (pd_0 && ad);
            }
            if (('click' === en)) {
              const pd_1:any = ((<any>i0.ɵnov(_v,5).onClick($event)) !== false);
              ad = (pd_1 && ad);
            }
            if (('document:keydown' === en)) {
              const pd_2:any = ((<any>i0.ɵnov(_v,5).onKeyDown()) !== false);
              ad = (pd_2 && ad);
            }
            if (('cbOnSuccess' === en)) {
              const pd_3:any = ((<any>_co.success()) !== false);
              ad = (pd_3 && ad);
            }
            return ad;
          },(null as any),(null as any))),i0.ɵdid(4,212992,(null as any),0,i2.ClipboardDirective,
          [i3.ClipboardService,i0.Renderer],{targetElm:[0,'targetElm'],cbContent:[1,
              'cbContent']},{cbOnSuccess:'cbOnSuccess'}),i0.ɵdid(5,212992,[[1,4],['tooltip',
          4]],0,i1.TooltipDirective,[i0.Renderer,i0.ElementRef,[3,i1.TooltipDirective]],
          {input:[0,'input'],manual:[1,'manual']},(null as any)),(_l()(),i0.ɵted(-1,
          (null as any),['       \n        ']))],(_ck,_v) => {
    var _co:any = _v.component;
    const currVal_0:any = 'Copy to clipboard';
    _ck(_v,1,0,currVal_0);
    const currVal_1:any = '';
    const currVal_2:any = _co.content;
    _ck(_v,4,0,currVal_1,currVal_2);
    const currVal_3:any = _co.message;
    const currVal_4:any = 'true';
    _ck(_v,5,0,currVal_3,currVal_4);
  },(null as any));
}
export function View_ClipboardComponent_0(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[i0.ɵqud(671088640,1,{tooltip:0}),i0.ɵqud(671088640,2,{outerToolTip:0}),
      (_l()(),i0.ɵted(-1,(null as any),['\n        '])),(_l()(),i0.ɵand(16777216,(null as any),
          (null as any),1,(null as any),View_ClipboardComponent_1)),i0.ɵdid(4,16384,
          (null as any),0,i4.NgIf,[i0.ViewContainerRef,i0.TemplateRef],{ngIf:[0,'ngIf']},
          (null as any)),(_l()(),i0.ɵted(-1,(null as any),['\n   ']))],(_ck,_v) => {
    var _co:i5.ClipboardComponent = _v.component;
    const currVal_0:boolean = !!_co.content;
    _ck(_v,4,0,currVal_0);
  },(null as any));
}
export function View_ClipboardComponent_Host_0(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,0,(null as any),(null as any),1,'as4-clipboard',
      ([] as any[]),(null as any),(null as any),(null as any),View_ClipboardComponent_0,
      RenderType_ClipboardComponent)),i0.ɵdid(1,49152,(null as any),0,i5.ClipboardComponent,
      ([] as any[]),(null as any),(null as any))],(null as any),(null as any));
}
export const ClipboardComponentNgFactory:i0.ComponentFactory<i5.ClipboardComponent> = i0.ɵccf('as4-clipboard, [as4-clipboard]',
    i5.ClipboardComponent,View_ClipboardComponent_Host_0,{message:'message',content:'content'},
    {onCopied:'onCopied'},([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiQzovRGV2L2NvZGl0LnZpc3VhbHN0dWRpby5jb20vQVM0Lk5FVC9zb3VyY2UvRmUvRXUuRURlbGl2ZXJ5LkFTNC5GZS91aS9zcmMvYXBwL2NvbW1vbi9jbGlwYm9hcmQvY2xpcGJvYXJkLmNvbXBvbmVudC5uZ2ZhY3RvcnkudHMiLCJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuZzovLy9DOi9EZXYvY29kaXQudmlzdWFsc3R1ZGlvLmNvbS9BUzQuTkVUL3NvdXJjZS9GZS9FdS5FRGVsaXZlcnkuQVM0LkZlL3VpL3NyYy9hcHAvY29tbW9uL2NsaXBib2FyZC9jbGlwYm9hcmQuY29tcG9uZW50LnRzIiwibmc6Ly8vQzovRGV2L2NvZGl0LnZpc3VhbHN0dWRpby5jb20vQVM0Lk5FVC9zb3VyY2UvRmUvRXUuRURlbGl2ZXJ5LkFTNC5GZS91aS9zcmMvYXBwL2NvbW1vbi9jbGlwYm9hcmQvY2xpcGJvYXJkLmNvbXBvbmVudC50cy5DbGlwYm9hcmRDb21wb25lbnQuaHRtbCIsIm5nOi8vL0M6L0Rldi9jb2RpdC52aXN1YWxzdHVkaW8uY29tL0FTNC5ORVQvc291cmNlL0ZlL0V1LkVEZWxpdmVyeS5BUzQuRmUvdWkvc3JjL2FwcC9jb21tb24vY2xpcGJvYXJkL2NsaXBib2FyZC5jb21wb25lbnQudHMuQ2xpcGJvYXJkQ29tcG9uZW50X0hvc3QuaHRtbCJdLCJzb3VyY2VzQ29udGVudCI6WyIgIiwiXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjbGlwYm9hcmQtY29udGFpbmVyXCIgYXM0LXRvb2x0aXA9XCJDb3B5IHRvIGNsaXBib2FyZFwiICNvdXRlclRvb2x0aXA9XCJhczQtdG9vbHRpcFwiICpuZ0lmPVwiISFjb250ZW50XCI+XG4gICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLWNsaXBib2FyZCBjbGlja2FibGVcIiBuZ3hDbGlwYm9hcmQgW2NiQ29udGVudF09XCJjb250ZW50XCIgKGNiT25TdWNjZXNzKT1cInN1Y2Nlc3MoKVwiIFthczQtdG9vbHRpcF09XCJtZXNzYWdlXCIgYXM0LXRvb2x0aXAtbWFudWFsPVwidHJ1ZVwiICN0b29sdGlwPVwiYXM0LXRvb2x0aXBcIj48L2k+ICAgICAgIFxuICAgICAgICA8L2Rpdj5cbiAgICIsIjxhczQtY2xpcGJvYXJkPjwvYXM0LWNsaXBib2FyZD4iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JDQ1E7TUFBQTtNQUFBO0lBQUE7SUFBQTtNQUFBO01BQUE7SUFBQTtJQUFBO01BQUE7TUFBQTtJQUFBO0lBQUE7RUFBQSx1Q0FBQTtNQUFBO01BQStHLHNEQUMzRztVQUFBO2NBQUE7Y0FBQTtZQUFBO1lBQUE7WUFBQTtjQUFBO2NBQUE7WUFBQTtZQUFBO2NBQUE7Y0FBQTtZQUFBO1lBQUE7Y0FBQTtjQUFBO1lBQUE7WUFBd0U7Y0FBQTtjQUFBO1lBQUE7WUFBeEU7VUFBQSx1Q0FBQTtVQUFBO2NBQUEsa0RBQUE7VUFBQTtVQUFBLHVEQUErSztVQUFBOztJQURsSjtJQUFqQyxXQUFpQyxTQUFqQztJQUN5QztJQUFhO0lBQWxELFdBQXFDLFVBQWEsU0FBbEQ7SUFBa0c7SUFBd0I7SUFBMUgsV0FBa0csVUFBd0IsU0FBMUg7Ozs7O01BRlosa0RBQ1E7VUFBQSxpRUFBQTtVQUFBO1VBQUEsZUFFTTs7SUFGdUY7SUFBN0YsV0FBNkYsU0FBN0Y7Ozs7b0JDRFI7TUFBQTttQ0FBQSxVQUFBO01BQUE7Ozs7In0=
