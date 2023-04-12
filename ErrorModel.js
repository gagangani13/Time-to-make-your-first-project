
import './Form.css'
const ErrorModel = (props) => {
    function errorMessage(){
        props.onErrorMessage()
    }
  return (
    <div className='backdrop' onClick={errorMessage}>
        <div className='error'>
            <header><h2>{props.title}</h2></header>
            <p>{props.message}</p>
            <footer>
                <button type="button" onClick={errorMessage}>OKAY</button>
            </footer>
        </div>
    </div>
    
  )
}

export default ErrorModel


