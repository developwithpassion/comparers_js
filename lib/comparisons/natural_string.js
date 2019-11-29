import default_comparison from './default';
import { equal_to, between, is_numeric } from '@developwithpassion/matchers_js';

const digit_matcher = equal_to(46).or(between(48, 57));

const normalize = data => {
  let normalized_data = [];
  let new_section = false;
  let current_char_code;
  let current_char;
  let group_index = 0;
  let index = 0;
  let continue_processesing = true;

  while (continue_processesing) {
    current_char = data.charAt(index++);
    current_char_code = current_char.charCodeAt(0);
    continue_processesing = current_char_code;

    const is_digit = digit_matcher(current_char_code);

    if (is_digit !== new_section) {
      normalized_data[++group_index] = '';
      new_section = is_digit;
    }

    normalized_data[group_index] += current_char;
  }

  return normalized_data;
};

const create_number_data = data => {
  const potential_number = Number(data);

  return {
    number: potential_number,
    valid_number: is_numeric(potential_number)
  };
};

const sort = (first, second, case_sensitivity) => {
  first = normalize(case_sensitivity(first));
  second = normalize(case_sensitivity(second));

  for (let index = 0; first[index] && second[index]; index++) {
    let left = first[index];
    let right = second[index];

    if (left === right) continue;

    let left_data = create_number_data(left);
    let right_data = create_number_data(right);

    if (left_data.valid_number && right_data.valid_number)
      return left_data.number - right_data.number;
    else return default_comparison(left, right);
  }
  return first.length - second.length;
};

export const case_sensitivity = {
  sensitive: value => value,

  insensitive: value => value.toLowerCase()
};

export default {
  case_sensitive: (first, second) => sort(first, second, case_sensitivity.sensitive),

  case_insensitive: (first, second) => sort(first, second, case_sensitivity.insensitive)
};
