import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';
import { Meteor } from 'meteor/meteor';


import '../../ui/layouts/HomeLayout.js';
import '../../ui/layouts/MainLayout.js';
import '../../ui/layouts/Recipes.js';

Accounts.onLogin(function(){
	FlowRouter.go('recipe-book');
});

Accounts.onLogout(function(){
	console.log('on est dans onLogout');
	FlowRouter.go('home');
});


FlowRouter.triggers.enter([function(context,redirect){
	if(!Meteor.userId()){
		console.log('triggers triggered');
		FlowRouter.go('home');
	}
}]);

FlowRouter.route('/',{
	name : 'home',
	action(){
		if(Meteor.user()) {
			console.log('La personne est logged in');
			console.log(Meteor.userId());
			FlowRouter.go('recipe-book');
			console.log('home - gone to recipe-book')
		}
		else {
			console.log('rendering HomeLayout');
			BlazeLayout.render('HomeLayout');
		}
	}
});

FlowRouter.route('/recipe-book',{
	name : 'recipe-book',
	action(){
		console.log('in recipe-book');
		BlazeLayout.render('MainLayout',{main: 'Recipes'});
		console.log('layout rendered');
	}
});

FlowRouter.route('/recipe/:id',{
	name : 'recipe',
	action(){
		BlazeLayout.render('MainLayout',{main: 'RecipeSingle'});
	}
});