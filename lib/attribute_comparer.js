export const create_attribute_comparer = (field_resolver, comparison_strategy) => (
  first,
  second
) => {
  const first_value = field_resolver(first);
  const second_value = field_resolver(second);

  return comparison_strategy(first_value, second_value);
};

export const create_attribute_by_name_resolver = name => value => value[name];

export default {
  create_attribute_comparer,
  create_attribute_by_name_resolver
};
