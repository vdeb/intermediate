import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

import { Recipes } from '../recipes.js';

Meteor.publish('Recipes', function () {
	return Recipes.find({
		author: this.userId,
	});
});

Meteor.publish('singleRecipe', function (id) {
	check(id, String);
	return Recipes.find({
		_id: id,
	});
});