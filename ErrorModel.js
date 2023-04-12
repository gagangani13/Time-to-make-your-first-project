
import ReactDom from 'react-dom'
import './Form.css'
const Backdrop = (props) => {
    return <div className='backdrop' onClick={props.onClick}></div>
}
const Error=(props)=>{
    return (
        <div className='error'>
            <header><h2>{props.title}</h2></header>
            <p>{props.message}</p>
            <footer>
                <button type="button" onClick={props.onClick}>OKAY</button>
            </footer>
        </div>
  )
}
const ErrorModel = (props) => {
    return(
        <>
            {ReactDom.createPortal(<Backdrop onClick={props.onErrorMessage}/>,document.getElementById('Backdrop-root'))}
            {ReactDom.createPortal(<Error title={props.title} message={props.message} onClick={props.onErrorMessage} />,document.getElementById('Error-root'))}
        </>
    ) 
  
}

export default ErrorModel


