document.addEventListener('DOMContentLoaded', function() {
  let db = coDesConnect('https://codes-g2.firebaseio.com/')

  db.download('/', function(data) {
    context = data
    console.log(context)

    coDesReplace('.teste', context)
  })
})
