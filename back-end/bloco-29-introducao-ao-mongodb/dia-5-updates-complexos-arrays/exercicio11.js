db.movies.updateOne({ title: 'Batman' }, { $set: { 'cast.$[element].actor': 'Christian Bale' } }, { arrayFilters: [{ 'element.character': 'Batman' }] })

db.movies.updateOne({ title: 'Batman' }, { $set: { 'cast.$[element].actor': 'Michael Caine' } }, { arrayFilters: [{ 'element.character': 'Alfred' }] })

db.movies.updateOne({ title: 'Batman' }, { $set: { 'cast.$[element].actor': 'Heath Ledger' } }, { arrayFilters: [{ 'element.character': 'Coringa' }] })