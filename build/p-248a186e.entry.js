import{r as t,c as r,h as a}from"./p-9e729b80.js";let e=class{constructor(a){t(this,a),this.tabActivate=r(this,"tabActivate",7),this.bubble=null,this.getCSSClass=()=>this.active?"tab-header tab-header-active":"tab-header"}handleClick(){this.active=!0,this.tabActivate.emit({name:this.name})}render(){return a("div",{class:this.getCSSClass()},a("slot",null))}};e.style="*{margin:0;padding:0;box-sizing:border-box}:host{flex:1 1 100%}.tab-header{text-align:center;color:var(--brand-primary-text);font-family:var(--font-secondary-regular);font-size:var(--brand-primary-p-font-size);line-height:24px;cursor:pointer;padding-bottom:15px;border-bottom:5px solid #f6f6f6;margin-bottom:30px}.tab-header-active{border-bottom:5px solid var(--brand-primary)}";export{e as coop_tab_header}