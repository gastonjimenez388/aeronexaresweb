const API_BASE = localStorage.getItem('mocHubUrl') || 'https://aeronexares.tail027590.ts.net/api';
function requireRole(role){ const user=JSON.parse(sessionStorage.getItem('portalUser')||'null'); if(!user||user.role!==role){ location.href='portal-login.html?v=secure2'; return null; } document.querySelectorAll('[data-user]').forEach(e=>e.textContent=user.id); return user; }
function logout(){ sessionStorage.removeItem('portalUser'); location.href='portal-login.html?v=secure2'; }
async function hub(path, fallback=[]){ try{ const user=JSON.parse(sessionStorage.getItem('portalUser')||'null'); const headers=user?.accessToken?{Authorization:'Bearer '+user.accessToken}:{}; const r=await fetch(API_BASE+path,{headers}); if(!r.ok) throw Error(); return await r.json(); }catch(_){ return fallback; } }

