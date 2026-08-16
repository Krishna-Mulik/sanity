import { r as e } from './sanity-core.js';
// #region src/plugin-entry.ts
e();
let t = !1;
async function n(e) {
  if (t) return;
  t = !0;
  const { initSanity: n } = await import('./sanity-ui.js');
  n({ autoOpen: !0 });
}
// #endregion
export { n as mount };
