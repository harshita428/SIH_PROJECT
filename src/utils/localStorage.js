// utils/localStorage.js
export function saveProgress(key, data) {
  try {
    const json = JSON.stringify(data);
    localStorage.setItem(key, json);
  } catch (e) {
    console.error('Failed to save progress', e);
  }
}

export function loadProgress(key) {
  try {
    const json = localStorage.getItem(key);
    return json ? JSON.parse(json) : null;
  } catch (e) {
    console.error('Failed to load progress', e);
    return null;
  }
}
