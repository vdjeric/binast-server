if (self.CavalryLogger) { CavalryLogger.start_js(["1Rju8"]); }

__d('BoostedAutomatedAdsDialogUIStore',['BoostedAutomatedAdsDialogUIStoreFields','BoostedComponentBaseStore','BoostedComponentClientEvent','BoostedComponentConfigPayload','BoostedComponentDataState'],(function a(b,c,d,e,f,g){'use strict';var h,i,j=c('BoostedComponentConfigPayload').AUTOMATED_ADS_DIALOG_UI_STORE_DATA,k=c('BoostedAutomatedAdsDialogUIStoreFields').ACTIVE_AUTOMATED_ADS_DIALOG_TAB,l=c('BoostedAutomatedAdsDialogUIStoreFields').ACTIVE_AUTOMATED_ADS_INSIGHTS_GRAPHS_TAB,m=c('BoostedComponentClientEvent').DATA_LOADED,n=c('BoostedComponentClientEvent').INIT_DATA_LOADED,o=c('BoostedComponentClientEvent').UPDATE_AUTOMATED_ADS_DIALOG_TAB,p=c('BoostedComponentClientEvent').UPDATE_AUTOMATED_ADS_INSIGHTS_GRAPHS_TAB;h=babelHelpers.inherits(q,c('BoostedComponentBaseStore'));i=h&&h.prototype;function q(r){i.constructor.call(this,r);this.data={};this.$BoostedAutomatedAdsDialogUIStore1=r;this.$BoostedAutomatedAdsDialogUIStore2=r.getDispatcher();this.setState(c('BoostedComponentDataState').NOT_INITIALIZED);this.dispatchToken=this.$BoostedAutomatedAdsDialogUIStore2.register(function(s){var t=s.action;switch(t.actionType){case n:var u=t.data[j];if(u){this.setState(c('BoostedComponentDataState').INIT_DATA_LOADED);this.data=u;}break;case m:this.setState(c('BoostedComponentDataState').ACTIVE);break;case o:this.data[k]=s.action.data[k];break;case p:this.data[l]=s.action.data[l];break;default:return;}this.inform('change');}.bind(this));}q.prototype.getStorePayloadKey=function(){return j;};q.prototype.registerStoreEvents=function(){this.registerEvents([c('BoostedComponentClientEvent').DATA_LOADED],this.initializeStore.bind(this));};q.prototype.getActiveAutomatedAdsDialogTab=function(){return this.data[k];};q.prototype.getActiveAutomatedAdsInsightsGraphsTab=function(){return this.data[l];};f.exports=q;}),null);