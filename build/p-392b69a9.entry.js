import{r as o,h as i}from"./p-9e729b80.js";let a=class{constructor(i){o(this,i)}handleClose(){this.isopen=!1}render(){return i("div",{class:this.isopen?"coop-modal is-open":"coop-modal"},i("div",{class:"modal"},i("div",{class:"header"},i("p",{class:"title"},"Filtern"),i("div",{class:"close",onClick:this.handleClose.bind(this)},i("span",{class:"icon"}))),i("div",{class:"body"},i("slot",null))))}};a.style='*{margin:0;padding:0;box-sizing:border-box}.coop-modal{position:fixed;left:0;top:0;width:100%;height:auto;overflow:auto;background:rgba(0, 0, 0, 0.6);visibility:hidden;z-index:10}@media (min-width: 600px){.coop-modal{height:100%;padding-top:100px;padding-bottom:100px}}.coop-modal .modal{background-color:var(--white);margin:auto;width:100%;position:relative}@media (min-width: 600px){.coop-modal .modal{width:80%}}.coop-modal .modal .header{height:55px;background-color:var(--brand-primary);display:flex;justify-content:center;align-items:center}@media (min-width: 600px){.coop-modal .modal .header{background-color:var(--white)}}.coop-modal .modal .header .title{color:var(--white);font-family:var(--font-secondary-regular);font-size:16px;line-height:20px}@media (min-width: 600px){.coop-modal .modal .header .title{display:none}}.coop-modal .modal .header .close{cursor:pointer}.coop-modal .modal .header .close .icon:before{font-family:var(--iconfont-dc);content:"\\e806";font-weight:800;color:var(--white);position:absolute;font-size:25px;right:15px;top:15px}@media (min-width: 600px){.coop-modal .modal .header .close .icon:before{right:30px;top:30px;color:var(--brand-primary)}}.coop-modal .modal .body{padding:30px}.is-open{opacity:1;visibility:visible}';export{a as coop_modal}