const { default: AdminBro } = require('admin-bro');
const AdminBroMongoose = require('admin-bro-mongoose');

AdminBro.registerAdapter(AdminBroMongoose);

const AdminUser =require('../admin/user/user')
const AdminProduct =require('../admin/product/product')
const AdminCategory =require('../admin/category/category')
const AdminComment =require('../admin/comment/comment')
const AdminFavorite =require('../admin/favorite/favorite')
const AdminDeliver =require('../admin/deliver/deliver')
// const AdminDeliver = require('../model/deliver')

/** @type {import('admin-bro').AdminBroOptions} */


const options = {
  resources: [
    AdminProduct,
    AdminUser,
    AdminCategory,
    AdminComment,
    AdminFavorite,
    AdminDeliver,
  ],
};

module.exports = options;
