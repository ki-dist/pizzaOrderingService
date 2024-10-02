const { AbilityBuilder, Ability } = require('@casl/ability');

// Define CASL abilities based on user roles
function defineAbilitiesFor(user) {
  const { can, cannot, build } = new AbilityBuilder(Ability);

  if (user.role === 'admin') {
    can('manage', 'all'); 
  } else if (user.role === 'user') {
    can('read', 'Menu'); 
    can('create', 'Order'); 
    cannot('delete', 'Order'); 
  } else {
    cannot('manage', 'all'); 
  }

  return build();
}

module.exports = {
  defineAbilitiesFor,
};
