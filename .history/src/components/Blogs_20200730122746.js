import React, {Component} from 'react'

let blogs = [
  {
    title: 'Is Ebola Worse?',
    author: 'John Peters',
    subject: 'news',
    article:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis labore vel officiis magnam, molestiae aspernatur quasi culpa iure alias quod atque sequi repellat corrupti cupiditate nulla autem? Delectus, sequi placeat.',
    objectId: '1'
  },
  {
    title: 'What to do in isolation',
    author: 'Wanda Simon',
    subject: 'news',
    article:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis labore vel officiis magnam, molestiae aspernatur quasi culpa iure alias quod atque sequi repellat corrupti cupiditate nulla autem? Delectus, sequi placeat.',
    objectId: '2'
  },
  {
    title: 'My Plants are Dying',
    author: 'Lucy Grand',
    subject: 'outdoors',
    article:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis labore vel officiis magnam, molestiae aspernatur quasi culpa iure alias quod atque sequi repellat corrupti cupiditate nulla autem? Delectus, sequi placeat.',
    objectId: '3'
  },
  {
    title: 'Stuck in A Room',
    author: 'Burke Ginsen',
    subject: 'news',
    article:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis labore vel officiis magnam, molestiae aspernatur quasi culpa iure alias quod atque sequi repellat corrupti cupiditate nulla autem? Delectus, sequi placeat.',
    objectId: '4'
  },
  {
    title: 'Outside My Window',
    author: 'Laura Nivers',
    subject: 'outdoors',
    article:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis labore vel officiis magnam, molestiae aspernatur quasi culpa iure alias quod atque sequi repellat corrupti cupiditate nulla autem? Delectus, sequi placeat.',
    objectId: '5'
  }
  ];




  class Blogs extends Component {
  constructor() {
    super()
    this.state={
      blogs:blogs
    }
  }
  render() {
    return (
      <div key={blog.objectId}
        style={{
          marginTop: '100px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column'
        }}
      >
        {this.state.blogs.map((blog, idx) => {
          return (
            <div className='ui card' style={{ width: '75%', padding: '20px' }}>
              <div className='content'>
                <div className='header'>{blog.title}</div>
                <br />
                <div className='meta'>Author: {blog.author}</div>
                <br />
                <div className='meta'>Subject: {blog.subject}</div>
                <hr />
                <div className='description'>{blog.article}</div>
              </div>
              <div className='extra content'>
                <a href='/' style={{ paddingRight: '10px' }}>
                  <i aria-hidden='true' className='thumbs up icon'></i>
                  {blog.likes} Likes
                </a>
                <a href='/'>
                  <i aria-hidden='true' className='comments icon'></i>
                  {blog.comments} Comments
                </a>
              </div>
              <div> </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Blogs;