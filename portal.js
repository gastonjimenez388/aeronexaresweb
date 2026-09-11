const API_BASE = 'https://aeronexares.tail027590.ts.net/api';
function requireRole(role){ const user=JSON.parse(sessionStorage.getItem('portalUser')||'null'); if(!user||user.role!==role){ location.href='portal-login.html?v=secure5'; return null; } document.querySelectorAll('[data-user]').forEach(e=>e.textContent=user.id); return user; }
function logout(){ sessionStorage.removeItem('portalUser'); location.href='portal-login.html?v=secure5'; }
async function hub(path, fallback=[]){ try{ const user=JSON.parse(sessionStorage.getItem('portalUser')||'null'); const headers=user?.accessToken?{Authorization:'Bearer '+user.accessToken}:{}; const r=await fetch(API_BASE+path,{headers}); if(!r.ok) throw Error(); return await r.json(); }catch(_){ return fallback; } }


async function hubUpdate(path, body){ try{ const user=JSON.parse(sessionStorage.getItem('portalUser')||'null'); const headers={'Content-Type':'application/json'}; if(user?.accessToken) headers.Authorization='Bearer '+user.accessToken; const r=await fetch(API_BASE+path,{method:'PATCH',headers,body:JSON.stringify(body)}); if(!r.ok) throw Error(); return await r.json(); }catch(_){ return null; } }



