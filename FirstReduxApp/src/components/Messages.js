import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

const Messages = () => {

  const [data, setData] = useState([])

  useEffect(() => {
    //retrieve data
  }, [])

  return (
    <div>
      {data && data.map((msg, i) => {
        return <p key={i}>{msg}</p>
      })}
    </div>
  )
}

Messages.propTypes = {
}

const mapStateToProps = (state) => ({

})


export default connect(mapStateToProps, null)(Messages)
