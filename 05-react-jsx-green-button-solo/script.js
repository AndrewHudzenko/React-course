const App = ({ incomingButtonText, incomingClassName }) => {
  const [buttonText, setButtonText] = React.useState(incomingButtonText)
  const [className, setClassName] = React.useState(incomingClassName)

  const editButton = () => {
    setButtonText('Hello from React!')
    setClassName('main-button')
  }

  return (
    <div className="app">
      <button className={className} onClick={editButton}>
        {buttonText}
      </button>
    </div>
  )
}

const container = document.getElementById('app')
const root = ReactDOM.createRoot(container)
root.render(<App incomingButtonText="Click me" incomingClassName="" />)
