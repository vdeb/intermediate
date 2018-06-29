import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

import { Recipes } from './recipes.js';

Recipes.allow({
	insert : function(userId,doc) {
		return !!userId;
	}
});