document.addEventListener('DOMContentLoaded', function() {
  let db = coDesConnect('https://codes-g2.firebaseio.com/')
    let params = coDesExtract()
  	let value2 = params['key']
  	let value = params['pi']

  db.download('/', function(data) {
    context = data['portfolio'][value]
    console.log(context)
    coDesReplace('.desc', context)
    coDesReplace('.center-align', context)
    context = data['portfolio'][value]['projetos'][value2]
    coDesReplace('.card-content',context)
    coDesReplace('.card-image',context)
	})
})