import{r as o,h as t,H as i}from"./p-9e729b80.js";let n=class{constructor(t){o(this,t),this.options="",this.internalOptions=[],this.isOpen=!1}parseOptions(){void 0!==this.options&&(this.internalOptions=JSON.parse(this.options))}componentWillLoad(){this.parseOptions()}handleBtnClick(){this.isOpen=!this.isOpen}render(){return t(i,null,this.isOpen?t("div",null,t("coop-btn",{class:"btn-expanded",onClick:this.handleBtnClick.bind(this),size:"medium",appearance:"transparent"},t("slot",null)),t("div",{class:"expanded"},this.internalOptions.map((o=>t("div",{class:"option"},t("input",{class:"radio",type:"radio",id:o.id,name:"options"}),t("div",{class:"labels"},t("label",{class:"title",htmlFor:o.id},o.title),t("label",{class:"subtitle",htmlFor:o.id},o.subtitle))))))):t("div",null,t("coop-btn",{onClick:this.handleBtnClick.bind(this),size:"medium",appearance:"expandable"},t("slot",null))))}static get watchers(){return{options:["parseOptions"]}}};n.style='*{margin:0;padding:0;box-sizing:border-box}:host{display:block;position:relative}coop-btn{position:relative;z-index:2}.expanded{position:absolute;z-index:1;top:0px;right:0px;width:360px;margin-bottom:40px;background-color:var(--white);border:1px solid var(--brand-primary-border-color);border-radius:4px;box-shadow:0 1px 3px -2px rgba(0, 0, 0, 0.2), 0 1px 4px 0 rgba(0, 0, 0, 0.14), 0 1px 8px 0 rgba(0, 0, 0, 0.12)}.option{display:block;padding:19px;padding-right:60px;border-bottom:1px solid var(--brand-primary-border-color)}.option:first-child{margin-top:40px}.option:last-child{border-bottom:none;margin-bottom:40px}.option input{width:20px;height:20px;border:none;border-radius:50%;-webkit-appearance:none;appearance:none;background-color:var(--brand-primary-border-color);margin:0;margin-top:3px;float:left}.option input:checked{background-color:var(--brand-primary);border:5px solid var(--white);outline:2px solid var(--brand-primary)}.option .labels{display:block;margin-left:40px;font-family:var(--font-primary)}.option .labels .title{font-size:16px;display:block}.option .labels .subtitle{font-size:14px;display:block;color:var(--brand-primary-img-check-color)}@media (max-width: 600px){coop-btn{position:relative;z-index:2}.expanded{position:fixed;z-index:1;top:0px;right:0px;width:100%;height:100%;background-color:var(--white);border:none;box-shadow:none;padding-top:17px}.expanded::after{content:"";width:100%;height:50px;position:absolute;top:0px;left:0px;background-color:var(--brand-primary)}.option .labels{display:block;margin-left:40px}.option .labels .title{font-size:14px}.option .labels .subtitle{font-size:12px}coop-btn.btn-expanded{pointer-events:none}coop-btn.btn-expanded::part(btn){color:var(--white);position:fixed;top:0px;left:0px;width:100vw;display:block;line-height:30px;text-align:center}coop-btn.btn-expanded ::after{position:absolute;top:0px;right:20px;float:right;font-family:var(--iconfont-dc);content:"\\e806";pointer-events:initial;display:block;line-height:50px;font-size:25px}}';export{n as coop_expandable_btn}