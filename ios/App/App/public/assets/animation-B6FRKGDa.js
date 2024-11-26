import{k as me}from"./index-DWDgCv2y.js";/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */let $;const st=d=>{if($===void 0){const a=d.style.animationName!==void 0,p=d.style.webkitAnimationName!==void 0;$=!a&&p?"-webkit-":""}return $},j=(d,a,p)=>{const k=a.startsWith("animation")?st(d):"";d.style.setProperty(k+a,p)},L=(d=[],a)=>{if(a!==void 0){const p=Array.isArray(a)?a:[a];return[...d,...p]}return d},at=d=>{let a,p,k,O,U,z,i=[],V=[],M=[],y=!1,o,N={},q=[],B=[],G={},A=0,x=!1,P=!1,b,v,C,S=!0,W=!1,_=!0,n,T=!1;const ee=d,H=[],w=[],D=[],g=[],c=[],te=[],ne=[],re=[],se=[],oe=[],h=[],pe=typeof AnimationEffect=="function"||me!==void 0&&typeof me.AnimationEffect=="function",u=typeof Element=="function"&&typeof Element.prototype.animate=="function"&&pe,ie=()=>h,ge=e=>(c.forEach(t=>{t.destroy(e)}),ye(e),g.length=0,c.length=0,i.length=0,Ce(),y=!1,_=!0,n),ye=e=>{ae(),e&&Se()},Ee=()=>{x=!1,P=!1,_=!0,b=void 0,v=void 0,C=void 0,A=0,W=!1,S=!0,T=!1},Ae=()=>A!==0&&!T,fe=(e,t)=>{const r=t.findIndex(s=>s.c===e);r>-1&&t.splice(r,1)},be=(e,t)=>(D.push({c:e,o:t}),n),J=(e,t)=>((t!=null&&t.oneTimeCallback?w:H).push({c:e,o:t}),n),Ce=()=>(H.length=0,w.length=0,n),ae=()=>{u&&(h.forEach(e=>{e.cancel()}),h.length=0)},Se=()=>{te.forEach(e=>{e!=null&&e.parentNode&&e.parentNode.removeChild(e)}),te.length=0},Fe=e=>(ne.push(e),n),ke=e=>(re.push(e),n),ve=e=>(se.push(e),n),We=e=>(oe.push(e),n),_e=e=>(V=L(V,e),n),we=e=>(M=L(M,e),n),Re=(e={})=>(N=e,n),xe=(e=[])=>{for(const t of e)N[t]="";return n},Pe=e=>(q=L(q,e),n),Te=e=>(B=L(B,e),n),De=(e={})=>(G=e,n),Ke=(e=[])=>{for(const t of e)G[t]="";return n},Q=()=>U!==void 0?U:o?o.getFill():"both",K=()=>b!==void 0?b:z!==void 0?z:o?o.getDirection():"normal",X=()=>x?"linear":k!==void 0?k:o?o.getEasing():"linear",F=()=>P?0:v!==void 0?v:p!==void 0?p:o?o.getDuration():0,Y=()=>O!==void 0?O:o?o.getIterations():1,Z=()=>C!==void 0?C:a!==void 0?a:o?o.getDelay():0,Ie=()=>i,Le=e=>(z=e,l(!0),n),Oe=e=>(U=e,l(!0),n),Ue=e=>(a=e,l(!0),n),ze=e=>(k=e,l(!0),n),Ve=e=>(!u&&e===0&&(e=1),p=e,l(!0),n),Me=e=>(O=e,l(!0),n),Ne=e=>(o=e,n),qe=e=>{if(e!=null)if(e.nodeType===1)g.push(e);else if(e.length>=0)for(let t=0;t<e.length;t++)g.push(e[t]);else console.error("Invalid addElement value");return n},Be=e=>{if(e!=null)if(Array.isArray(e))for(const t of e)t.parent(n),c.push(t);else e.parent(n),c.push(e);return n},Ge=e=>{const t=i!==e;return i=e,t&&He(i),n},He=e=>{u&&ie().forEach(t=>{const r=t.effect;if(r.setKeyframes)r.setKeyframes(e);else{const s=new KeyframeEffect(r.target,e,r.getTiming());t.effect=s}})},Je=()=>{ne.forEach(s=>s()),re.forEach(s=>s());const e=V,t=M,r=N;g.forEach(s=>{const f=s.classList;e.forEach(m=>f.add(m)),t.forEach(m=>f.remove(m));for(const m in r)r.hasOwnProperty(m)&&j(s,m,r[m])})},Qe=()=>{se.forEach(f=>f()),oe.forEach(f=>f());const e=S?1:0,t=q,r=B,s=G;g.forEach(f=>{const m=f.classList;t.forEach(E=>m.add(E)),r.forEach(E=>m.remove(E));for(const E in s)s.hasOwnProperty(E)&&j(f,E,s[E])}),v=void 0,b=void 0,C=void 0,H.forEach(f=>f.c(e,n)),w.forEach(f=>f.c(e,n)),w.length=0,_=!0,S&&(W=!0),S=!0},I=()=>{A!==0&&(A--,A===0&&(Qe(),o&&o.animationFinish()))},Xe=()=>{g.forEach(e=>{const t=e.animate(i,{id:ee,delay:Z(),duration:F(),easing:X(),iterations:Y(),fill:Q(),direction:K()});t.pause(),h.push(t)}),h.length>0&&(h[0].onfinish=()=>{I()})},ce=()=>{Je(),i.length>0&&u&&Xe(),y=!0},R=e=>{e=Math.min(Math.max(e,0),.9999),u&&h.forEach(t=>{t.currentTime=t.effect.getComputedTiming().delay+F()*e,t.pause()})},le=e=>{h.forEach(t=>{t.effect.updateTiming({delay:Z(),duration:F(),easing:X(),iterations:Y(),fill:Q(),direction:K()})}),e!==void 0&&R(e)},l=(e=!1,t=!0,r)=>(e&&c.forEach(s=>{s.update(e,t,r)}),u&&le(r),n),Ye=(e=!1,t)=>(c.forEach(r=>{r.progressStart(e,t)}),ue(),x=e,y||ce(),l(!1,!0,t),n),Ze=e=>(c.forEach(t=>{t.progressStep(e)}),R(e),n),$e=(e,t,r)=>(x=!1,c.forEach(s=>{s.progressEnd(e,t,r)}),r!==void 0&&(v=r),W=!1,S=!0,e===0?(b=K()==="reverse"?"normal":"reverse",b==="reverse"&&(S=!1),u?(l(),R(1-t)):(C=(1-t)*F()*-1,l(!1,!1))):e===1&&(u?(l(),R(t)):(C=t*F()*-1,l(!1,!1))),e!==void 0&&!o&&de(),n),ue=()=>{y&&(u?h.forEach(e=>{e.pause()}):g.forEach(e=>{j(e,"animation-play-state","paused")}),T=!0)},je=()=>(c.forEach(e=>{e.pause()}),ue(),n),et=()=>{I()},tt=()=>{h.forEach(e=>{e.play()}),(i.length===0||g.length===0)&&I()},nt=()=>{u&&(R(0),le())},de=e=>new Promise(t=>{e!=null&&e.sync&&(P=!0,J(()=>P=!1,{oneTimeCallback:!0})),y||ce(),W&&(nt(),W=!1),_&&(A=c.length+1,_=!1);const r=()=>{fe(s,w),t()},s=()=>{fe(r,D),t()};J(s,{oneTimeCallback:!0}),be(r,{oneTimeCallback:!0}),c.forEach(f=>{f.play()}),u?tt():et(),T=!1}),rt=()=>{c.forEach(e=>{e.stop()}),y&&(ae(),y=!1),Ee(),D.forEach(e=>e.c(0,n)),D.length=0},he=(e,t)=>{const r=i[0];return r!==void 0&&(r.offset===void 0||r.offset===0)?r[e]=t:i=[{offset:0,[e]:t},...i],n};return n={parentAnimation:o,elements:g,childAnimations:c,id:ee,animationFinish:I,from:he,to:(e,t)=>{const r=i[i.length-1];return r!==void 0&&(r.offset===void 0||r.offset===1)?r[e]=t:i=[...i,{offset:1,[e]:t}],n},fromTo:(e,t,r)=>he(e,t).to(e,r),parent:Ne,play:de,pause:je,stop:rt,destroy:ge,keyframes:Ge,addAnimation:Be,addElement:qe,update:l,fill:Oe,direction:Le,iterations:Me,duration:Ve,easing:ze,delay:Ue,getWebAnimations:ie,getKeyframes:Ie,getFill:Q,getDirection:K,getDelay:Z,getIterations:Y,getEasing:X,getDuration:F,afterAddRead:ve,afterAddWrite:We,afterClearStyles:Ke,afterStyles:De,afterRemoveClass:Te,afterAddClass:Pe,beforeAddRead:Fe,beforeAddWrite:ke,beforeClearStyles:xe,beforeStyles:Re,beforeRemoveClass:we,beforeAddClass:_e,onFinish:J,isRunning:Ae,progressStart:Ye,progressStep:Ze,progressEnd:$e}};export{at as c};