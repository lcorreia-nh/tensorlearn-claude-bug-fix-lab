import test from 'node:test';
import assert from 'node:assert/strict';
import { getClaim } from '../../src/claims.mjs';

// Incident (docs/contract.md): viewer user-4 received claim-B, owned by user-42.
const claims = [
  { id: 'claim-A', ownerId: 'user-4', status: 'approved' },
  { id: 'claim-B', ownerId: 'user-42', status: 'pending' },
];

test('user-4 does not receive claim-B owned by user-42', () => {
  assert.equal(getClaim(claims, 'user-4', 'claim-B'), null);
});

test('user-42 still receives their own claim-B', () => {
  assert.equal(getClaim(claims, 'user-42', 'claim-B'), claims[1]);
});
