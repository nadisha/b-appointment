/*var list = {
				{
					id : 1,
					name : 'Nadisha'
				},
				{
					id : 2,
					name : 'Jhone'
				}
			}
			*/
exports.index = function(req, res){
	res.render('index', { title: 'Student List' });
};

// JSON API for list
exports.list = function(req, res) { 
	res.json({id : 1,name : 'Nadisha'});
};

exports.student = function(req, res) { 
	var studentId = req.params.id;
	var student = //list.findById(studentId);
	res.json({
					id : 2,
					name : 'Jhone'
				});
}