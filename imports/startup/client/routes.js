import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';
import { Meteor } from 'meteor/meteor';

import '../../ui/layouts/HomeLayout.js';
import '../../ui/layouts/MainLayout.js';
import '../../ui/layouts/Recipes.js';

FlowRouter.route('/',{
 	name : 'home',
 	action(){
 		if(Meteor.userId()) {
 			FlowRouter.go('recipe-book');
 		}
 		BlazeLayout.render('HomeLayout');
 	}
});

FlowRouter.route('/recipe-book',{
 	name : 'recipe-book',
 	action(){
 		BlazeLayout.render('MainLayout',{main: 'Recipes'});
 	}
});

FlowRouter.route('/recipe/:id',{
 	name : 'recipe',
 	action(){
 		BlazeLayout.render('MainLayout',{main: 'RecipeSingle'});
 	}
});