import{r as n,h as a}from"./p-9e729b80.js";let e=class{constructor(a){n(this,a),this.type="zahlkarte",this.logo=null,this.name="Lorem ipsum card",this.amount="0.00",this.currency="Saldo in CHF",this.numberTitle="Kartennummer",this.number="XXXX XXXX XXXX XXXX"}render(){return a("div",{class:`container ${this.type}`},a("div",{class:"top"},null!==this.logo?a("div",{class:"logo"},a("img",{src:`${this.logo}`,alt:`${this.type}`})):a("span",{class:"name"},this.name),a("div",{class:"amount"},a("p",{class:"figure"},this.amount),a("p",{class:"currency"},this.currency))),a("div",{class:"number"},a("p",{class:"title"},this.numberTitle),a("p",null,this.number)))}};e.style='*{margin:0;padding:0;box-sizing:border-box}:host{display:block;font-family:"CoopRegular", sans-serif}p{margin:0px;padding:0px}.container{height:100%;min-height:200px;width:335px;max-width:100%;display:flex;flex-direction:row;flex-wrap:wrap;justify-content:space-between;align-content:space-between;color:white;border-radius:10px;box-shadow:0px 5px 5px 0px #ebebeb;background:linear-gradient(45deg, #767676 0%, #AFAFAF 100%)}.container .top{display:flex;justify-content:space-between;width:100%;gap:20px;margin-top:20px;margin-right:20px}.container .top .logo{height:44px;padding:0px 10px;background-color:white;border-radius:0px 5px 5px 0px}.container .top .logo img{margin:0px;object-fit:cover;height:100%}.container .top .name{display:block;font-family:"CoopBold", sans-serif;font-size:22px;line-height:25px;margin-top:4px;margin-left:20px;font-style:italic}.container .top .amount{text-align:right;margin-top:4px}.container .top .amount .figure{font-size:23px;line-height:25px}.container .top .amount .currency{font-size:11px;white-space:nowrap}.container .number{margin-bottom:16px;margin-left:20px;line-height:20px;font-size:11px;min-width:80%}.container.coop{background:linear-gradient(45deg, darkorange 0%, #ff9f2a 100%)}.container.supercard{background:linear-gradient(45deg, #0069b4 0%, #2488d0 100%)}.container.zahlkarte{background:linear-gradient(45deg, #1a9ad6 0%, #41bdf7 100%)}.container.interdiscount{background:linear-gradient(45deg, #c72003 0%, #f35d44 100%)}.container.fust{background:linear-gradient(45deg, #e98006 0%, #ffb35a 100%)}.container.city{background:linear-gradient(45deg, #9d9b9b 0%, #bababa 100%)}.container.christ{background:linear-gradient(45deg, #a79579 0%, #d7c19e 100%)}.container.bauundhobby{background:linear-gradient(45deg, #01662A 0%, #31A761 100%)}.container.pronto{background:linear-gradient(45deg, #a2c82e 0%, #c1e063 100%)}.container.importparf{background:linear-gradient(45deg, #272727 0%, #636262 100%)}.container.restaurant{background:linear-gradient(45deg, #01662a 0%, #31a761 100%)}.container.vitality{background:linear-gradient(45deg, #018c51 0%, #2bc584 100%)}.container.livique{background:linear-gradient(45deg, #5e1d39 0%, #a4446d 100%)}.container.fooby{background:linear-gradient(45deg, #000000 0%, #4D4D4D 100%)}.container.karma{background:linear-gradient(45deg, #F6A519 0%, #FDCC79 100%)}.container.sapori{background:linear-gradient(45deg, #7F1917 0%, #C65654 100%)}.container.microspot{background:linear-gradient(45deg, #009C62 0%, #0CD489 100%)}.container.perpiedi{background:linear-gradient(45deg, #62A61D 0%, #86D537 100%)}.container.coop-ch{background:linear-gradient(45deg, #FF8C00 0%, #FF9F2A 100%)}';export{e as coop_card}