const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');


router.use(bodyParser.urlencoded({ extended : true }))


router.get('/', (req, res, next) => {  
   
    var type = req.query.type;
   
    if(type == 'list'){     
      
        try{          
            const dbcon = require('../db/dbconnect');       
            //개발자 추가한 요청내역
            req.body.mapper = 'reactSQL';
            req.body.crud = 'select'; 
            req.body.mapperid = 'interviewList';
            //다음 라우터에 보내라
            router.use('/',dbcon);
            next('route');
        }
        catch(error){
            console.log("디비연결에 오류")
        }       
    }
    else if(type == 'write'){
        
        res.send('sql접속할때 update로 해야되것네')
    }
    else if(type == 'update'){
         
        res.send('sql접속할때 update로 해야되것네')
    }
    else{
        
        res.send('sql접속할때 delete로 해야되것네')
    }
})


module.exports = router;