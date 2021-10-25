import React from 'react'

/*
 Dynamic values :
  - name
  - completed previous objectives ?
*/

const Headline = () => {
  return (
    <div className="flex gap-10 flex-col">
      <h2 className="text-5xl font-medium">
        Bonjour <span className="text-primary">Thomas</span>
      </h2>
      <p className='text-lg'>Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
    </div>
  )
}

export default Headline
