// Contract: docs/contract.md. Pure function; do not mutate claims.
export function getClaim(claims, viewerId, claimId) {
  // An ID is a string that is still nonempty after trimming; anything else is malformed.
  const normalizeId = value => {
    if (typeof value !== 'string') return null;
    const id = value.trim();
    return id === '' ? null : id;
  };
  if (!Array.isArray(claims)) return null;
  const target = normalizeId(claimId);
  const viewer = normalizeId(viewerId);
  if (target === null || viewer === null) return null;
  return claims.find(claim =>
    claim !== null && typeof claim === 'object' &&
    normalizeId(claim.id) === target &&
    normalizeId(claim.ownerId) === viewer
  ) ?? null;
}
