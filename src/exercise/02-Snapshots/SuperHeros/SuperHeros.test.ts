/* Exercise 2: Test using snapshots */

/* Mock the function using jest.fn().
Write three tests inside a describe block. You should use import the superHeros[] and getFlyingSuperHeros function.

1. First Test: 
Test should return an empty array if no superheros have the 'Fly' power"
2. Second Test:
Test should return an array of superHeros that have the 'Fly' power"
3. Third Test:
Test should match the snapshot of flying superheros.
The snapshot file should contain the expected output of the test.
The snapshot should be saved in a __snapshots__ directory next to the test file.
The snapshot file should be named SuperHeros.test.ts.snap.
*/

import { superHeros } from "./superHeros";
import { getFlyingSuperHeros } from "./getFlyingSuperHeros";


describe("getFlyingSuperHeros", () => {
  it("No superheros fly", () => {
   getFlyingSuperHeros([]);
   
 });

 it("Some superheros fly", () => {
   getFlyingSuperHeros(superHeros);
 });

 it("snapshot of flying superheros", () => {
  const snapshot = getFlyingSuperHeros(superHeros);
  expect(snapshot).toMatchSnapshot();
 })

})
