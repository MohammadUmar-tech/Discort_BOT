const express=require('express')
const router=express.Router()
const {HandleshoridCreationandExecution}=require('../controllers/dynamicUrlsController')
router.route('/:shortid').get(HandleshoridCreationandExecution)

module.exports=router
