var express = require('express');
var booksRouter = express.Router();
var {bookModel}=require('../models/bookModel');

function route(nav) {
    booksRouter.route('/')
        .get((req, res) => {
            bookModel.find((err,data)=>{
                if(err){
                        throw err;
                }
                else{
                    res.render('books.ejs', {
                        nav,
                        title: "Books",
                        books:data
                    })
                    }

            })

       
        });

    booksRouter.route('/add')
        .get((req, res) => {
            res.render('addbooks.ejs', {
                nav, 
                title: "Add Books"
            })
        });

    booksRouter.route('/save')
        .post((req, res) => {
            var addbook=new bookModel(req.body);
            addbook.save((err,data)=>{
                if(err){
                        res.json({status:"error"});
                        throw err;
                }
                else{
                        res.json({status:"success"});
                }
            });

            
        })


   

    booksRouter.route('/edit')
    .post((req,res)=>{
        bookModel.findById(req.body.id,(err,data)=>{
            if(err)
            {
                throw err;
            }
            else{
                res.render('bookUpdate.ejs',{
                    nav,
                    title:"Update Books",
                    data
                })
            }
        })
       
    });

booksRouter.route('/delete')
    .post((req,res)=>{
        bookModel.findByIdAndDelete(req.body.id,(err,data)=>{
            if(err)
            {
                throw err;
            }
            else{
                res.redirect("/books");
            }
        })
    })

 booksRouter.route('/update')
    .post((req,res)=>{
        bookModel.findByIdAndUpdate(req.body.id,{$set:req.body},(err,data)=>{
            if(err)
            {
                res.json({"status":"Error"});
            }
            else if(data.n==0){
                res.json({status:"Mismatch"});
            }
            else{
                res.json({status:"Success"});
            }
        })
    });
    

    booksRouter.route('/readmore')
        .post((req, res) => {
            console.log(req.body.id)
           bookModel.findById(req.body.id,(err,data)=>{
            if(err)
            {
                throw err;
            }
            else{
                res.render('book.ejs', {
                    nav,
                    title: "Book",
                    book: data
                })
    
            }
           });
            
        });

   return booksRouter;
}
module.exports = route;