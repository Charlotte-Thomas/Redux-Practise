import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

const Messages = (props) => {

  const [data, setData] = useState([])

  useEffect(() => {
    setData(props.msgs.messages)
  }, [props.msgs])

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
  msgs: state.messages
})


export default connect(mapStateToProps, null)(Messages)
