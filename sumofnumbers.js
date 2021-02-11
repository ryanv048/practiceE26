const toAdd = [1, 2, 3, 4];

function sumFor(nums) {
  let sum = 0;
  for (const num of nums) {
    sum += num;
  }
  return sum;
}

function sumWhile(nums) {
  let i = 0;
  let sum = 0;
  while (i < nums.length) {
    sum += nums[i];
    i++;
  }
  return sum;
}

function sumRecursion(nums) {
  if (nums.length === 0) {
    return 0;
  }
  return nums[0] + sumRecursion(nums.slice(1, nums.length));
}

function sumTheSimpleWay(nums) {
  return _.reduce(nums, function (memo, num) { return memo + num; }, 0);
}

console.log(sumFor(toAdd));
console.log(sumWhile(toAdd));
console.log(sumRecursion(toAdd));
console.log(sumTheSimpleWay(toAdd));
