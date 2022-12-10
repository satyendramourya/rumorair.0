// import React, { Component } from 'react'
// import { Rating } from 'react-simple-star-rating'

// export default class Ratings extends Component {

//     // handleRating =() => {
//     //     rating = 0
//     // }

//     state = {
//         rating : 0,
//     }

//     setRating(rating){
//         this.setState({rating : rating})
//     }

//      onPointerEnter = () => console.log('Enter')
//      onPointerLeave = () => console.log('Leave')
//      onPointerMove = (value: , index: ) => console.log(value, index)


//   render() {
//     return (
      
//         <div className='App'>
//         <Rating
//           onClick={handleRating}
//           onPointerEnter={onPointerEnter}
//           onPointerLeave={onPointerLeave}
//           onPointerMove={onPointerMove}
//           /* Available Props */
//         />
//       </div>
//     )
//   }
// }


import React, { useState } from 'react'
import { Rating } from 'react-simple-star-rating'

export function MyComponent() {
  const [rating, setRating] = useState(0)

  // Catch Rating value
  const handleRating = (rate: number) => {
    setRating(rate)

    // other logic
  }
  // Optinal callback functions
  const onPointerEnter = () => console.log('Enter')
  const onPointerLeave = () => console.log('Leave')
  const onPointerMove = (value: number, index: number) => console.log(value, index)

  return (
    <div className='App'>
      <Rating
        onClick={handleRating}
        onPointerEnter={onPointerEnter}
        onPointerLeave={onPointerLeave}
        onPointerMove={onPointerMove}
        /* Available Props */
      />
    </div>
  )
}