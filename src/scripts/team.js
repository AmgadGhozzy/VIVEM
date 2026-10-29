// ============================================================
// Team — dialog populated from data (cards are static in HTML)
// ============================================================
import { teamMembers } from '../data/team.js';
import { getLang } from './i18n.js';

export function initTeam() {
  const dialog = document.getElementById('team-dialog');
  const grid = document.querySelector('.team-grid');
  if (!dialog || !grid) return;

  grid.addEventListener('click', (e) => {
    const card = e.target.closest('.team-card');
    if (!card) return;
    const member = teamMembers.find((m) => m.id === card.dataset.memberId);
    if (!member) return;
    const lang = getLang();

    const img = dialog.querySelector('.team-dialog-photo');
    img.src = member.image;
    img.alt = member.name[lang];
    dialog.querySelector('h3').textContent = member.name[lang];
    dialog.querySelector('.team-dialog-role').textContent = member.role[lang];
    dialog.querySelector('.team-dialog-desc').textContent = member.description[lang];

    dialog.showModal();
  });

  dialog.querySelector('.dialog-close')?.addEventListener('click', () => dialog.close());
}
