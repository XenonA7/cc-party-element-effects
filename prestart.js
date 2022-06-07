sc.PartyMemberEntity.inject({
	updateElement: function () {
      if (this.model) {
        var a = this.getBestElement();
        if (this.model.currentElementMode != a) {
	        sc.combat.showModeChange(this, a);
	        sc.combat.showModeAura(this, a)
	      }
        a != this.model.currentElementMode && this.model.setElementMode(a);
      }
    }
});