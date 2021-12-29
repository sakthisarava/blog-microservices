import React, { useState } from 'react'
import axios from 'axios'

function PostCreate() {
    const [title, setTitle] = useState('')
   
    const onSubmit = (event) => {
      event.preventDefault()

       axios.post('http://localhost:4000/posts', {
          title
      })

      setTitle('')
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label>Title</label>
                    <input 
                    value={title} 
                    onChange={e => setTitle(e.target.value)}
                    className="form-control" />
                </div>
                <button className="btn btn-primary" style={{ marginTop: 10 }}>Submit</button>
            </form>
        </div>
    )
}

export default PostCreate
