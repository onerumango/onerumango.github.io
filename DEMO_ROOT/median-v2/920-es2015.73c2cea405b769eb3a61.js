"use strict";(self.webpackChunkmedian=self.webpackChunkmedian||[]).push([[920],{17988:function(t,Z,e){e.d(Z,{G:function(){return T},T:function(){return u}});var g=e(37716),T=function(){function t(t,Z,e){this.el=t,this.vcr=Z,this.renderer=e,this.dtOptions={}}return t.prototype.ngOnInit=function(){var t=this;this.dtTrigger?this.dtTrigger.subscribe(function(Z){t.displayTable(Z)}):this.displayTable(null)},t.prototype.ngOnDestroy=function(){this.dtTrigger&&this.dtTrigger.unsubscribe(),this.dt&&this.dt.destroy(!0)},t.prototype.displayTable=function(t){var Z=this;t&&(this.dtOptions=t),this.dtInstance=new Promise(function(t,e){Promise.resolve(Z.dtOptions).then(function(g){0===Object.keys(g).length&&0===$("tbody tr",Z.el.nativeElement).length?e("Both the table and dtOptions cannot be empty"):setTimeout(function(){var e={rowCallback:function(t,e,T){if(g.columns){var d=g.columns;Z.applyNgPipeTransform(t,d),Z.applyNgRefTemplate(t,d,e)}g.rowCallback&&g.rowCallback(t,e,T)}};e=Object.assign({},g,e),Z.dt=$(Z.el.nativeElement).DataTable(e),t(Z.dt)})})})},t.prototype.applyNgPipeTransform=function(t,Z){Z.filter(function(t){return t.ngPipeInstance&&!t.ngTemplateRef}).forEach(function(e){var g=e.ngPipeInstance,T=Z.findIndex(function(t){return t.data===e.data}),d=t.childNodes.item(T),u=$(d).text(),A=g.transform(u);$(d).text(A)})},t.prototype.applyNgRefTemplate=function(t,Z,e){var g=this;Z.filter(function(t){return t.ngTemplateRef&&!t.ngPipeInstance}).forEach(function(T){var d=T.ngTemplateRef,u=d.ref,A=d.context,q=Z.findIndex(function(t){return t.data===T.data}),r=t.childNodes.item(q);$(r).html("");var n=Object.assign({},A,null==A?void 0:A.userData,{adtData:e}),_=g.vcr.createEmbeddedView(u,n);g.renderer.appendChild(r,_.rootNodes[0])})},t.\u0275fac=function(Z){return new(Z||t)(g.Y36(g.SBq),g.Y36(g.s_b),g.Y36(g.Qsj))},t.\u0275dir=g.lG2({type:t,selectors:[["","datatable",""]],inputs:{dtOptions:"dtOptions",dtTrigger:"dtTrigger"}}),t}(),d=e(38583),u=function(){function t(){}return t.forRoot=function(){return{ngModule:t}},t.\u0275fac=function(Z){return new(Z||t)},t.\u0275mod=g.oAB({type:t}),t.\u0275inj=g.cJS({imports:[[d.ez]]}),t}()},87920:function(t,Z,e){e.r(Z),e.d(Z,{NewExternalSystemModule:function(){return r}});var g=e(38583),T=e(39895),d=e(37716),u=e(17988);const A=[{path:"",component:(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(Z){return new(Z||t)},t.\u0275cmp=d.Xpm({type:t,selectors:[["npr-new-external-system"]],decls:406,vars:0,consts:[[1,"pageContentMain"],[1,"pageTitleCol"],[1,"pageTitle"],[1,"dbCardStyle"],[1,"row","g-3","pb-3","justify-content-end"],[1,"col-auto"],["href","javascript:void(0)",1,"btn","smBtn","minWdSmBtn","btnPrimary"],["href","javascript:void(0)",1,"btn","smBtn","minWdSmBtn","btnSecondary"],["id","dbTable1","datatable","",1,"dataTable","table","tableStyle","responsive","nowrap",2,"width","100%"],["href","javascript:void(0)",1,"primaryColor"]],template:function(t,Z){1&t&&(d.TgZ(0,"div",0),d.TgZ(1,"div",1),d.TgZ(2,"h2",2),d._uU(3,"External Sys Summary New"),d.qZA(),d.qZA(),d.TgZ(4,"div",3),d.TgZ(5,"div",4),d.TgZ(6,"div",5),d.TgZ(7,"a",6),d._uU(8,"New"),d.qZA(),d.qZA(),d.TgZ(9,"div",5),d.TgZ(10,"a",7),d._uU(11,"Exit"),d.qZA(),d.qZA(),d.qZA(),d.TgZ(12,"table",8),d.TgZ(13,"thead"),d.TgZ(14,"tr"),d.TgZ(15,"th"),d._uU(16,"code"),d.qZA(),d.TgZ(17,"th"),d._uU(18,"name"),d.qZA(),d.TgZ(19,"th"),d._uU(20,"type"),d.qZA(),d.TgZ(21,"th"),d._uU(22,"externalip"),d.qZA(),d.TgZ(23,"th"),d._uU(24,"external port"),d.qZA(),d.TgZ(25,"th"),d._uU(26,"external port"),d.qZA(),d.qZA(),d.qZA(),d.TgZ(27,"tbody"),d.TgZ(28,"tr"),d.TgZ(29,"td"),d.TgZ(30,"a",9),d._uU(31,"test1"),d.qZA(),d.qZA(),d.TgZ(32,"td"),d._uU(33,"test1"),d.qZA(),d.TgZ(34,"td"),d._uU(35,"Server"),d.qZA(),d.TgZ(36,"td"),d._uU(37,"09/07/2021"),d.qZA(),d.TgZ(38,"td"),d._uU(39,"78"),d.qZA(),d.TgZ(40,"td"),d._uU(41,"09/07/2021"),d.qZA(),d.qZA(),d.TgZ(42,"tr"),d.TgZ(43,"td"),d.TgZ(44,"a",9),d._uU(45,"test1"),d.qZA(),d.qZA(),d.TgZ(46,"td"),d._uU(47,"test1"),d.qZA(),d.TgZ(48,"td"),d._uU(49,"Server"),d.qZA(),d.TgZ(50,"td"),d._uU(51,"09/07/2021"),d.qZA(),d.TgZ(52,"td"),d._uU(53,"78"),d.qZA(),d.TgZ(54,"td"),d._uU(55,"09/07/2021"),d.qZA(),d.qZA(),d.TgZ(56,"tr"),d.TgZ(57,"td"),d.TgZ(58,"a",9),d._uU(59,"test1"),d.qZA(),d.qZA(),d.TgZ(60,"td"),d._uU(61,"test1"),d.qZA(),d.TgZ(62,"td"),d._uU(63,"Server"),d.qZA(),d.TgZ(64,"td"),d._uU(65,"09/07/2021"),d.qZA(),d.TgZ(66,"td"),d._uU(67,"78"),d.qZA(),d.TgZ(68,"td"),d._uU(69,"09/07/2021"),d.qZA(),d.qZA(),d.TgZ(70,"tr"),d.TgZ(71,"td"),d.TgZ(72,"a",9),d._uU(73,"test1"),d.qZA(),d.qZA(),d.TgZ(74,"td"),d._uU(75,"test1"),d.qZA(),d.TgZ(76,"td"),d._uU(77,"Server"),d.qZA(),d.TgZ(78,"td"),d._uU(79,"09/07/2021"),d.qZA(),d.TgZ(80,"td"),d._uU(81,"78"),d.qZA(),d.TgZ(82,"td"),d._uU(83,"09/07/2021"),d.qZA(),d.qZA(),d.TgZ(84,"tr"),d.TgZ(85,"td"),d.TgZ(86,"a",9),d._uU(87,"test1"),d.qZA(),d.qZA(),d.TgZ(88,"td"),d._uU(89,"test1"),d.qZA(),d.TgZ(90,"td"),d._uU(91,"Server"),d.qZA(),d.TgZ(92,"td"),d._uU(93,"09/07/2021"),d.qZA(),d.TgZ(94,"td"),d._uU(95,"78"),d.qZA(),d.TgZ(96,"td"),d._uU(97,"09/07/2021"),d.qZA(),d.qZA(),d.TgZ(98,"tr"),d.TgZ(99,"td"),d.TgZ(100,"a",9),d._uU(101,"test1"),d.qZA(),d.qZA(),d.TgZ(102,"td"),d._uU(103,"test1"),d.qZA(),d.TgZ(104,"td"),d._uU(105,"Server"),d.qZA(),d.TgZ(106,"td"),d._uU(107,"09/07/2021"),d.qZA(),d.TgZ(108,"td"),d._uU(109,"78"),d.qZA(),d.TgZ(110,"td"),d._uU(111,"09/07/2021"),d.qZA(),d.qZA(),d.TgZ(112,"tr"),d.TgZ(113,"td"),d.TgZ(114,"a",9),d._uU(115,"test1"),d.qZA(),d.qZA(),d.TgZ(116,"td"),d._uU(117,"test1"),d.qZA(),d.TgZ(118,"td"),d._uU(119,"Server"),d.qZA(),d.TgZ(120,"td"),d._uU(121,"09/07/2021"),d.qZA(),d.TgZ(122,"td"),d._uU(123,"78"),d.qZA(),d.TgZ(124,"td"),d._uU(125,"09/07/2021"),d.qZA(),d.qZA(),d.TgZ(126,"tr"),d.TgZ(127,"td"),d.TgZ(128,"a",9),d._uU(129,"test1"),d.qZA(),d.qZA(),d.TgZ(130,"td"),d._uU(131,"test1"),d.qZA(),d.TgZ(132,"td"),d._uU(133,"Server"),d.qZA(),d.TgZ(134,"td"),d._uU(135,"09/07/2021"),d.qZA(),d.TgZ(136,"td"),d._uU(137,"78"),d.qZA(),d.TgZ(138,"td"),d._uU(139,"09/07/2021"),d.qZA(),d.qZA(),d.TgZ(140,"tr"),d.TgZ(141,"td"),d.TgZ(142,"a",9),d._uU(143,"test1"),d.qZA(),d.qZA(),d.TgZ(144,"td"),d._uU(145,"test1"),d.qZA(),d.TgZ(146,"td"),d._uU(147,"Server"),d.qZA(),d.TgZ(148,"td"),d._uU(149,"09/07/2021"),d.qZA(),d.TgZ(150,"td"),d._uU(151,"78"),d.qZA(),d.TgZ(152,"td"),d._uU(153,"09/07/2021"),d.qZA(),d.qZA(),d.TgZ(154,"tr"),d.TgZ(155,"td"),d.TgZ(156,"a",9),d._uU(157,"test1"),d.qZA(),d.qZA(),d.TgZ(158,"td"),d._uU(159,"test1"),d.qZA(),d.TgZ(160,"td"),d._uU(161,"Server"),d.qZA(),d.TgZ(162,"td"),d._uU(163,"09/07/2021"),d.qZA(),d.TgZ(164,"td"),d._uU(165,"78"),d.qZA(),d.TgZ(166,"td"),d._uU(167,"09/07/2021"),d.qZA(),d.qZA(),d.TgZ(168,"tr"),d.TgZ(169,"td"),d.TgZ(170,"a",9),d._uU(171,"test1"),d.qZA(),d.qZA(),d.TgZ(172,"td"),d._uU(173,"test1"),d.qZA(),d.TgZ(174,"td"),d._uU(175,"Server"),d.qZA(),d.TgZ(176,"td"),d._uU(177,"09/07/2021"),d.qZA(),d.TgZ(178,"td"),d._uU(179,"78"),d.qZA(),d.TgZ(180,"td"),d._uU(181,"09/07/2021"),d.qZA(),d.qZA(),d.TgZ(182,"tr"),d.TgZ(183,"td"),d.TgZ(184,"a",9),d._uU(185,"test1"),d.qZA(),d.qZA(),d.TgZ(186,"td"),d._uU(187,"test1"),d.qZA(),d.TgZ(188,"td"),d._uU(189,"Server"),d.qZA(),d.TgZ(190,"td"),d._uU(191,"09/07/2021"),d.qZA(),d.TgZ(192,"td"),d._uU(193,"78"),d.qZA(),d.TgZ(194,"td"),d._uU(195,"09/07/2021"),d.qZA(),d.qZA(),d.TgZ(196,"tr"),d.TgZ(197,"td"),d.TgZ(198,"a",9),d._uU(199,"test1"),d.qZA(),d.qZA(),d.TgZ(200,"td"),d._uU(201,"test1"),d.qZA(),d.TgZ(202,"td"),d._uU(203,"Server"),d.qZA(),d.TgZ(204,"td"),d._uU(205,"09/07/2021"),d.qZA(),d.TgZ(206,"td"),d._uU(207,"78"),d.qZA(),d.TgZ(208,"td"),d._uU(209,"09/07/2021"),d.qZA(),d.qZA(),d.TgZ(210,"tr"),d.TgZ(211,"td"),d.TgZ(212,"a",9),d._uU(213,"test1"),d.qZA(),d.qZA(),d.TgZ(214,"td"),d._uU(215,"test1"),d.qZA(),d.TgZ(216,"td"),d._uU(217,"Server"),d.qZA(),d.TgZ(218,"td"),d._uU(219,"09/07/2021"),d.qZA(),d.TgZ(220,"td"),d._uU(221,"78"),d.qZA(),d.TgZ(222,"td"),d._uU(223,"09/07/2021"),d.qZA(),d.qZA(),d.TgZ(224,"tr"),d.TgZ(225,"td"),d.TgZ(226,"a",9),d._uU(227,"test1"),d.qZA(),d.qZA(),d.TgZ(228,"td"),d._uU(229,"test1"),d.qZA(),d.TgZ(230,"td"),d._uU(231,"Server"),d.qZA(),d.TgZ(232,"td"),d._uU(233,"09/07/2021"),d.qZA(),d.TgZ(234,"td"),d._uU(235,"78"),d.qZA(),d.TgZ(236,"td"),d._uU(237,"09/07/2021"),d.qZA(),d.qZA(),d.TgZ(238,"tr"),d.TgZ(239,"td"),d.TgZ(240,"a",9),d._uU(241,"test1"),d.qZA(),d.qZA(),d.TgZ(242,"td"),d._uU(243,"test1"),d.qZA(),d.TgZ(244,"td"),d._uU(245,"Server"),d.qZA(),d.TgZ(246,"td"),d._uU(247,"09/07/2021"),d.qZA(),d.TgZ(248,"td"),d._uU(249,"78"),d.qZA(),d.TgZ(250,"td"),d._uU(251,"09/07/2021"),d.qZA(),d.qZA(),d.TgZ(252,"tr"),d.TgZ(253,"td"),d.TgZ(254,"a",9),d._uU(255,"test1"),d.qZA(),d.qZA(),d.TgZ(256,"td"),d._uU(257,"test1"),d.qZA(),d.TgZ(258,"td"),d._uU(259,"Server"),d.qZA(),d.TgZ(260,"td"),d._uU(261,"09/07/2021"),d.qZA(),d.TgZ(262,"td"),d._uU(263,"78"),d.qZA(),d.TgZ(264,"td"),d._uU(265,"09/07/2021"),d.qZA(),d.qZA(),d.TgZ(266,"tr"),d.TgZ(267,"td"),d.TgZ(268,"a",9),d._uU(269,"test1"),d.qZA(),d.qZA(),d.TgZ(270,"td"),d._uU(271,"test1"),d.qZA(),d.TgZ(272,"td"),d._uU(273,"Server"),d.qZA(),d.TgZ(274,"td"),d._uU(275,"09/07/2021"),d.qZA(),d.TgZ(276,"td"),d._uU(277,"78"),d.qZA(),d.TgZ(278,"td"),d._uU(279,"09/07/2021"),d.qZA(),d.qZA(),d.TgZ(280,"tr"),d.TgZ(281,"td"),d.TgZ(282,"a",9),d._uU(283,"test1"),d.qZA(),d.qZA(),d.TgZ(284,"td"),d._uU(285,"test1"),d.qZA(),d.TgZ(286,"td"),d._uU(287,"Server"),d.qZA(),d.TgZ(288,"td"),d._uU(289,"09/07/2021"),d.qZA(),d.TgZ(290,"td"),d._uU(291,"78"),d.qZA(),d.TgZ(292,"td"),d._uU(293,"09/07/2021"),d.qZA(),d.qZA(),d.TgZ(294,"tr"),d.TgZ(295,"td"),d.TgZ(296,"a",9),d._uU(297,"test1"),d.qZA(),d.qZA(),d.TgZ(298,"td"),d._uU(299,"test1"),d.qZA(),d.TgZ(300,"td"),d._uU(301,"Server"),d.qZA(),d.TgZ(302,"td"),d._uU(303,"09/07/2021"),d.qZA(),d.TgZ(304,"td"),d._uU(305,"78"),d.qZA(),d.TgZ(306,"td"),d._uU(307,"09/07/2021"),d.qZA(),d.qZA(),d.TgZ(308,"tr"),d.TgZ(309,"td"),d.TgZ(310,"a",9),d._uU(311,"test1"),d.qZA(),d.qZA(),d.TgZ(312,"td"),d._uU(313,"test1"),d.qZA(),d.TgZ(314,"td"),d._uU(315,"Server"),d.qZA(),d.TgZ(316,"td"),d._uU(317,"09/07/2021"),d.qZA(),d.TgZ(318,"td"),d._uU(319,"78"),d.qZA(),d.TgZ(320,"td"),d._uU(321,"09/07/2021"),d.qZA(),d.qZA(),d.TgZ(322,"tr"),d.TgZ(323,"td"),d.TgZ(324,"a",9),d._uU(325,"test1"),d.qZA(),d.qZA(),d.TgZ(326,"td"),d._uU(327,"test1"),d.qZA(),d.TgZ(328,"td"),d._uU(329,"Server"),d.qZA(),d.TgZ(330,"td"),d._uU(331,"09/07/2021"),d.qZA(),d.TgZ(332,"td"),d._uU(333,"78"),d.qZA(),d.TgZ(334,"td"),d._uU(335,"09/07/2021"),d.qZA(),d.qZA(),d.TgZ(336,"tr"),d.TgZ(337,"td"),d.TgZ(338,"a",9),d._uU(339,"test1"),d.qZA(),d.qZA(),d.TgZ(340,"td"),d._uU(341,"test1"),d.qZA(),d.TgZ(342,"td"),d._uU(343,"Server"),d.qZA(),d.TgZ(344,"td"),d._uU(345,"09/07/2021"),d.qZA(),d.TgZ(346,"td"),d._uU(347,"78"),d.qZA(),d.TgZ(348,"td"),d._uU(349,"09/07/2021"),d.qZA(),d.qZA(),d.TgZ(350,"tr"),d.TgZ(351,"td"),d.TgZ(352,"a",9),d._uU(353,"test1"),d.qZA(),d.qZA(),d.TgZ(354,"td"),d._uU(355,"test1"),d.qZA(),d.TgZ(356,"td"),d._uU(357,"Server"),d.qZA(),d.TgZ(358,"td"),d._uU(359,"09/07/2021"),d.qZA(),d.TgZ(360,"td"),d._uU(361,"78"),d.qZA(),d.TgZ(362,"td"),d._uU(363,"09/07/2021"),d.qZA(),d.qZA(),d.TgZ(364,"tr"),d.TgZ(365,"td"),d.TgZ(366,"a",9),d._uU(367,"test1"),d.qZA(),d.qZA(),d.TgZ(368,"td"),d._uU(369,"test1"),d.qZA(),d.TgZ(370,"td"),d._uU(371,"Server"),d.qZA(),d.TgZ(372,"td"),d._uU(373,"09/07/2021"),d.qZA(),d.TgZ(374,"td"),d._uU(375,"78"),d.qZA(),d.TgZ(376,"td"),d._uU(377,"09/07/2021"),d.qZA(),d.qZA(),d.TgZ(378,"tr"),d.TgZ(379,"td"),d.TgZ(380,"a",9),d._uU(381,"test1"),d.qZA(),d.qZA(),d.TgZ(382,"td"),d._uU(383,"test1"),d.qZA(),d.TgZ(384,"td"),d._uU(385,"Server"),d.qZA(),d.TgZ(386,"td"),d._uU(387,"09/07/2021"),d.qZA(),d.TgZ(388,"td"),d._uU(389,"78"),d.qZA(),d.TgZ(390,"td"),d._uU(391,"09/07/2021"),d.qZA(),d.qZA(),d.TgZ(392,"tr"),d.TgZ(393,"td"),d.TgZ(394,"a",9),d._uU(395,"test1"),d.qZA(),d.qZA(),d.TgZ(396,"td"),d._uU(397,"test1"),d.qZA(),d.TgZ(398,"td"),d._uU(399,"Server"),d.qZA(),d.TgZ(400,"td"),d._uU(401,"09/07/2021"),d.qZA(),d.TgZ(402,"td"),d._uU(403,"78"),d.qZA(),d.TgZ(404,"td"),d._uU(405,"09/07/2021"),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.qZA())},directives:[u.G],styles:[""]}),t})()}];let q=(()=>{class t{}return t.\u0275fac=function(Z){return new(Z||t)},t.\u0275mod=d.oAB({type:t}),t.\u0275inj=d.cJS({imports:[[T.Bz.forChild(A)],T.Bz]}),t})(),r=(()=>{class t{}return t.\u0275fac=function(Z){return new(Z||t)},t.\u0275mod=d.oAB({type:t}),t.\u0275inj=d.cJS({imports:[[g.ez,q,u.T]]}),t})()}}]);