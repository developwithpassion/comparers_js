import attribute_comparer from './attribute_comparer';
import comparisons from './comparisons';
import extend_comparer from './comparer_behaviours';

const by = (name, comparison_strategy = comparisons.default) =>
  extend_comparer(
    attribute_comparer.create_attribute_comparer(
      attribute_comparer.create_attribute_by_name_resolver(name),
      comparison_strategy
    )
  );

const by_fixed = (name, fixed_list) =>
  extend_comparer(
    attribute_comparer.create_attribute_comparer(
      attribute_comparer.create_attribute_by_name_resolver(name),
      comparisons.fixed(fixed_list)
    )
  );

const using_accessor = (field_resolver, comparison_strategy) => {
  comparison_strategy = comparison_strategy || comparisons.default;

  return extend_comparer(
    attribute_comparer.create_attribute_comparer(field_resolver, comparison_strategy)
  );
};

const by_descending = (...args) => by(...args).reverse;

const sort = {
  by_fixed,
  by,
  using_accessor,
  by_descending
};

export default sort;
