// normally, functions passed as parameters get their own
// scope (defaults to global)

var foot = {
  kick: () => {
    this.yelp = 'Ouch!'
    setImmediate(() => {
      console.log(this.yelp)
    })
  }
}

foot.kick()