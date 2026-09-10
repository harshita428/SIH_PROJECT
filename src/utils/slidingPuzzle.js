/** Sliding-tile puzzle utilities (N-puzzle) */

export function parseGridSize(difficultyLabel) {
  const match = difficultyLabel?.match(/(\d+)x(\d+)/);
  return match ? parseInt(match[1], 10) : 3;
}

export function createSolvedTiles(size) {
  const total = size * size;
  return Array.from({ length: total - 1 }, (_, i) => i + 1).concat(0);
}

export function getNeighbors(index, size) {
  const row = Math.floor(index / size);
  const col = index % size;
  const neighbors = [];
  if (row > 0) neighbors.push(index - size);
  if (row < size - 1) neighbors.push(index + size);
  if (col > 0) neighbors.push(index - 1);
  if (col < size - 1) neighbors.push(index + 1);
  return neighbors;
}

export function shuffleTiles(tiles, size, numMoves = null) {
  const moves = numMoves ?? size * size * 12;
  let current = [...tiles];
  let emptyIdx = current.indexOf(0);

  for (let i = 0; i < moves; i++) {
    const neighbors = getNeighbors(emptyIdx, size);
    const pick = neighbors[Math.floor(Math.random() * neighbors.length)];
    [current[emptyIdx], current[pick]] = [current[pick], current[emptyIdx]];
    emptyIdx = pick;
  }

  if (isSolved(current)) {
    return shuffleTiles(tiles, size, moves);
  }
  return current;
}

export function isSolved(tiles) {
  for (let i = 0; i < tiles.length - 1; i++) {
    if (tiles[i] !== i + 1) return false;
  }
  return tiles[tiles.length - 1] === 0;
}

export function tryMove(tiles, size, tileIndex) {
  const emptyIdx = tiles.indexOf(0);
  if (!getNeighbors(emptyIdx, size).includes(tileIndex)) return tiles;
  const next = [...tiles];
  [next[emptyIdx], next[tileIndex]] = [next[tileIndex], next[emptyIdx]];
  return next;
}

/** Background position for a tile value in a solved grid */
export function tileBackgroundPosition(tileValue, size) {
  if (tileValue === 0) return {};
  const idx = tileValue - 1;
  const row = Math.floor(idx / size);
  const col = idx % size;
  const pct = size > 1 ? 100 / (size - 1) : 0;
  return { x: col * pct, y: row * pct };
}
