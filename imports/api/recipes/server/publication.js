import { Meteor } from 'meteor/meteor';

import { Recipes } from '../recipes.js';

Meteor.publish('Recipes', function listsPublic() {
  return Recipes.find({
    author: this.userId,
  });
});