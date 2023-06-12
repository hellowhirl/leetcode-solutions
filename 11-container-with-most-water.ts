// 11. Container With Most Water

function maxArea(height: number[]): number {
  let pointer1 = 0;
  let pointer2 = height.length - 1;
  let most = 0;

  // start from outsides, keep shifting pointers to lowest numbers on each side
  while (pointer1 < pointer2) {
    let volume;

    if (height[pointer1] < height[pointer2]) {
      volume = height[pointer1] * (pointer2 - pointer1);
      most = volume > most ? volume : most;
      pointer1++;
    } else {
      volume = height[pointer2] * (pointer2 - pointer1);
      most = volume > most ? volume : most;
      pointer2--;
    }
  }

  return most;
}

// maxArea([1, 1]);
maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]);
// maxArea([4, 3, 2, 1, 4]);
// maxArea([0, 2]);
// maxArea([1, 2]);
