import{r,h as a,H as o}from"./p-9e729b80.js";let t=class{constructor(a){r(this,a),this.internalBreadcrumbs=[]}componentWillLoad(){this.parseBreadcrumbs()}parseBreadcrumbs(){void 0!==this.breadcrumbs&&(this.internalBreadcrumbs=JSON.parse(this.breadcrumbs))}render(){return a("div",{class:"breadcrumbList"},this.internalBreadcrumbs.map((r=>a("span",null,a("a",{href:""},r)))))}static get watchers(){return{breadcrumbs:["parseBreadcrumbs"]}}};t.style='*{margin:0;padding:0;box-sizing:border-box}:host{display:block}.breadcrumbList{margin-bottom:var(--brand-primary-element-bottom-margin)}span a{font-family:var(--brand-primary-breadcrumb-font-name);font-size:var(--brand-primary-breadcrumb-font-size);line-height:var(--brand-primary-breadcrumb-font-line-height);color:var(--brand-primary-breadcrumb-color);padding-right:3px;text-decoration:none}span::before{font-family:var(--brand-primary-breadcrumb-separator-font);padding:0 4px 0 2px;content:var(--brand-primary-breadcrumb-separator-content);color:var(--brand-primary-breadcrumb-separator-color);font-size:var(--brand-primary-breadcrumb-separator-size)}span:first-child::before{content:""}';let n=class{constructor(a){r(this,a)}render(){return a("h1",null,a("slot",null))}};n.style="*{margin:0;padding:0;box-sizing:border-box}:host{display:block}h1{font-family:var(--brand-primary-h1-font-name);font-size:var(--brand-primary-h1-font-size);line-height:var(--brand-primary-h1-font-line-height);color:var(--brand-primary-h1-color);margin-bottom:var(--brand-primary-element-bottom-margin)}";let i=class{constructor(a){r(this,a),this.appearance="",this.size=""}render(){return a(o,null,a("div",{class:`${this.appearance} ${this.size}`},a("p",null,a("slot",null))))}};i.style="*{margin:0;padding:0;box-sizing:border-box}:host{display:block}p{font-family:var(--brand-primary-p-font-name);font-size:var(--brand-primary-p-font-size);line-height:var(--brand-primary-p-font-line-height);color:var(--brand-primary-p-color);margin-bottom:var(--brand-primary-element-bottom-margin)}::slotted(a){color:var(--brand-primary);text-decoration:none}.extras{margin:25px 0px;border-bottom:1px solid var(--brand-primary-border-color);align-items:center}.extras p{font-size:var(--brand-primary-a-li-font-size);line-height:var(--brand-primary-a-li-font-line-height);margin-bottom:25px}.extras ::slotted(a){color:var(--brand-primary-p-color);text-decoration:none}";export{t as coop_breadcrumb,n as coop_h1,i as coop_p}