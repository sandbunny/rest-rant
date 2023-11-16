const React = require('react')
const Def = require('./default')

function home () {
    return (
      <Def>
          <main>
              <h1>HOME</h1>
              <div>
                <img src="public\images\eaters-collective-12eHC6FxPyg-unsplash.jpg" alt="food" />
                <div>
                  Photo by <a href="https://unsplash.com/@eaterscollective?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Eaters Collective</a> on <a href="https://unsplash.com/photos/pesto-pasta-with-sliced-tomatoes-served-on-white-ceramic-plate-12eHC6FxPyg?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
    </div>
              </div>
              <a href="/places">
  <button className="btn-primary">Places Page</button>
</a>
          </main>
      </Def>
    )
  }
  


module.exports = home

