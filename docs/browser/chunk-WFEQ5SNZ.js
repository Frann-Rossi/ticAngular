import{La as d,Ma as c,Na as s,Oa as i,Pa as a,Sa as x,Wa as o,Xa as p,Za as f,oa as r,wa as l}from"./chunk-ULYDPZSS.js";var u=(t,n)=>n.company;function y(t,n){if(t&1&&(i(0,"li",10),o(1),a()),t&2){let e=n.$implicit;r(),p(e)}}function E(t,n){if(t&1&&(i(0,"div",3)(1,"div",4)(2,"div")(3,"h3",5),o(4),a(),i(5,"p",6),o(6),a()(),i(7,"div",7),o(8),a()(),i(9,"p",8),o(10),a(),i(11,"ul",9),c(12,y,2,1,"li",10,d),a()()),t&2){let e=n.$implicit,m=x();r(4),p(e.position),r(2),p(e.company),r(2),f(" ",m.formatDate(e.startDate)," - ",e.endDate?m.formatDate(e.endDate):"Present"," "),r(2),p(e.description),r(2),s(e.achievements)}}var v=class t{experiences=[{company:"Tech Company",position:"Senior Developer",startDate:new Date("2020-01-01"),description:"Led development of various web applications",achievements:["Implemented new features that increased user engagement by 40%","Mentored junior developers and improved team productivity"]}];formatDate(n){return n.toLocaleDateString("en-US",{month:"short",year:"numeric"})}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=l({type:t,selectors:[["app-experience"]],decls:6,vars:0,consts:[[1,"container","mx-auto","px-4","py-12"],[1,"text-3xl","font-bold","mb-8","text-center"],[1,"max-w-3xl","mx-auto"],[1,"mb-8","bg-white","p-6","rounded-lg","shadow"],[1,"flex","justify-between","items-start","mb-4"],[1,"text-xl","font-semibold"],[1,"text-gray-600"],[1,"text-sm","text-gray-500"],[1,"text-gray-700","mb-4"],[1,"list-disc","list-inside","space-y-2"],[1,"text-gray-700"]],template:function(e,m){e&1&&(i(0,"section",0)(1,"h2",1),o(2,"Work Experience"),a(),i(3,"div",2),c(4,E,14,5,"div",3,u),a()()),e&2&&(r(4),s(m.experiences))},encapsulation:2})};export{v as ExperienceComponent};