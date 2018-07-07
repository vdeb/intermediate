import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

import { Recipes } from './recipes.js';

Recipes.allow({
	insert : function(userId, doc) {
		return !!userId;
	},
	update : function(userId, doc) {
		return !!userId;
	}
});

Meteor.methods({
	toggleMenuItem: function(id, currentState) {
		Recipes.update(id, {
			$set: {
				inMenu: !currentState
			}
		});
	},
	deleteRecipe : function(id) {
		Recipes.remove(id);
	}
});