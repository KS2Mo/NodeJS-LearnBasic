

exports.index = (req, res, next) => {
    res.status(200).json({
      data:[
          {id:1 , name:'Mo'},
          {id:2 , name:'Neung'}
        ]
    })
}


exports.login = (req, res, next) => {
    //res.render('index', { title: 'Express' });
    res.status(200).json({
      message:'KS2Mo User login Page'
    })
}