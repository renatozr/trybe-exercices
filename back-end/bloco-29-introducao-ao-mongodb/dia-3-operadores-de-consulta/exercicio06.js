db.movies.find({ $and: [{ ratings: { $elemMatch: { $gt: 103 } } }, { category: 'adventure' }] }, { _id:0, title:1, ratings:1, category:1 })