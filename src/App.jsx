import format from 'date-fns/format'
import './App.css'

export default function App () {

  return(
    <p className="time-display">
      {format(new Date(), 'yyyy-MM-dd HH:mm:ss')}
    </p>
  )
}


