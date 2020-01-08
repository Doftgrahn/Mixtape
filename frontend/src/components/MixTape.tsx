import React, { FC } from 'react'

import { connect } from 'react-redux'
const MixTape: FC<any> = ({ auth }) => {
  console.log('hej', auth)

  return (
    <main>
      <h1>hej {auth.user.name}</h1>
      Skapa in låtlista!
      <button>+</button>
    </main>
  )
}
const mapStateToProps = (state: any) => ({
  auth: state.auth
})

export default connect(mapStateToProps)(MixTape)
