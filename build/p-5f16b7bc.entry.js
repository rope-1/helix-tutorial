import{r as i,h as t,H as e}from"./p-9e729b80.js";let l=class{constructor(t){i(this,t),this.appearance="tile",this.src=null,this.multiplier=null,this.trophy=null,this.onlyfiliale=!1}render(){return"10"===this.multiplier&&(this.multiplier=null),t(e,null,t("div",{class:`productContainer ${this.appearance}`},this.src?t("img",{class:"product",src:this.src}):t("span",{class:"loading-img"}),t("div",{class:"badges"},this.multiplier?t("div",{class:"multiplier"},t("img",{src:"https://contentimages.coop.ch/DigitalCouponing/Bubbles/"+this.multiplier+"_Supu_DE.png"})):t("span",null),this.onlyfiliale?t("div",{class:"onlyFiliale"},t("img",{src:"https://contentimages.coop.ch/DigitalCouponing/ProduktLogos/Nur_Online_DE.png"})):t("span",null))))}};l.style='*{margin:0;padding:0;box-sizing:border-box}:host{display:block;display:flex;align-items:center;justify-content:center}.productContainer{display:flex;justify-content:center;position:relative;min-width:204px;min-height:225px;width:100%}.productContainer img{position:relative;z-index:2}.tile .badges{position:absolute;bottom:10px;display:flex;justify-content:space-evenly;align-items:flex-end;width:100%}.tile .badges .onlyFiliale img{width:80px;float:right}.tile .badges .multiplier img{width:90px;float:left}.modal .badges{position:absolute;left:0px;top:0px;display:flex;flex-direction:column-reverse;justify-content:space-between;height:100%}.modal .badges .onlyFiliale img{width:80px}.modal .badges .multiplier img{width:90px}.loading-img{position:absolute;top:0px;z-index:1;}.loading-img::before{content:"\\e82c";font-family:var(--iconfont-dc);font-size:180px;line-height:220px;color:var(--brand-primary)}';export{l as coop_dc_product_image}