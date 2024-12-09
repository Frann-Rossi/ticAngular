import{a as re}from"./chunk-JZL4YVCW.js";import{Ba as G,Da as be,Ha as ne,Ja as ie,K as P,Ka as R,L as k,M as Ce,N as K,Oa as c,P as _,Pa as u,Qa as T,Ra as E,Wa as f,X as J,Y as Ve,_a as j,a as l,aa as M,b as d,ea as Q,fb as w,g as ge,gb as p,j as _e,o as ve,oa as C,pa as a,ra as ee,ta as F,u as ye,wa as De,xa as te,ya as h,za as v}from"./chunk-ULYDPZSS.js";var xe=(()=>{class n{_renderer;_elementRef;onChange=t=>{};onTouched=()=>{};constructor(t,i){this._renderer=t,this._elementRef=i}setProperty(t,i){this._renderer.setProperty(this._elementRef.nativeElement,t,i)}registerOnTouched(t){this.onTouched=t}registerOnChange(t){this.onChange=t}setDisabledState(t){this.setProperty("disabled",t)}static \u0275fac=function(i){return new(i||n)(a(ee),a(Q))};static \u0275dir=h({type:n})}return n})(),at=(()=>{class n extends xe{static \u0275fac=(()=>{let t;return function(r){return(t||(t=Ve(n)))(r||n)}})();static \u0275dir=h({type:n,features:[v]})}return n})(),Oe=new _("");var lt={provide:Oe,useExisting:k(()=>X),multi:!0};function ut(){let n=re()?re().getUserAgent():"";return/android (\d+)/.test(n.toLowerCase())}var dt=new _(""),X=(()=>{class n extends xe{_compositionMode;_composing=!1;constructor(t,i,r){super(t,i),this._compositionMode=r,this._compositionMode==null&&(this._compositionMode=!ut())}writeValue(t){let i=t??"";this.setProperty("value",i)}_handleInput(t){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(t)}_compositionStart(){this._composing=!0}_compositionEnd(t){this._composing=!1,this._compositionMode&&this.onChange(t)}static \u0275fac=function(i){return new(i||n)(a(ee),a(Q),a(dt,8))};static \u0275dir=h({type:n,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(i,r){i&1&&E("input",function(s){return r._handleInput(s.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(s){return r._compositionEnd(s.target.value)})},standalone:!1,features:[j([lt]),v]})}return n})();function m(n){return n==null||(typeof n=="string"||Array.isArray(n))&&n.length===0}function Pe(n){return n!=null&&typeof n.length=="number"}var ke=new _(""),Ge=new _(""),ct=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,y=class{static min(e){return ht(e)}static max(e){return ft(e)}static required(e){return pt(e)}static requiredTrue(e){return mt(e)}static email(e){return gt(e)}static minLength(e){return _t(e)}static maxLength(e){return vt(e)}static pattern(e){return yt(e)}static nullValidator(e){return Re(e)}static compose(e){return Le(e)}static composeAsync(e){return We(e)}};function ht(n){return e=>{if(m(e.value)||m(n))return null;let t=parseFloat(e.value);return!isNaN(t)&&t<n?{min:{min:n,actual:e.value}}:null}}function ft(n){return e=>{if(m(e.value)||m(n))return null;let t=parseFloat(e.value);return!isNaN(t)&&t>n?{max:{max:n,actual:e.value}}:null}}function pt(n){return m(n.value)?{required:!0}:null}function mt(n){return n.value===!0?null:{required:!0}}function gt(n){return m(n.value)||ct.test(n.value)?null:{email:!0}}function _t(n){return e=>m(e.value)||!Pe(e.value)?null:e.value.length<n?{minlength:{requiredLength:n,actualLength:e.value.length}}:null}function vt(n){return e=>Pe(e.value)&&e.value.length>n?{maxlength:{requiredLength:n,actualLength:e.value.length}}:null}function yt(n){if(!n)return Re;let e,t;return typeof n=="string"?(t="",n.charAt(0)!=="^"&&(t+="^"),t+=n,n.charAt(n.length-1)!=="$"&&(t+="$"),e=new RegExp(t)):(t=n.toString(),e=n),i=>{if(m(i.value))return null;let r=i.value;return e.test(r)?null:{pattern:{requiredPattern:t,actualValue:r}}}}function Re(n){return null}function Te(n){return n!=null}function je(n){return be(n)?_e(n):n}function Be(n){let e={};return n.forEach(t=>{e=t!=null?l(l({},e),t):e}),Object.keys(e).length===0?null:e}function Ue(n,e){return e.map(t=>t(n))}function Ct(n){return!n.validate}function He(n){return n.map(e=>Ct(e)?e:t=>e.validate(t))}function Le(n){if(!n)return null;let e=n.filter(Te);return e.length==0?null:function(t){return Be(Ue(t,e))}}function $e(n){return n!=null?Le(He(n)):null}function We(n){if(!n)return null;let e=n.filter(Te);return e.length==0?null:function(t){let i=Ue(t,e).map(je);return ye(i).pipe(ve(Be))}}function qe(n){return n!=null?We(He(n)):null}function Ae(n,e){return n===null?[e]:Array.isArray(n)?[...n,e]:[n,e]}function ze(n){return n._rawValidators}function Ze(n){return n._rawAsyncValidators}function oe(n){return n?Array.isArray(n)?n:[n]:[]}function H(n,e){return Array.isArray(n)?n.includes(e):n===e}function Me(n,e){let t=oe(e);return oe(n).forEach(r=>{H(t,r)||t.push(r)}),t}function Fe(n,e){return oe(e).filter(t=>!H(n,t))}var L=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=$e(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=qe(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,t){return this.control?this.control.hasError(e,t):!1}getError(e,t){return this.control?this.control.getError(e,t):null}},b=class extends L{name;get formDirective(){return null}get path(){return null}},O=class extends L{_parent=null;name=null;valueAccessor=null},$=class{_cd;constructor(e){this._cd=e}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}},Vt={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},hn=d(l({},Vt),{"[class.ng-submitted]":"isSubmitted"}),Xe=(()=>{class n extends ${constructor(t){super(t)}static \u0275fac=function(i){return new(i||n)(a(O,2))};static \u0275dir=h({type:n,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(i,r){i&2&&ie("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)},standalone:!1,features:[v]})}return n})(),Ye=(()=>{class n extends ${constructor(t){super(t)}static \u0275fac=function(i){return new(i||n)(a(b,10))};static \u0275dir=h({type:n,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(i,r){i&2&&ie("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)("ng-submitted",r.isSubmitted)},standalone:!1,features:[v]})}return n})();var S="VALID",B="INVALID",V="PENDING",I="DISABLED",g=class{},W=class extends g{value;source;constructor(e,t){super(),this.value=e,this.source=t}},N=class extends g{pristine;source;constructor(e,t){super(),this.pristine=e,this.source=t}},x=class extends g{touched;source;constructor(e,t){super(),this.touched=e,this.source=t}},D=class extends g{status;source;constructor(e,t){super(),this.status=e,this.source=t}},se=class extends g{source;constructor(e){super(),this.source=e}},ae=class extends g{source;constructor(e){super(),this.source=e}};function de(n){return(Y(n)?n.validators:n)||null}function Dt(n){return Array.isArray(n)?$e(n):n||null}function ce(n,e){return(Y(e)?e.asyncValidators:n)||null}function bt(n){return Array.isArray(n)?qe(n):n||null}function Y(n){return n!=null&&!Array.isArray(n)&&typeof n=="object"}function Ke(n,e,t){let i=n.controls;if(!(e?Object.keys(i):i).length)throw new P(1e3,"");if(!i[t])throw new P(1001,"")}function Je(n,e,t){n._forEachChild((i,r)=>{if(t[r]===void 0)throw new P(1002,"")})}var A=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(e,t){this._assignValidators(e),this._assignAsyncValidators(t)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get status(){return p(this.statusReactive)}set status(e){p(()=>this.statusReactive.set(e))}_status=w(()=>this.statusReactive());statusReactive=F(void 0);get valid(){return this.status===S}get invalid(){return this.status===B}get pending(){return this.status==V}get disabled(){return this.status===I}get enabled(){return this.status!==I}errors;get pristine(){return p(this.pristineReactive)}set pristine(e){p(()=>this.pristineReactive.set(e))}_pristine=w(()=>this.pristineReactive());pristineReactive=F(!0);get dirty(){return!this.pristine}get touched(){return p(this.touchedReactive)}set touched(e){p(()=>this.touchedReactive.set(e))}_touched=w(()=>this.touchedReactive());touchedReactive=F(!1);get untouched(){return!this.touched}_events=new ge;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(Me(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(Me(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(Fe(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(Fe(e,this._rawAsyncValidators))}hasValidator(e){return H(this._rawValidators,e)}hasAsyncValidator(e){return H(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){let t=this.touched===!1;this.touched=!0;let i=e.sourceControl??this;this._parent&&!e.onlySelf&&this._parent.markAsTouched(d(l({},e),{sourceControl:i})),t&&e.emitEvent!==!1&&this._events.next(new x(!0,i))}markAllAsTouched(e={}){this.markAsTouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:this}),this._forEachChild(t=>t.markAllAsTouched(e))}markAsUntouched(e={}){let t=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let i=e.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:i})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e,i),t&&e.emitEvent!==!1&&this._events.next(new x(!1,i))}markAsDirty(e={}){let t=this.pristine===!0;this.pristine=!1;let i=e.sourceControl??this;this._parent&&!e.onlySelf&&this._parent.markAsDirty(d(l({},e),{sourceControl:i})),t&&e.emitEvent!==!1&&this._events.next(new N(!1,i))}markAsPristine(e={}){let t=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let i=e.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:e.emitEvent})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e,i),t&&e.emitEvent!==!1&&this._events.next(new N(!0,i))}markAsPending(e={}){this.status=V;let t=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new D(this.status,t)),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.markAsPending(d(l({},e),{sourceControl:t}))}disable(e={}){let t=this._parentMarkedDirty(e.onlySelf);this.status=I,this.errors=null,this._forEachChild(r=>{r.disable(d(l({},e),{onlySelf:!0}))}),this._updateValue();let i=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new W(this.value,i)),this._events.next(new D(this.status,i)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(d(l({},e),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(e={}){let t=this._parentMarkedDirty(e.onlySelf);this.status=S,this._forEachChild(i=>{i.enable(d(l({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(d(l({},e),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(e,t){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine({},t),this._parent._updateTouched({},t))}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let i=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===S||this.status===V)&&this._runAsyncValidator(i,e.emitEvent)}let t=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new W(this.value,t)),this._events.next(new D(this.status,t)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(d(l({},e),{sourceControl:t}))}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(t=>t._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?I:S}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e,t){if(this.asyncValidator){this.status=V,this._hasOwnPendingAsyncValidator={emitEvent:t!==!1};let i=je(this.asyncValidator(this));this._asyncValidationSubscription=i.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:t,shouldHaveEmitted:e})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let e=this._hasOwnPendingAsyncValidator?.emitEvent??!1;return this._hasOwnPendingAsyncValidator=null,e}return!1}setErrors(e,t={}){this.errors=e,this._updateControlsErrors(t.emitEvent!==!1,this,t.shouldHaveEmitted)}get(e){let t=e;return t==null||(Array.isArray(t)||(t=t.split(".")),t.length===0)?null:t.reduce((i,r)=>i&&i._find(r),this)}getError(e,t){let i=t?this.get(t):this;return i&&i.errors?i.errors[e]:null}hasError(e,t){return!!this.getError(e,t)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e,t,i){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),(e||i)&&this._events.next(new D(this.status,t)),this._parent&&this._parent._updateControlsErrors(e,t,i)}_initObservables(){this.valueChanges=new M,this.statusChanges=new M}_calculateStatus(){return this._allControlsDisabled()?I:this.errors?B:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(V)?V:this._anyControlsHaveStatus(B)?B:S}_anyControlsHaveStatus(e){return this._anyControls(t=>t.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e,t){let i=!this._anyControlsDirty(),r=this.pristine!==i;this.pristine=i,this._parent&&!e.onlySelf&&this._parent._updatePristine(e,t),r&&this._events.next(new N(this.pristine,t))}_updateTouched(e={},t){this.touched=this._anyControlsTouched(),this._events.next(new x(this.touched,t)),this._parent&&!e.onlySelf&&this._parent._updateTouched(e,t)}_onDisabledChange=[];_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){Y(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){let t=this._parent&&this._parent.dirty;return!e&&!!t&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=Dt(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=bt(this._rawAsyncValidators)}},q=class extends A{constructor(e,t,i){super(de(t),ce(i,t)),this.controls=e,this._initObservables(),this._setUpdateStrategy(t),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;registerControl(e,t){return this.controls[e]?this.controls[e]:(this.controls[e]=t,t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange),t)}addControl(e,t,i={}){this.registerControl(e,t),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}removeControl(e,t={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}setControl(e,t,i={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],t&&this.registerControl(e,t),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}contains(e){return this.controls.hasOwnProperty(e)&&this.controls[e].enabled}setValue(e,t={}){Je(this,!0,e),Object.keys(e).forEach(i=>{Ke(this,!0,i),this.controls[i].setValue(e[i],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t)}patchValue(e,t={}){e!=null&&(Object.keys(e).forEach(i=>{let r=this.controls[i];r&&r.patchValue(e[i],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t))}reset(e={},t={}){this._forEachChild((i,r)=>{i.reset(e?e[r]:null,{onlySelf:!0,emitEvent:t.emitEvent})}),this._updatePristine(t,this),this._updateTouched(t,this),this.updateValueAndValidity(t)}getRawValue(){return this._reduceChildren({},(e,t,i)=>(e[i]=t.getRawValue(),e))}_syncPendingControls(){let e=this._reduceChildren(!1,(t,i)=>i._syncPendingControls()?!0:t);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){Object.keys(this.controls).forEach(t=>{let i=this.controls[t];i&&e(i,t)})}_setUpControls(){this._forEachChild(e=>{e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(e){for(let[t,i]of Object.entries(this.controls))if(this.contains(t)&&e(i))return!0;return!1}_reduceValue(){let e={};return this._reduceChildren(e,(t,i,r)=>((i.enabled||this.disabled)&&(t[r]=i.value),t))}_reduceChildren(e,t){let i=e;return this._forEachChild((r,o)=>{i=t(i,r,o)}),i}_allControlsDisabled(){for(let e of Object.keys(this.controls))if(this.controls[e].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(e){return this.controls.hasOwnProperty(e)?this.controls[e]:null}};var le=class extends q{};var Qe=new _("CallSetDisabledState",{providedIn:"root",factory:()=>he}),he="always";function At(n,e){return[...e.path,n]}function Ee(n,e,t=he){fe(n,e),e.valueAccessor.writeValue(n.value),(n.disabled||t==="always")&&e.valueAccessor.setDisabledState?.(n.disabled),Ft(n,e),wt(n,e),Et(n,e),Mt(n,e)}function we(n,e,t=!0){let i=()=>{};e.valueAccessor&&(e.valueAccessor.registerOnChange(i),e.valueAccessor.registerOnTouched(i)),Z(n,e),n&&(e._invokeOnDestroyCallbacks(),n._registerOnCollectionChange(()=>{}))}function z(n,e){n.forEach(t=>{t.registerOnValidatorChange&&t.registerOnValidatorChange(e)})}function Mt(n,e){if(e.valueAccessor.setDisabledState){let t=i=>{e.valueAccessor.setDisabledState(i)};n.registerOnDisabledChange(t),e._registerOnDestroy(()=>{n._unregisterOnDisabledChange(t)})}}function fe(n,e){let t=ze(n);e.validator!==null?n.setValidators(Ae(t,e.validator)):typeof t=="function"&&n.setValidators([t]);let i=Ze(n);e.asyncValidator!==null?n.setAsyncValidators(Ae(i,e.asyncValidator)):typeof i=="function"&&n.setAsyncValidators([i]);let r=()=>n.updateValueAndValidity();z(e._rawValidators,r),z(e._rawAsyncValidators,r)}function Z(n,e){let t=!1;if(n!==null){if(e.validator!==null){let r=ze(n);if(Array.isArray(r)&&r.length>0){let o=r.filter(s=>s!==e.validator);o.length!==r.length&&(t=!0,n.setValidators(o))}}if(e.asyncValidator!==null){let r=Ze(n);if(Array.isArray(r)&&r.length>0){let o=r.filter(s=>s!==e.asyncValidator);o.length!==r.length&&(t=!0,n.setAsyncValidators(o))}}}let i=()=>{};return z(e._rawValidators,i),z(e._rawAsyncValidators,i),t}function Ft(n,e){e.valueAccessor.registerOnChange(t=>{n._pendingValue=t,n._pendingChange=!0,n._pendingDirty=!0,n.updateOn==="change"&&et(n,e)})}function Et(n,e){e.valueAccessor.registerOnTouched(()=>{n._pendingTouched=!0,n.updateOn==="blur"&&n._pendingChange&&et(n,e),n.updateOn!=="submit"&&n.markAsTouched()})}function et(n,e){n._pendingDirty&&n.markAsDirty(),n.setValue(n._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(n._pendingValue),n._pendingChange=!1}function wt(n,e){let t=(i,r)=>{e.valueAccessor.writeValue(i),r&&e.viewToModelUpdate(i)};n.registerOnChange(t),e._registerOnDestroy(()=>{n._unregisterOnChange(t)})}function St(n,e){n==null,fe(n,e)}function It(n,e){return Z(n,e)}function Nt(n,e){if(!n.hasOwnProperty("model"))return!1;let t=n.model;return t.isFirstChange()?!0:!Object.is(e,t.currentValue)}function xt(n){return Object.getPrototypeOf(n.constructor)===at}function Ot(n,e){n._syncPendingControls(),e.forEach(t=>{let i=t.control;i.updateOn==="submit"&&i._pendingChange&&(t.viewToModelUpdate(i._pendingValue),i._pendingChange=!1)})}function Pt(n,e){if(!e)return null;Array.isArray(e);let t,i,r;return e.forEach(o=>{o.constructor===X?t=o:xt(o)?i=o:r=o}),r||i||t||null}function kt(n,e){let t=n.indexOf(e);t>-1&&n.splice(t,1)}function Se(n,e){let t=n.indexOf(e);t>-1&&n.splice(t,1)}function Ie(n){return typeof n=="object"&&n!==null&&Object.keys(n).length===2&&"value"in n&&"disabled"in n}var U=class extends A{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(e=null,t,i){super(de(t),ce(i,t)),this._applyFormState(e),this._setUpdateStrategy(t),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),Y(t)&&(t.nonNullable||t.initialValueIsDefault)&&(Ie(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,t={}){this.value=this._pendingValue=e,this._onChange.length&&t.emitModelToViewChange!==!1&&this._onChange.forEach(i=>i(this.value,t.emitViewToModelChange!==!1)),this.updateValueAndValidity(t)}patchValue(e,t={}){this.setValue(e,t)}reset(e=this.defaultValue,t={}){this._applyFormState(e),this.markAsPristine(t),this.markAsUntouched(t),this.setValue(this.value,t),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){Se(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){Se(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){Ie(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var Gt=n=>n instanceof U;var tt=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275dir=h({type:n,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""],standalone:!1})}return n})();var nt=new _("");var Rt={provide:b,useExisting:k(()=>pe)},pe=(()=>{class n extends b{callSetDisabledState;get submitted(){return p(this._submittedReactive)}set submitted(t){this._submittedReactive.set(t)}_submitted=w(()=>this._submittedReactive());_submittedReactive=F(!1);_oldForm;_onCollectionChange=()=>this._updateDomValue();directives=[];form=null;ngSubmit=new M;constructor(t,i,r){super(),this.callSetDisabledState=r,this._setValidators(t),this._setAsyncValidators(i)}ngOnChanges(t){this._checkFormPresent(),t.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}ngOnDestroy(){this.form&&(Z(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get control(){return this.form}get path(){return[]}addControl(t){let i=this.form.get(t.path);return Ee(i,t,this.callSetDisabledState),i.updateValueAndValidity({emitEvent:!1}),this.directives.push(t),i}getControl(t){return this.form.get(t.path)}removeControl(t){we(t.control||null,t,!1),kt(this.directives,t)}addFormGroup(t){this._setUpFormContainer(t)}removeFormGroup(t){this._cleanUpFormContainer(t)}getFormGroup(t){return this.form.get(t.path)}addFormArray(t){this._setUpFormContainer(t)}removeFormArray(t){this._cleanUpFormContainer(t)}getFormArray(t){return this.form.get(t.path)}updateModel(t,i){this.form.get(t.path).setValue(i)}onSubmit(t){return this._submittedReactive.set(!0),Ot(this.form,this.directives),this.ngSubmit.emit(t),this.form._events.next(new se(this.control)),t?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(t=void 0){this.form.reset(t),this._submittedReactive.set(!1),this.form._events.next(new ae(this.form))}_updateDomValue(){this.directives.forEach(t=>{let i=t.control,r=this.form.get(t.path);i!==r&&(we(i||null,t),Gt(r)&&(Ee(r,t,this.callSetDisabledState),t.control=r))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(t){let i=this.form.get(t.path);St(i,t),i.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(t){if(this.form){let i=this.form.get(t.path);i&&It(i,t)&&i.updateValueAndValidity({emitEvent:!1})}}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm&&this._oldForm._registerOnCollectionChange(()=>{})}_updateValidators(){fe(this.form,this),this._oldForm&&Z(this._oldForm,this)}_checkFormPresent(){this.form}static \u0275fac=function(i){return new(i||n)(a(ke,10),a(Ge,10),a(Qe,8))};static \u0275dir=h({type:n,selectors:[["","formGroup",""]],hostBindings:function(i,r){i&1&&E("submit",function(s){return r.onSubmit(s)})("reset",function(){return r.onReset()})},inputs:{form:[0,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[j([Rt]),v,J]})}return n})();var Tt={provide:O,useExisting:k(()=>me)},me=(()=>{class n extends O{_ngModelWarningConfig;_added=!1;viewModel;control;name=null;set isDisabled(t){}model;update=new M;static _ngModelWarningSentOnce=!1;_ngModelWarningSent=!1;constructor(t,i,r,o,s){super(),this._ngModelWarningConfig=s,this._parent=t,this._setValidators(i),this._setAsyncValidators(r),this.valueAccessor=Pt(this,o)}ngOnChanges(t){this._added||this._setUpControl(),Nt(t,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}get path(){return At(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_checkParentType(){}_setUpControl(){this._checkParentType(),this.control=this.formDirective.addControl(this),this._added=!0}static \u0275fac=function(i){return new(i||n)(a(b,13),a(ke,10),a(Ge,10),a(Oe,10),a(nt,8))};static \u0275dir=h({type:n,selectors:[["","formControlName",""]],inputs:{name:[0,"formControlName","name"],isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"]},outputs:{update:"ngModelChange"},standalone:!1,features:[j([Tt]),v,J]})}return n})();var jt=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=te({type:n});static \u0275inj=K({})}return n})(),ue=class extends A{constructor(e,t,i){super(de(t),ce(i,t)),this.controls=e,this._initObservables(),this._setUpdateStrategy(t),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;at(e){return this.controls[this._adjustIndex(e)]}push(e,t={}){this.controls.push(e),this._registerControl(e),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}insert(e,t,i={}){this.controls.splice(e,0,t),this._registerControl(t),this.updateValueAndValidity({emitEvent:i.emitEvent})}removeAt(e,t={}){let i=this._adjustIndex(e);i<0&&(i=0),this.controls[i]&&this.controls[i]._registerOnCollectionChange(()=>{}),this.controls.splice(i,1),this.updateValueAndValidity({emitEvent:t.emitEvent})}setControl(e,t,i={}){let r=this._adjustIndex(e);r<0&&(r=0),this.controls[r]&&this.controls[r]._registerOnCollectionChange(()=>{}),this.controls.splice(r,1),t&&(this.controls.splice(r,0,t),this._registerControl(t)),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}get length(){return this.controls.length}setValue(e,t={}){Je(this,!1,e),e.forEach((i,r)=>{Ke(this,!1,r),this.at(r).setValue(i,{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t)}patchValue(e,t={}){e!=null&&(e.forEach((i,r)=>{this.at(r)&&this.at(r).patchValue(i,{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t))}reset(e=[],t={}){this._forEachChild((i,r)=>{i.reset(e[r],{onlySelf:!0,emitEvent:t.emitEvent})}),this._updatePristine(t,this),this._updateTouched(t,this),this.updateValueAndValidity(t)}getRawValue(){return this.controls.map(e=>e.getRawValue())}clear(e={}){this.controls.length<1||(this._forEachChild(t=>t._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity({emitEvent:e.emitEvent}))}_adjustIndex(e){return e<0?e+this.length:e}_syncPendingControls(){let e=this.controls.reduce((t,i)=>i._syncPendingControls()?!0:t,!1);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){this.controls.forEach((t,i)=>{e(t,i)})}_updateValue(){this.value=this.controls.filter(e=>e.enabled||this.disabled).map(e=>e.value)}_anyControls(e){return this.controls.some(t=>t.enabled&&e(t))}_setUpControls(){this._forEachChild(e=>this._registerControl(e))}_allControlsDisabled(){for(let e of this.controls)if(e.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(e){e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)}_find(e){return this.at(e)??null}};function Ne(n){return!!n&&(n.asyncValidators!==void 0||n.validators!==void 0||n.updateOn!==void 0)}var it=(()=>{class n{useNonNullable=!1;get nonNullable(){let t=new n;return t.useNonNullable=!0,t}group(t,i=null){let r=this._reduceControls(t),o={};return Ne(i)?o=i:i!==null&&(o.validators=i.validator,o.asyncValidators=i.asyncValidator),new q(r,o)}record(t,i=null){let r=this._reduceControls(t);return new le(r,i)}control(t,i,r){let o={};return this.useNonNullable?(Ne(i)?o=i:(o.validators=i,o.asyncValidators=r),new U(t,d(l({},o),{nonNullable:!0}))):new U(t,i,r)}array(t,i,r){let o=t.map(s=>this._createControl(s));return new ue(o,i,r)}_reduceControls(t){let i={};return Object.keys(t).forEach(r=>{i[r]=this._createControl(t[r])}),i}_createControl(t){if(t instanceof U)return t;if(t instanceof A)return t;if(Array.isArray(t)){let i=t[0],r=t.length>1?t[1]:null,o=t.length>2?t[2]:null;return this.control(i,r,o)}else return this.control(t)}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Ce({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var rt=(()=>{class n{static withConfig(t){return{ngModule:n,providers:[{provide:nt,useValue:t.warnOnNgModelWithFormControl??"always"},{provide:Qe,useValue:t.callSetDisabledState??he}]}}static \u0275fac=function(i){return new(i||n)};static \u0275mod=te({type:n});static \u0275inj=K({imports:[jt]})}return n})();function Ut(n,e){n&1&&(c(0,"p",7),f(1,"Name is required"),u())}function Ht(n,e){n&1&&(c(0,"p",7),f(1,"Please enter a valid email"),u())}function Lt(n,e){n&1&&(c(0,"p",7),f(1,"Message is required"),u())}var ot=class n{constructor(e){this.fb=e;this.contactForm=this.fb.group({name:["",y.required],email:["",[y.required,y.email]],message:["",y.required]})}contactForm;onSubmit(){this.contactForm.valid&&(console.log(this.contactForm.value),this.contactForm.reset())}static \u0275fac=function(t){return new(t||n)(a(it))};static \u0275cmp=De({type:n,selectors:[["app-contact"]],decls:22,vars:5,consts:[[1,"container","mx-auto","px-4","py-12"],[1,"max-w-2xl","mx-auto"],[1,"text-3xl","font-bold","mb-8","text-center"],[1,"bg-white","p-6","rounded-lg","shadow",3,"ngSubmit","formGroup"],[1,"mb-4"],["for","name",1,"block","text-gray-700","font-medium","mb-2"],["type","text","id","name","formControlName","name",1,"w-full","px-3","py-2","border","rounded-lg","focus:outline-none","focus:ring-2","focus:ring-blue-500"],[1,"text-red-500","text-sm","mt-1"],["for","email",1,"block","text-gray-700","font-medium","mb-2"],["type","email","id","email","formControlName","email",1,"w-full","px-3","py-2","border","rounded-lg","focus:outline-none","focus:ring-2","focus:ring-blue-500"],["for","message",1,"block","text-gray-700","font-medium","mb-2"],["id","message","formControlName","message","rows","5",1,"w-full","px-3","py-2","border","rounded-lg","focus:outline-none","focus:ring-2","focus:ring-blue-500"],["type","submit",1,"w-full","bg-blue-500","text-white","py-2","px-4","rounded-lg","hover:bg-blue-600","disabled:bg-gray-400",3,"disabled"]],template:function(t,i){if(t&1&&(c(0,"section",0)(1,"div",1)(2,"h2",2),f(3,"Contact Me"),u(),c(4,"form",3),E("ngSubmit",function(){return i.onSubmit()}),c(5,"div",4)(6,"label",5),f(7,"Name"),u(),T(8,"input",6),G(9,Ut,2,0,"p",7),u(),c(10,"div",4)(11,"label",8),f(12,"Email"),u(),T(13,"input",9),G(14,Ht,2,0,"p",7),u(),c(15,"div",4)(16,"label",10),f(17,"Message"),u(),T(18,"textarea",11),G(19,Lt,2,0,"p",7),u(),c(20,"button",12),f(21," Send Message "),u()()()()),t&2){let r,o,s;C(4),ne("formGroup",i.contactForm),C(5),R((r=i.contactForm.get("name"))!=null&&r.invalid&&((r=i.contactForm.get("name"))!=null&&r.touched)?9:-1),C(5),R((o=i.contactForm.get("email"))!=null&&o.invalid&&((o=i.contactForm.get("email"))!=null&&o.touched)?14:-1),C(5),R((s=i.contactForm.get("message"))!=null&&s.invalid&&((s=i.contactForm.get("message"))!=null&&s.touched)?19:-1),C(),ne("disabled",i.contactForm.invalid)}},dependencies:[rt,tt,X,Xe,Ye,pe,me],encapsulation:2})};export{ot as ContactComponent};