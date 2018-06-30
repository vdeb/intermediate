import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
import SimpleSchema from 'simpl-schema'

export const Recipes = new Mongo.Collection('Recipes');

SimpleSchema.extendOptions(['autoform']);

Ingredient = new SimpleSchema({
	name : {
		type : String
	},
	amount : {
		type : String
	}
});


RecipeSchema = new SimpleSchema({
	name : {
		type : String,
		label : "Name"
	},
	desc : {
		type : String,
		label : "Description"
	},
	ingredients : {
		type : Array
	},
	"ingredients.$" : {
		type : Ingredient
	},
	inMenu : {
		type : Boolean,
		defaultValue : false,
		optional : true,
		autoform: {
			type : 'hidden'
		}
	},
	author : {
		type : String,
		label : "Author",
		autoValue : function(){
			return this.userId
		},
		autoform : {
			type : 'hidden'
		}
	},
	createdAt : {
		type : Date,
		label : "Created At",
		autoValue : function(){
			return new Date()
		},
		autoform : {
			type : 'hidden'
		}
	}
});

Recipes.attachSchema(RecipeSchema);

