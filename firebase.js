/* firebase.js — PN-22 (auditoria v10.16): primera extraccion minima del
   monolito index.html. Solo config + estado + serializadores REST puros
   (sin llamadas de red ni logica de negocio), para que el riesgo sea bajo.
   Se carga con defer en el <head>, ANTES que el script principal, que corre
   en DOMContentLoaded: los globales (const/function de ambito superior) se
   comparten entre scripts clasicos por el ambito lexico global.
   Si este archivo no carga, el banner de recursos faltantes avisa en
   pantalla (errRecurso('firebase')). */
const FIREBASE_CONFIG_PENDIENTE = false;
const FIREBASE_CONFIG = {apiKey:'AIzaSyB-bIlyVxI5BJb9DMYb-W4Q3GhhWMvNgSU', authDomain:'mascotas-cerca-de-ti.firebaseapp.com', projectId:'mascotas-cerca-de-ti', storageBucket:'mascotas-cerca-de-ti.firebasestorage.app', messagingSenderId:'163918868521', appId:'1:163918868521:web:a0933fede8d5d0bb56ec38'};

const FB={enabled:false,uid:null,idToken:null,refreshToken:null,tokenExpiraEn:0,renovacionTimer:null,sesionError:false,key:null,base:null,projectId:null};
const FB_AUTH_LS='mascotas_fb_auth_v1'; /* uid + idToken + refreshToken (PN-07) */
function fbConfigEfectiva(){
  if(typeof window!=='undefined'&&window.__FB_OVERRIDE__)return window.__FB_OVERRIDE__;
  return FIREBASE_CONFIG;
}
function fbHeaders(){return {'Content-Type':'application/json','Authorization':'Bearer '+FB.idToken};}
function fsVal(v){
  if(v==null)return {nullValue:null};
  if(typeof v==='number')return Number.isInteger(v)?{integerValue:String(v)}:{doubleValue:v};
  if(typeof v==='boolean')return {booleanValue:v};
  if(v instanceof Date)return {timestampValue:v.toISOString()};
  if(typeof v==='string')return {stringValue:v};
  if(Array.isArray(v))return {arrayValue:{values:v.map(fsVal)}};
  if(typeof v==='object'){const fields={};for(const k in v)fields[k]=fsVal(v[k]);return {mapValue:{fields}};}
  return {stringValue:String(v)};
}
function fsFields(obj){const fields={};for(const k in obj)fields[k]=fsVal(obj[k]);return {fields};}
function fsScalar(v){
  if(!v)return null;
  if(v.stringValue!==undefined)return v.stringValue;
  if(v.integerValue!==undefined)return parseInt(v.integerValue,10);
  if(v.doubleValue!==undefined)return v.doubleValue;
  if(v.booleanValue!==undefined)return v.booleanValue;
  if(v.timestampValue!==undefined)return new Date(v.timestampValue).getTime();
  if(v.nullValue!==undefined)return null;
  return null;
}
function fsDocToObj(doc){
  const o={id:doc.name.split('/').pop()};
  const f=doc.fields||{};
  for(const k in f){
    const v=f[k];
    if(v.mapValue){o[k]={};for(const kk in (v.mapValue.fields||{}))o[k][kk]=fsScalar(v.mapValue.fields[kk]);}
    else if(v.arrayValue){o[k]=(v.arrayValue.values||[]).map(fsScalar);}
    else o[k]=fsScalar(v);
  }
  return o;
}
