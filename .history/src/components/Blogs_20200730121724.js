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
  render() {
    return (
      blogs.map((blog, idx) => {
        return(
          <div style={{marginTop: '100', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
        
        <div className='ui card' style={{ width: '75%', padding: '20px' }}>
        
          <div className='content'>
            <div className='header'>{blog.title}</div>
            <br />
            <div className='meta'>{blog.author}</div>
            <br />
            <div className='meta'>{blog.subject}</div>
            <hr />
            <div className='description'>{blog.article} Comments
            </div>
            <div className='extra content'>
              <a href='/'>
                <i aria-hidden='true' className='thumps up icon'></i>
                {blog.likes}
              </a>
            </div>
          </div>
        </div>
      

      </div>
        )
      })}



    );
  }
};

export default Blogs;