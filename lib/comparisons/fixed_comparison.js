import { not, equal_to } from '@developwithpassion/matchers_js';

const fixed_value = not(equal_to(-1));

export default fixed_list => (first, second) => {
  const first_index = fixed_list.indexOf(first);
  const second_index = fixed_list.indexOf(second);

  if (fixed_value(first_index) && fixed_value(second_index)) return first_index - second_index;

  if (fixed_value(first_index)) return -1;

  if (fixed_value(second_index)) return 1;

  return 0;
};
