import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

import '../../ui/layouts/HomeLayout.js';
import '../../ui/layouts/MainLayout.js';
import '../../ui/layouts/Recipes.js';

FlowRouter.route('/',{
 	name : 'home',
 	action(){
 		BlazeLayout.render('HomeLayout');
 	}
});

FlowRouter.route('/recipe-book',{
 	name : 'recipe-book',
 	action(){
 		BlazeLayout.render('MainLayout',{main: 'Recipes'});
 	}
});