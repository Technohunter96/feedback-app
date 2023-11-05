
import { useContext } from "react"
import FeedbackContext from "../context/FeedbackContext"

function FeedbackStats() {
   const { feedback } = useContext(FeedbackContext)
   // Calculate ratings average
   let average = feedback.reduce((acc, cur) => {
         // udělá se součet ratingu všech polí a pak se vydělí čímž se udělá průměr
         return acc + cur.rating
      }, 0) / feedback.length

   average = average.toFixed(1).replace(/[.,]0$/, "") // one decimal place of average rating
   // if decimal is 0 replace it with nothing

   return (
      <div className="feedback-stats">
         <h4>{feedback.length} Reviews</h4>
         <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
      </div>
   )
}

export default FeedbackStats
