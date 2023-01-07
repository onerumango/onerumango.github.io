!function(){"use strict";function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function n(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}(self.webpackChunkmedian=self.webpackChunkmedian||[]).push([[927],{17988:function(t,e,n){n.d(e,{G:function(){return i},T:function(){return a}});var r=n(37716),i=function(){function t(t,e,n){this.el=t,this.vcr=e,this.renderer=n,this.dtOptions={}}return t.prototype.ngOnInit=function(){var t=this;this.dtTrigger?this.dtTrigger.subscribe(function(e){t.displayTable(e)}):this.displayTable(null)},t.prototype.ngOnDestroy=function(){this.dtTrigger&&this.dtTrigger.unsubscribe(),this.dt&&this.dt.destroy(!0)},t.prototype.displayTable=function(t){var e=this;t&&(this.dtOptions=t),this.dtInstance=new Promise(function(t,n){Promise.resolve(e.dtOptions).then(function(r){0===Object.keys(r).length&&0===$("tbody tr",e.el.nativeElement).length?n("Both the table and dtOptions cannot be empty"):setTimeout(function(){var n={rowCallback:function(t,n,i){if(r.columns){var o=r.columns;e.applyNgPipeTransform(t,o),e.applyNgRefTemplate(t,o,n)}r.rowCallback&&r.rowCallback(t,n,i)}};n=Object.assign({},r,n),e.dt=$(e.el.nativeElement).DataTable(n),t(e.dt)})})})},t.prototype.applyNgPipeTransform=function(t,e){e.filter(function(t){return t.ngPipeInstance&&!t.ngTemplateRef}).forEach(function(n){var r=n.ngPipeInstance,i=e.findIndex(function(t){return t.data===n.data}),o=t.childNodes.item(i),a=$(o).text(),s=r.transform(a);$(o).text(s)})},t.prototype.applyNgRefTemplate=function(t,e,n){var r=this;e.filter(function(t){return t.ngTemplateRef&&!t.ngPipeInstance}).forEach(function(i){var o=i.ngTemplateRef,a=o.ref,s=o.context,u=e.findIndex(function(t){return t.data===i.data}),c=t.childNodes.item(u);$(c).html("");var d=Object.assign({},s,null==s?void 0:s.userData,{adtData:n}),p=r.vcr.createEmbeddedView(a,d);r.renderer.appendChild(c,p.rootNodes[0])})},t.\u0275fac=function(e){return new(e||t)(r.Y36(r.SBq),r.Y36(r.s_b),r.Y36(r.Qsj))},t.\u0275dir=r.lG2({type:t,selectors:[["","datatable",""]],inputs:{dtOptions:"dtOptions",dtTrigger:"dtTrigger"}}),t}(),o=n(38583),a=function(){function t(){}return t.forRoot=function(){return{ngModule:t}},t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=r.oAB({type:t}),t.\u0275inj=r.cJS({imports:[[o.ez]]}),t}()},97927:function(e,r,i){i.r(r),i.d(r,{ProcessMonitoringModule:function(){return T}});var o=i(38583),a=i(39895),s=i(79765),u=i(37716),c=i(94761),d=i(17988);function p(t,e){if(1&t&&(u.TgZ(0,"tr"),u.TgZ(1,"td"),u._uU(2),u.qZA(),u.TgZ(3,"td"),u._uU(4),u.qZA(),u.TgZ(5,"td"),u._uU(6),u.qZA(),u.TgZ(7,"td"),u._uU(8),u.qZA(),u.TgZ(9,"td"),u._uU(10),u.qZA(),u.TgZ(11,"td"),u._uU(12),u.qZA(),u.TgZ(13,"td"),u._uU(14),u.qZA(),u.TgZ(15,"td"),u._uU(16),u.ALo(17,"date"),u.qZA(),u.qZA()),2&t){var n=e.$implicit;u.xp6(2),u.Oqu(n.userId),u.xp6(2),u.Oqu(n.batchNo),u.xp6(2),u.Oqu(n.relatedProcess),u.xp6(2),u.Oqu(n.totalNoOfRecord),u.xp6(2),u.Oqu(n.success),u.xp6(2),u.Oqu(n.failed),u.xp6(2),u.Oqu(n.status),u.xp6(2),u.Oqu(u.xi3(17,8,n.createdDate,"medium"))}}function g(t,e){1&t&&(u.ynx(0),u.TgZ(1,"div",7),u.TgZ(2,"span",8),u._uU(3,"Please wait... "),u._UZ(4,"span",9),u.qZA(),u.qZA(),u.BQk())}var l,f=[{path:"",component:(l=function(){function e(n,r){t(this,e),this.apiService=n,this.cdr=r,this.respArray=[],this.dtOptions={},this.dtTrigger=new s.xQ,this.isLoading=!1}return n(e,[{key:"ngOnInit",value:function(){this.dtOptions={pagingType:"full_numbers",pageLength:5,columnDefs:[{type:"date",targets:[7]}],order:[[7,"desc"]],processing:!0,lengthMenu:[[5,10,20,-1],[5,10,20,30]]},this.getDataForMonitor()}},{key:"getDataForMonitor",value:function(){var t=this;this.isLoading=!0,this.apiService.getMonitorData().subscribe(function(e){console.log(e),t.respArray=e.result,t.isLoading=!1,t.cdr.markForCheck(),t.dtTrigger.next()})}},{key:"ngOnDestroy",value:function(){this.dtTrigger.unsubscribe()}}]),e}(),l.\u0275fac=function(t){return new(t||l)(u.Y36(c.sM),u.Y36(u.sBO))},l.\u0275cmp=u.Xpm({type:l,selectors:[["npr-process-monitoring"]],decls:27,vars:4,consts:[[1,"pageContentMain"],[1,"pageTitleCol"],[1,"pageTitle"],[1,"dbCardStyle","table-responsive"],["datatable","",1,"dataTable","table","tableStyle","nowrap","vAlignMdl",2,"width","100%",3,"dtOptions","dtTrigger"],[4,"ngFor","ngForOf"],[4,"ngIf"],[1,"loading-page-center"],[1,"indicator-progress"],[1,"spinner-border","spinner-border-sm","align-middle","ms-2"]],template:function(t,e){1&t&&(u.TgZ(0,"div",0),u.TgZ(1,"div",1),u.TgZ(2,"h2",2),u._uU(3,"Process Monitoring Screen"),u.qZA(),u.qZA(),u.TgZ(4,"div",3),u.TgZ(5,"table",4),u.TgZ(6,"thead"),u.TgZ(7,"tr"),u.TgZ(8,"th"),u._uU(9,"Authorizer"),u.qZA(),u.TgZ(10,"th"),u._uU(11,"Batch no"),u.qZA(),u.TgZ(12,"th"),u._uU(13,"Related Process"),u.qZA(),u.TgZ(14,"th"),u._uU(15,"Total record"),u.qZA(),u.TgZ(16,"th"),u._uU(17,"Success record"),u.qZA(),u.TgZ(18,"th"),u._uU(19,"Failed record"),u.qZA(),u.TgZ(20,"th"),u._uU(21,"Status"),u.qZA(),u.TgZ(22,"th"),u._uU(23,"Date"),u.qZA(),u.qZA(),u.qZA(),u.TgZ(24,"tbody"),u.YNc(25,p,18,11,"tr",5),u.qZA(),u.qZA(),u.YNc(26,g,5,0,"ng-container",6),u.qZA(),u.qZA()),2&t&&(u.xp6(5),u.Q6J("dtOptions",e.dtOptions)("dtTrigger",e.dtTrigger),u.xp6(20),u.Q6J("ngForOf",e.respArray),u.xp6(1),u.Q6J("ngIf",e.isLoading))},directives:[d.G,o.sg,o.O5],pipes:[o.uU],styles:[""]}),l)}],h=function(){var e=n(function e(){t(this,e)});return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=u.oAB({type:e}),e.\u0275inj=u.cJS({imports:[[a.Bz.forChild(f)],a.Bz]}),e}(),T=function(){var e=n(function e(){t(this,e)});return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=u.oAB({type:e}),e.\u0275inj=u.cJS({imports:[[o.ez,h,d.T]]}),e}()}}])}();