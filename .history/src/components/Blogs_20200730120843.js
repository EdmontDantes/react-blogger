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
      {blogs.map((blog, idx) => {
        
      })}
      // <div style={{marginTop: '100', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
        
      //   <div className='ui card' style={{ width: '75%', padding: '20px' }}>
        
      //     <div className='content'>
      //       <div className='header'>My First Blog</div>
      //       <br />
      //       <div className='meta'>Author: John Davies</div>
      //       <br />
      //       <div className='meta'>Subject: news</div>
      //       <hr />
      //       <div className='description'>
      //       Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis fugit obcaecati ut vel iste repellendus, 
      //       officia molestiae minus exercitationem nesciunt necessitatibus doloremque dolorem inventore vero maxime nemo 
      //       quaerat consequatur laborum?
      //       </div>
      //     </div>
      //   </div>
      

      // </div>


    );
  }
};

export default Blogs;