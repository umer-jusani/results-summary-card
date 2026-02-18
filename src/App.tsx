import './App.css'

function App() {

  return (
    <>
      <main>

        <div className="result-summary">

          <div className='results grid-flow' data-spacing='large'>
            <h1>Your Result</h1>

            <p className='result-score'>
              <span>76</span>
              of 100
            </p>

            <div className='grid-flow'>
              <h2 className='result-rank'>Great</h2>
              <p>
                You scored higher than 65% of the people who have taken these tests.
              </p>
            </div>
          </div>




          <div className='summary grid-flow' data-spacing='large'>
               <h2 className='section-title'>Summary</h2>

            <div className='grid-flow' data-spacing='small'>
            </div>

            
          </div>
        </div>

      </main>
    </>
  )
}

export default App
