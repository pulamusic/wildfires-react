import spinner from '../assets/spinner.gif'

const Spinner = () => {
  return (
    <div className="spinner">
      <img src={spinner} alt="loading spinner" />
      <h1>a moment please...</h1>
    </div>
  )
}

export default Spinner
