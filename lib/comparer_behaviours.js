import reverse from './reverse_comparer';
import combine_comparers from './combine_comparer';

function extend_comparer(target) {
  Object.defineProperty(target, 'reverse', {
    get: function() {
      return extend_comparer(reverse(target));
    },
    writeable: false,
    enumerable: false,
    configurable: false
  });

  target.combine = other => extend_comparer(combine_comparers(target, other));

  return target;
}

export default extend_comparer;
