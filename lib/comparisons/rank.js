import rank from '@developwithpassion/string_rank_js';

export default filter => (first, second) => rank(filter, first) - rank(filter, second);
