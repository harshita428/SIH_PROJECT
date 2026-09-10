const STORAGE_KEY = 'kalachakra-state-progress';

const GAME_IDS = ['explore', 'puzzle', 'quiz', 'mystery'];

function readAll() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function writeAll(data) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch {
    /* storage unavailable */
  }
}

export function getStateProgress(stateId) {
  const all = readAll();
  const state = all[stateId] || {};
  const games = {};
  GAME_IDS.forEach((id) => {
    games[id] = Boolean(state[id]);
  });
  const completedCount = GAME_IDS.filter((id) => games[id]).length;
  const masteryPercent = Math.round((completedCount / GAME_IDS.length) * 100);

  let masteryLevel = 'Explorer';
  if (masteryPercent >= 100) masteryLevel = 'State Master';
  else if (masteryPercent >= 75) masteryLevel = 'Heritage Scholar';
  else if (masteryPercent >= 50) masteryLevel = 'Culture Seeker';
  else if (masteryPercent >= 25) masteryLevel = 'Trailblazer';

  return { games, completedCount, masteryPercent, masteryLevel, totalGames: GAME_IDS.length };
}

export function markGameComplete(stateId, gameId) {
  if (!GAME_IDS.includes(gameId)) return;
  const all = readAll();
  if (!all[stateId]) all[stateId] = {};
  if (all[stateId][gameId]) return all[stateId];
  all[stateId][gameId] = { completedAt: Date.now() };
  writeAll(all);
  return all[stateId];
}

export function isGameComplete(stateId, gameId) {
  return getStateProgress(stateId).games[gameId];
}

export { GAME_IDS };
