import{r,c as a,h as t}from"./p-9e729b80.js";let i=class{constructor(t){r(this,t),this.tabActivate=a(this,"tabActivate",7),this.bubble=null,this.getCSSClass=()=>this.active?"tab-header tab-header-active":"tab-header"}handleClick(){this.active=!0,this.tabActivate.emit({name:this.name})}render(){return t("div",{class:this.getCSSClass()},t("slot",null),this.bubble?t("span",{class:"bubble"},this.bubble):null)}};i.style="*{margin:0;padding:0;box-sizing:border-box}:host{flex:1 1 100%}.tab-header{text-align:center;color:var(--brand-primary-text);font-family:var(--font-secondary-regular);font-size:var(--brand-primary-p-font-size);line-height:24px;cursor:pointer;padding-bottom:15px;border-bottom:5px solid #f6f6f6;margin-bottom:30px}.tab-header-active{border-bottom:5px solid var(--brand-primary)}.bubble{position:relative;background-color:var(--brand-primary);border-radius:50%;color:var(--white);font-family:var(--font-primary);font-size:var(--brand-primary-p-font-size-small);margin-left:10px;padding:2px 3px}";export{i as coop_tab_header}