System.register(["./index-legacy-DYH_7ukq.js","./_plugin-vue_export-helper-legacy-DgAO6S8O.js"],(function(e,o){"use strict";var t,a,n,r,i,l,d,s,c,p,f;return{setters:[e=>{t=e.d,a=e.I,n=e.a,r=e.c,i=e.w,l=e.r,d=e.o,s=e.b,c=e.e,p=e.g},e=>{f=e._}],execute:function(){var o=document.createElement("style");o.textContent=".sign-up-link[data-v-9bfe3127]{color:#6c3f24;font-weight:600;text-decoration:underline}.forgot-password-link[data-v-9bfe3127]:hover,.sign-up-link[data-v-9bfe3127]:hover{text-decoration:underline}.form-control[data-v-9bfe3127]{display:flex;align-items:center;padding-left:10px;padding-right:10px;height:50px}.country-code[data-v-9bfe3127]{width:70px;border:none;background-color:transparent;margin-right:10px;font-size:1rem}.phone-input[data-v-9bfe3127]{flex-grow:1;border:none;background-color:transparent;font-size:1rem;padding-left:5px}@media (max-width: 576px){.country-code[data-v-9bfe3127]{width:60px}.phone-input[data-v-9bfe3127]{font-size:.9rem}.gender .option[data-v-9bfe3127]{width:60px}}.form-control input[data-v-9bfe3127],.form-control select[data-v-9bfe3127]{border-radius:50px}.dropdown-wrapper[data-v-9bfe3127]{position:relative}.dropdown-icon[data-v-9bfe3127]{top:50%;right:10px;transform:translateY(-50%);pointer-events:none;color:#6c757d}.welcome-text[data-v-9bfe3127]{margin-bottom:2rem;font-size:1rem;position:absolute;top:120px;left:5px;padding:5px}.edit-icon[data-v-9bfe3127]{position:absolute;bottom:0;right:0;background-color:#6c3f24;color:#fff;border:none;border-radius:50%;cursor:pointer;width:40px;height:40px}.icon[data-v-9bfe3127]{font-size:18px;color:#fff;position:absolute;right:25%;top:30%}.edit-icon[data-v-9bfe3127]:hover{background-color:#5a3320}.container[data-v-9bfe3127]{text-align:center;font-family:Arial,sans-serif;display:fixed;margin-top:200px}h2[data-v-9bfe3127]{color:#3e2723;font-size:1.8rem;position:absolute;top:100px;left:60px}label[data-v-9bfe3127]{font-size:18px;margin-left:8px;display:flex;align-items:center}.form-label[data-v-9bfe3127]{font-size:.9rem;color:#6d4c41}.form-control[data-v-9bfe3127]{border-radius:50px;padding:.8rem;border:1px solid #d7ccc8}.btn-primary[data-v-9bfe3127]{background-color:#6c3f24;border:none;border-radius:50px;padding:.8rem;font-weight:700;font-size:1rem;color:#fff}.btn-primary[data-v-9bfe3127]:hover{background-color:#5a3320}.user[data-v-9bfe3127]{position:relative;display:inline-block;padding:10px;border-radius:50%;border:1px #292929;width:150px;height:150px;display:flex;align-items:center;justify-content:center;background-color:#dadada;margin:70px auto 0;font-size:80px;color:#757575}.button[data-v-9bfe3127]{border-radius:50px;border-color:#6c757d;width:50px;height:50px;cursor:pointer;color:#6c757d;font-size:1.2rem;position:absolute;top:10px;left:10px}@media (max-width: 450px){.form-container[data-v-9bfe3127]{padding:1rem;margin:auto}}\n",document.head.appendChild(o);const b=t({name:"NewPasswordScreen",components:{IonPage:a,IonContent:n},methods:{async back(){this.$router.push("/signin")},async location(){this.$router.push("/location")}}}),u={class:"vh-100 d-flex align-items-center justify-content-center"},m={class:"container mb-4 p-4"},x={class:"form-container mx-auto"},g={class:"text-center mt-4"};e("default",f(b,[["render",function(e,o,t,a,n,f){const b=l("ion-content"),v=l("ion-page");return d(),r(v,null,{default:i((()=>[s(b,{fullscreen:!0},{default:i((()=>[c("section",u,[c("button",{class:"button mb-4 mt-4 mx-2",button:!0,onClick:o[0]||(o[0]=o=>e.back())},o[2]||(o[2]=[c("i",{class:"fa-solid fa-arrow-left"},null,-1)])),c("div",m,[c("div",x,[o[8]||(o[8]=c("h2",{class:"text-center fw-bold"},"Complete Your Profile",-1)),o[9]||(o[9]=c("p",{class:"text-center welcome-text p-4"}," Don't worry, only you can see your personal data.No one else will be able to see it. ",-1)),o[10]||(o[10]=c("div",{class:"user mb-3"},[c("i",{class:"fa-solid fa-user"}),c("button",{class:"edit-icon"},[c("i",{class:"fa-solid fa-pen icon"})])],-1)),c("form",null,[o[4]||(o[4]=c("div",{class:"mb-3"},[c("label",{class:"form-label"},"Name"),c("input",{type:"text",class:"form-control",placeholder:"John Doe",required:""})],-1)),o[5]||(o[5]=c("div",{class:"mb-3"},[c("label",{class:"form-label"},"Enter Phone Number"),c("div",{class:"form-control d-flex align-items-center"},[c("select",{class:"country-code",required:""},[c("option",{value:"+1"},"+1"),c("option",{value:"+63"},"+63")]),c("input",{type:"text",class:"phone-input",placeholder:"Phone number",required:""})])],-1)),o[6]||(o[6]=c("div",{class:"mb-3"},[c("label",{class:"form-label"},"Gender"),c("div",{class:"dropdown-wrapper position-relative"},[c("select",{class:"form-select form-control gender"},[c("option",{value:""},"Select"),c("option",{value:"Male"},"Male"),c("option",{value:"Female"},"Female")])])],-1)),o[7]||(o[7]=c("button",{type:"submit",class:"btn btn-primary w-100 mt-2"}," Complete Profile ",-1)),c("p",g,[o[3]||(o[3]=p(" Would you like to display your location? ")),c("a",{button:!0,onClick:o[1]||(o[1]=o=>e.location()),class:"sign-up-link"}," View Location ")])])])])])])),_:1})])),_:1})}],["__scopeId","data-v-9bfe3127"]]))}}}));
