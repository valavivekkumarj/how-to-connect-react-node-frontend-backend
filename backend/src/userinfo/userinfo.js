const express=require('express');
const router=express.Router();
const controller=require('../../contollers/data/userinfo');
//form show route
router.route('/userinfoform').get(controller.userinfoform);

//form data store route post
router.route('/userinfostore').post(controller.userinfostore);
//show data to user desiplay:
router.route('/userdatashow?name',controller.userinfoshow);

module.exports=router; 