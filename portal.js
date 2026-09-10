const API_BASE = localStorage.getItem('mocHubUrl') || 'http://100.109.229.98:5050/api';
const USERS = { admin: { role: 'ADMIN' }, moc: { role: 'MOC' }, trainer: { role: 'TRAINER' } };
function requireRole(role){ const user=JSON.parse(sessionStorage.getItem('portalUser')||'null'); if(!user||user.role!==role){ location.href='portal-login.html'; return null; } document.querySelectorAll('[data-user]').forEach(e=>e.textContent=user.id); return user; }
function logout(){ sessionStorage.removeItem('portalUser'); location.href='portal-login.html'; }
async function hub(path, fallback=[]){ try{ const r=await fetch(API_BASE+path); if(!r.ok) throw Error(); return await r.json(); }catch(_){ return fallback; } }
