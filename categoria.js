document.addEventListener('DOMContentLoaded', function() {
  let db = coDesConnect('https://codes-g2.firebaseio.com/')
  	let params = coDesExtract()
  	let value2 = params['key']
 	let value = document.querySelector(".link")
 	value.href="projeto.html?pi="+value2+'@key={{@key}}'

  db.download('/', function(data) {
    context = data['portfolio'][value2]
    coDesReplace('.teste', context)
  })
})